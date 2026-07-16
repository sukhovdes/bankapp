import { useEffect, useState } from 'react'
import Icon from './components/Icon.jsx'
import {
  Widgets,
  QuickActions,
  PendingActions,
  BannerGallery,
  IncomeIsland,
  ProfitIsland,
  PayoutTile,
  MonthCalendar,
  TabBar,
} from './App.jsx'

/*
 * Светлая версия (/light) по фрейму «Мой новый» (82216:1875).
 * Металлический фон пересобран на CSS по фигма-эллипсам (bg / silver):
 * база #CCD6E4/60%, три размытых диагональных белых блика, белый фейд снизу.
 * Блики медленно дрейфуют — «переливание металла».
 */
function Metal() {
  return (
    <div className="metal" aria-hidden>
      <div className="metal__streak metal__streak--1" />
      <div className="metal__streak metal__streak--2" />
      <div className="metal__streak metal__streak--3" />
      <div className="metal__fade" />
    </div>
  )
}

/* ---------- Шапка: аватар, имя, иконки ---------- */
function LightTopBar({ scrolled }) {
  return (
    <header className={`topbar topbar--light ${scrolled ? 'topbar--scrolled' : ''}`}>
      <img className="topbar__avatar" src="/products/avatar.png" alt="" />
      <div className="topbar__left">
        <div className="topbar__name topbar__name--dark">
          ИП Иванов И.Л.
          <Icon name="ic_m_chevron_right_filled" size={20} color="var(--text-tertiary)" />
        </div>
        <div className="topbar__inn topbar__inn--dark">ИНН 501603001313</div>
      </div>
      <div className="topbar__right">
        <button className="icon-btn" aria-label="Настройки">
          <Icon name="ic_m_settings_filled" size={24} color="var(--text-secondary)" />
        </button>
        <button className="icon-btn" aria-label="Уведомления">
          <Icon name="ic_m_bell_filled" size={24} color="var(--text-secondary)" />
        </button>
      </div>
    </header>
  )
}

/* ---------- Уведомления над балансом ----------
 * При загрузке скрыты, выезжают через пару секунд, закрываются крестиком.
 * Высота анимируется через grid-template-rows: 0fr → 1fr. */
const NOTIFS = [
  { id: 'role', icon: 'ic_m_key_filled', title: 'Петров С. И. запрашивает роль', sub: 'Описание баннера' },
  { id: 'docs', icon: 'ic_m_price_list_filled', title: 'Подпишите документы', sub: 'Описание баннера' },
]

function NotifRow({ n, withDivider, onRemove }) {
  const [hiding, setHiding] = useState(false)

  const close = () => {
    if (hiding) return
    setHiding(true)
    setTimeout(onRemove, 380) // после анимации схлопывания (0.35s)
  }

  return (
    <div className={`notif ${hiding ? 'notif--hide' : ''}`}>
      <div className="notif__clip">
        {withDivider && <div className="notif__divider" />}
        <div className="notif__row">
          <Icon name={n.icon} size={24} color="var(--text-secondary)" />
          <div className="notif__text">
            <div className="notif__title">{n.title}</div>
            <div className="notif__sub">{n.sub}</div>
          </div>
          <button className="notif__close" aria-label="Закрыть" onClick={close}>
            <Icon name="ic_m_cross_filled" size={20} color="var(--text-tertiary)" />
          </button>
        </div>
      </div>
    </div>
  )
}

function Notifications() {
  const [shown, setShown] = useState(false)
  const [items, setItems] = useState(NOTIFS)

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`notifs ${shown && items.length ? 'notifs--show' : ''}`}>
      <div className="notifs__clip">
        <div className="notifs__box">
          {items.map((n, i) => (
            <NotifRow
              key={n.id}
              n={n}
              withDivider={i > 0}
              onRemove={() => setItems((prev) => prev.filter((x) => x.id !== n.id))}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Баланс (тёмный текст, бейдж с обводкой) ---------- */
function LightBalance() {
  return (
    <div className="balance balance--light">
      <div className="balance__badge balance__badge--light">
        Общий баланс
        <Icon name="ic_m_picker_filled" size={16} color="var(--text-secondary)" />
      </div>
      <div className="balance__sum balance__sum--dark">200 000,50 ₽</div>
    </div>
  )
}

export default function Light() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app light">
      <Metal />
      <LightTopBar scrolled={scrolled} />
      <main className="screen">
        <Notifications />
        <LightBalance />
        <Widgets />
        <div className="products">
          <QuickActions />
          <BannerGallery />
          <PendingActions />
          <IncomeIsland />
          <ProfitIsland />
          <PayoutTile />
          <MonthCalendar />
        </div>
      </main>
      <TabBar />
    </div>
  )
}
