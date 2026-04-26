export function trackEvent(name, properties = {}) {
  fetch('/api/track-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event_name: name, properties }),
  }).catch(() => {})
}
