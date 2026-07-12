import React, { useEffect } from 'react'
import { DIFFERENTIAL_SPRINT_SUBSPECIALTIES } from '../../data/differentialSprint/subspecialties'
import { DS_POOL, DS_POOL_LABELS } from '../../data/differentialSprint/types'
import { selectDifferentialSprintQuestions } from '../../data/differentialSprint/selectQuestions'

function LockBadge() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '3px',
      fontSize: '10px', fontWeight: '700', color: '#A78BFA',
      background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)',
      borderRadius: '999px', padding: '1px 8px', marginLeft: '8px',
      textTransform: 'none', letterSpacing: 'normal',
    }}>
      🔒 Premium
    </span>
  )
}

export function SprintSetupControls({
  allQuestions,
  progress,
  selectedSubspecialties,
  onToggleSubspecialty,
  onSelectAllSubspecialties,
  pool,
  onSetPool,
  count,
  onSetCount,
  randomOrder,
  onSetRandomOrder,
  countCap = null, // free-preview cap on Number of Questions; null = unlimited
  locked = false,  // free-preview mode: subspecialties/pool/count are fixed, not customizable
}) {
  const isAllSelected = selectedSubspecialties.length === 0

  const poolCount = (poolValue) => selectDifferentialSprintQuestions({
    allQuestions, progress, subspecialtyIds: selectedSubspecialties,
    pool: poolValue, count: Infinity, randomOrder: false,
  }).length

  const maxCount = poolCount(pool)
  const sliderMax = countCap != null ? Math.min(maxCount, countCap) : maxCount

  // Keep the selected count in range whenever the subspecialty/pool
  // selection (or the free-preview cap) changes the number pickable.
  useEffect(() => {
    if (sliderMax === 0) return
    const clamped = Math.min(Math.max(1, count), sliderMax)
    if (clamped !== count) onSetCount(clamped)
  }, [pool, selectedSubspecialties, sliderMax])

  return (
    <div>
      {/* Subspecialties */}
      <div style={{ marginBottom: '24px', opacity: locked ? 0.5 : 1 }}>
        <label style={{
          display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '600',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: '10px',
        }}>Subspecialties {locked && <LockBadge />}</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <button
            onClick={onSelectAllSubspecialties}
            disabled={locked}
            style={{
              padding: '8px 14px', borderRadius: '999px',
              border: `2px solid ${isAllSelected ? 'var(--accent-cyan)' : 'var(--border-default)'}`,
              background: isAllSelected ? 'var(--accent-cyan-dim)' : 'var(--bg-elevated)',
              color: isAllSelected ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              cursor: locked ? 'not-allowed' : 'pointer', fontSize: '13px', fontWeight: '600',
              fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
            }}
          >
            All subspecialties
          </button>
          {DIFFERENTIAL_SPRINT_SUBSPECIALTIES.map(sub => {
            const active = selectedSubspecialties.includes(sub.id)
            return (
              <button
                key={sub.id}
                onClick={() => onToggleSubspecialty(sub.id)}
                disabled={locked}
                style={{
                  padding: '8px 14px', borderRadius: '999px',
                  border: `2px solid ${active ? sub.color : 'var(--border-default)'}`,
                  background: active ? sub.colorDim : 'var(--bg-elevated)',
                  color: active ? sub.color : 'var(--text-secondary)',
                  cursor: locked ? 'not-allowed' : 'pointer', fontSize: '13px', fontWeight: '600',
                  fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
                }}
              >
                {sub.icon} {sub.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Question pool */}
      <div style={{ marginBottom: '24px', opacity: locked ? 0.5 : 1 }}>
        <label style={{
          display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '600',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: '10px',
        }}>Question Pool {locked && <LockBadge />}</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {Object.values(DS_POOL).map(poolValue => {
            const c = poolCount(poolValue)
            const isDisabled = locked || c === 0
            return (
              <button
                key={poolValue}
                onClick={() => onSetPool(poolValue)}
                disabled={isDisabled}
                style={{
                  padding: '12px 16px', borderRadius: 'var(--radius-md)',
                  border: `2px solid ${pool === poolValue ? 'var(--accent-cyan)' : 'var(--border-default)'}`,
                  background: pool === poolValue ? 'var(--accent-cyan-dim)' : 'var(--bg-elevated)',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  opacity: c === 0 ? 0.4 : 1,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {DS_POOL_LABELS[poolValue]}
                </span>
                <span style={{
                  fontSize: '13px', fontWeight: '700',
                  color: pool === poolValue ? 'var(--accent-cyan)' : 'var(--text-muted)',
                }}>
                  {c}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Number of questions */}
      <div style={{ marginBottom: '24px', opacity: locked ? 0.5 : 1 }}>
        <label style={{
          display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '600',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: '10px',
        }}>Number of Questions {locked && <LockBadge />}</label>
        <div style={{
          padding: '12px 16px', borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-default)', background: 'var(--bg-elevated)',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <input
            type="range"
            min={1}
            max={sliderMax || 1}
            value={Math.min(count, sliderMax || 1)}
            onChange={e => onSetCount(Number(e.target.value))}
            disabled={locked || sliderMax === 0}
            style={{ flex: 1, accentColor: 'var(--accent-cyan)', cursor: (locked || sliderMax === 0) ? 'not-allowed' : 'pointer' }}
          />
          <input
            type="number"
            min={1}
            max={sliderMax || 1}
            value={Math.min(count, sliderMax || 1)}
            onChange={e => {
              const v = Math.max(1, Math.min(Number(e.target.value), sliderMax))
              onSetCount(v)
            }}
            disabled={locked || sliderMax === 0}
            style={{
              width: '56px', padding: '4px 8px', borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-default)', background: 'var(--bg-primary)',
              color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600',
              fontFamily: 'var(--font-body)', textAlign: 'center',
            }}
          />
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            of {sliderMax}
          </span>
        </div>
        {!locked && countCap != null && maxCount > countCap && (
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
            Free preview is capped at {countCap} questions. Subscribe for unlimited access.
          </div>
        )}
      </div>

      {/* Random order toggle */}
      <div style={{ opacity: locked ? 0.5 : 1 }}>
        <button
          onClick={() => onSetRandomOrder(!randomOrder)}
          disabled={locked}
          style={{
            width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)',
            border: `2px solid ${randomOrder ? 'var(--accent-cyan)' : 'var(--border-default)'}`,
            background: randomOrder ? 'var(--accent-cyan-dim)' : 'var(--bg-elevated)',
            cursor: locked ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', fontFamily: 'var(--font-body)',
            transition: 'all var(--transition)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🔀</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)',
                display: 'flex', alignItems: 'center',
              }}>Random Order {locked && <LockBadge />}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Shuffle question order</div>
            </div>
          </div>
          <div style={{
            width: '36px', height: '20px', borderRadius: '999px',
            background: randomOrder ? 'var(--accent-cyan)' : 'var(--border-default)',
            position: 'relative', transition: 'background 0.2s',
          }}>
            <div style={{
              position: 'absolute', top: '2px',
              left: randomOrder ? '18px' : '2px',
              width: '16px', height: '16px', borderRadius: '50%',
              background: '#fff', transition: 'left 0.2s',
            }} />
          </div>
        </button>
      </div>
    </div>
  )
}
