/* RadiologyStack daily-review sheets — shared renderer (v1). No dependencies.
 *
 *   RSheet.render(container, data, options) -> Promise
 *     container : an empty element; it becomes <div class="rs-sheet">…
 *     data      : a sheet object (see data/*.json, schema 1)
 *     options   : { diagrams: { "<id>": "<svg…>" } }   // inline SVG strings (standalone build)
 *              or { diagramBase: "/sheets/diagrams/" }  // fetch <base><id>.svg (website)
 *
 * Diagrams are always INLINED (never <img>) so theme colours apply and labels can be quizzed.
 * Data html strings are trusted content written for this project (rendered with innerHTML).
 */
(function (global) {
  "use strict";

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function getSvg(id, options) {
    if (options.diagrams && options.diagrams[id]) return Promise.resolve(options.diagrams[id]);
    if (options.diagramBase) {
      return fetch(options.diagramBase + id + ".svg").then(function (r) {
        if (!r.ok) throw new Error("diagram " + id + " " + r.status);
        return r.text();
      });
    }
    return Promise.reject(new Error("no source for diagram " + id));
  }

  /* Draw a small background pill behind every anatomy label (<text class="lb">), sized from the
     rendered text so it fits whatever font the site uses. Re-runs when the diagram first becomes
     visible (e.g. inside a hidden tab) and after web fonts finish loading. */
  var SVGNS = "http://www.w3.org/2000/svg";
  function labelBackgrounds(svg) {
    if (!svg) return;
    var labels = svg.querySelectorAll("text.lb");
    if (!labels.length) return;
    function draw() {
      if (!svg.getBoundingClientRect().width) return false;
      svg.querySelectorAll("rect.rs-lbg").forEach(function (r) { r.parentNode.removeChild(r); });
      labels.forEach(function (t) {
        var b = t.getBBox();
        if (!b.width) return;
        var r = document.createElementNS(SVGNS, "rect");
        r.setAttribute("class", "rs-lbg");
        r.setAttribute("x", (b.x - 3).toFixed(1));
        r.setAttribute("y", (b.y - 1).toFixed(1));
        r.setAttribute("width", (b.width + 6).toFixed(1));
        r.setAttribute("height", (b.height + 2).toFixed(1));
        r.setAttribute("rx", "4");
        svg.appendChild(r);   // labels + backgrounds go on top of every line in the diagram
        svg.appendChild(t);
      });
      return true;
    }
    if (!draw() && typeof ResizeObserver !== "undefined") {
      var ro = new ResizeObserver(function () { if (draw()) ro.disconnect(); });
      ro.observe(svg);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  }

  function renderList(block) {
    var ul = el("ul", "rs-bz");
    block.items.forEach(function (it) {
      var li = el("li", it.star ? "rs-star" : "");
      li.appendChild(el("span", "", it.q));
      li.appendChild(el("b", "rs-ans rs-a rs-k-" + (it.kind || "buzz"), it.a));
      ul.appendChild(li);
    });
    return ul;
  }

  function renderTable(block) {
    var t = el("table", "rs-tbl" + (block.heat ? " rs-heat" : ""));
    var quiz = (block.quiz_cols || []).map(function (n) { return n - 1; });
    var thead = el("thead"), hr = el("tr");
    block.head.forEach(function (h) { hr.appendChild(el("th", "", h)); });
    thead.appendChild(hr); t.appendChild(thead);
    var tb = el("tbody");
    block.rows.forEach(function (row) {
      var tr = el("tr", row.star ? "rs-star" : "");
      row.cells.forEach(function (c, i) {
        var cell = typeof c === "string" ? { html: c } : c;
        var cls = [cell["class"] || "", quiz.indexOf(i) >= 0 ? "rs-a" : ""].join(" ").trim();
        var td = el("td", cls, cell.html);
        if (cell.colspan) td.colSpan = cell.colspan;
        tr.appendChild(td);
      });
      tb.appendChild(tr);
    });
    t.appendChild(tb);
    return t;
  }

  function renderCard(card, options, pending) {
    var c = el("div", "rs-card" + (card.star ? " rs-star" : ""));
    c.style.setProperty("--rs-h", card.hue == null ? 240 : card.hue);
    c.appendChild(el("h2", "", card.title));
    card.blocks.forEach(function (b) {
      if (b.type === "list") c.appendChild(renderList(b));
      else if (b.type === "table") c.appendChild(renderTable(b));
      else if (b.type === "heading") c.appendChild(el("div", "rs-heading", b.text));
      else if (b.type === "mnemonic") c.appendChild(el("div", "rs-mn", b.html));
      else if (b.type === "note") c.appendChild(el("p", "rs-note", b.html));
      else if (b.type === "diagram") {
        var holder = el("div", "rs-dg");
        holder.setAttribute("data-diagram", b.id);
        c.appendChild(holder);
        pending.push(getSvg(b.id, options).then(function (svg) {
          holder.innerHTML = svg;
          labelBackgrounds(holder.querySelector("svg"));
        }));
      }
    });
    return c;
  }

  function toolbar(root, data) {
    var bar = el("div", "rs-bar"), w = el("div", "rs-wrap");
    w.appendChild(el("div", "rs-title", data.title));
    var tQ = el("button", "rs-tgl", '<span class="rs-sw"></span>Quiz mode');
    var tS = el("button", "rs-tgl", '<span class="rs-sw"></span>⭐ only');
    var bR = el("button", "rs-btn", "Reveal all");
    [tQ, tS].forEach(function (b) { b.type = "button"; b.setAttribute("aria-pressed", "false"); });
    bR.type = "button"; bR.style.display = "none";
    w.appendChild(tQ); w.appendChild(tS); w.appendChild(bR);
    w.appendChild(el("span", "rs-key",
      '<b style="background:var(--rs-yel-bg);color:var(--rs-yel-fg)">buzzword</b> ' +
      '<b style="background:var(--rs-red-bg);color:var(--rs-red-fg)">number</b> ' +
      '<b style="background:var(--rs-blue-bg);color:var(--rs-blue-fg)">next step</b> 🟢 mnemonic'));
    bar.appendChild(w);

    function blanks() { return root.querySelectorAll(".rs-a, svg.rs-diagram text.q"); }
    function setQuiz(on) {
      tQ.setAttribute("aria-pressed", on);
      root.classList.toggle("rs-quiz", on);
      bR.style.display = on ? "" : "none";
      blanks().forEach(function (e) { e.classList.remove("rs-rev"); });
    }
    tQ.addEventListener("click", function () { setQuiz(tQ.getAttribute("aria-pressed") !== "true"); });
    bR.addEventListener("click", function () { blanks().forEach(function (e) { e.classList.add("rs-rev"); }); });
    root.addEventListener("click", function (e) {
      if (!root.classList.contains("rs-quiz")) return;
      var a = e.target.closest(".rs-a, svg.rs-diagram text.q");
      if (a) a.classList.toggle("rs-rev");
    });

    function setStar(on) {
      tS.setAttribute("aria-pressed", on);
      root.querySelectorAll(".rs-fh").forEach(function (e) { e.classList.remove("rs-fh"); });
      if (!on) return;
      var hide = function (e) { e.classList.add("rs-fh"); };
      root.querySelectorAll(".rs-bz li:not(.rs-star), .rs-tbl tbody tr:not(.rs-star)").forEach(hide);
      root.querySelectorAll(".rs-tbl").forEach(function (t) { if (!t.querySelector("tbody tr.rs-star")) hide(t); });
      root.querySelectorAll(".rs-bz").forEach(function (u) { if (!u.querySelector("li.rs-star")) hide(u); });
      root.querySelectorAll(".rs-heading").forEach(function (h) {
        var n = h.nextElementSibling; if (n && n.classList.contains("rs-fh")) hide(h);
      });
      root.querySelectorAll(".rs-card").forEach(function (c) {
        if (!c.classList.contains("rs-star") && !c.querySelector(".rs-star")) hide(c);
      });
      root.querySelectorAll(".rs-grp").forEach(function (g) {
        var s = g.nextElementSibling; if (s && !s.querySelector(".rs-card:not(.rs-fh)")) hide(g);
      });
    }
    tS.addEventListener("click", function () { setStar(tS.getAttribute("aria-pressed") !== "true"); });
    return bar;
  }

  function render(container, data, options) {
    options = options || {};
    if (data.schema !== 1) console.warn("RSheet: unexpected schema", data.schema);
    container.innerHTML = "";
    container.classList.add("rs-sheet");
    container.setAttribute("data-sheet", data.id);
    container.appendChild(toolbar(container, data));
    var wrap = el("div", "rs-wrap"), pending = [];
    if (data.subtitle) wrap.appendChild(el("p", "rs-sub", data.subtitle));
    data.sections.forEach(function (s) {
      if (s.title) {
        var g = el("div", "rs-grp", s.title + (s.subtitle ? " <small>(" + s.subtitle + ")</small>" : ""));
        g.style.setProperty("--rs-h", s.hue == null ? 240 : s.hue);
        wrap.appendChild(g);
      }
      var box = el("div", s.layout === "grid" ? "rs-grid" : "rs-cols");
      if (s.min) box.style.setProperty("--rs-min", s.min + "px");
      s.cards.forEach(function (card) { box.appendChild(renderCard(card, options, pending)); });
      wrap.appendChild(box);
    });
    container.appendChild(wrap);
    return Promise.all(pending).then(function () { return container; });
  }

  global.RSheet = { render: render, version: "1" };
})(typeof window !== "undefined" ? window : this);
