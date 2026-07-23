import { useState } from 'react'
import Icon from './components/Icon.jsx'

/*
 * Экран «Настроить главный» (/settings).
 * Открывается по «Настроить экран» внизу ленты. «Добавить разделы» —
 * пока только кнопка. Корзина удаляет раздел (локально, с анимацией),
 * drag-ручка декоративная.
 */
const SECTIONS = [
  { id: 'qa', label: 'Быстрые действия', settings: true, trash: true },
  { id: 'banners', label: 'Баннеры', trash: true },
  { id: 'pending', label: 'Ожидают действия' },
  { id: 'income', label: 'Доходные продукты', trash: true },
  { id: 'profit', label: 'Прибыль', trash: true },
  { id: 'payout', label: 'Поступления', trash: true },
  { id: 'services', label: 'Мои сервисы', settings: true, trash: true },
  { id: 'calendar', label: 'Календарь', trash: true },
]

function SectionRow({ s, onRemove }) {
  const [hiding, setHiding] = useState(false)

  const remove = () => {
    if (hiding) return
    setHiding(true)
    setTimeout(onRemove, 380)
  }

  return (
    <div className={`sec ${hiding ? 'sec--hide' : ''}`}>
      <div className="sec__clip">
        <div className="sec__row">
          <span className="sec__label">{s.label}</span>
          <div className="sec__controls">
            {s.settings && (
              <button className="sec__btn" aria-label="Настроить">
                <Icon name="ic_s_settings_filled" size={16} color="var(--text-secondary)" />
              </button>
            )}
            {s.trash && (
              <button className="sec__btn" aria-label="Удалить" onClick={remove}>
                <Icon name="ic_m_trash_bin_filled" size={24} color="var(--text-secondary)" />
              </button>
            )}
            <span className="sec__drag">
              <Icon name="ic_m_dnd_handler_filled" size={24} color="var(--text-tertiary)" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Settings() {
  const [sections, setSections] = useState(SECTIONS)

  return (
    <div className="settings">
      <header className="settings__nav">
        <button
          className="icon-btn"
          aria-label="Назад"
          onClick={() => (window.history.length > 1 ? window.history.back() : (window.location.href = '/'))}
        >
          <Icon name="ic_m_chevron_left_filled" size={24} color="var(--text-secondary)" />
        </button>
      </header>

      <h1 className="settings__title">Настроить главный</h1>
      <p className="settings__subtitle">Добавьте новые или измените порядок разделов</p>

      <button className="settings__add">Добавить разделы</button>

      <div className="settings__wallet">
        <div>
          <div className="settings__wallet-title">
            Баланс
            <Icon name="ic_s_chevron_right_filled" size={16} color="var(--text-tertiary)" />
          </div>
          <div className="settings__wallet-sub">Только баланс и действия</div>
        </div>
        <div className="settings__preview" aria-hidden>
          <span className="settings__preview-bar" />
          <div className="settings__preview-row">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="settings__list">
        {sections.map((s) => (
          <SectionRow
            key={s.id}
            s={s}
            onRemove={() => setSections((prev) => prev.filter((x) => x.id !== s.id))}
          />
        ))}
      </div>
    </div>
  )
}
