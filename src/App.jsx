import { useState } from 'react'
import Icon from './components/Icon.jsx'
import bgGradientSvg from '../public/bg-header-gradient.svg?raw'

/* ---------- Фоновый градиент шапки (SVG из Figma, инлайн ради backdrop-blur) ---------- */
function HeaderGradient() {
  return (
    <div className="bg-gradient" aria-hidden>
      <div
        className="bg-gradient__group"
        dangerouslySetInnerHTML={{ __html: bgGradientSvg }}
      />
    </div>
  )
}

/* ---------- Верхняя панель ---------- */
function TopBar({ scrolled }) {
  return (
    <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
      <div className="topbar__left">
        <div className="topbar__name">
          ИП Левитан И.И.
          <Icon name="ic_s_dropdown_filled" size={16} color="#fff" />
        </div>
        <div className="topbar__inn">ИНН 501603001313</div>
      </div>
      <div className="topbar__right">
        <button className="icon-btn" aria-label="Уведомления">
          <Icon name="ic_m_bell_filled" size={24} color="#fff" />
        </button>
        <button className="icon-btn" aria-label="Настройки">
          <Icon name="ic_m_settings_filled" size={24} color="#fff" />
        </button>
      </div>
    </header>
  )
}

/* ---------- Баланс ---------- */
function Balance() {
  return (
    <div className="balance">
      <div className="balance__badge">
        Общий баланс
        <Icon name="ic_m_picker_filled" size={16} color="#fff" />
      </div>
      <div className="balance__sum">8 187 123 ₽</div>
    </div>
  )
}

/* ---------- Карусель продуктов ---------- */
function Widgets() {
  return (
    <div className="widgets">
      <div className="widget">
        <div>
          <div className="widget__name">Счёт для бизнеса</div>
          <div className="widget__sum">200 000,50 ₽</div>
          <div className="bankcard">
            <Icon name="ic_m_cloud_filled" size={12} color="#fff" />
            <span>4324</span>
          </div>
        </div>
        <div className="widget__caption">•• 1234</div>
      </div>

      <div className="widget">
        <div>
          <div className="widget__name">Отсрочка платежа</div>
          <div className="widget__sum">200 000 ₽</div>
          <div className="widget__text">10 дней без %<br />на любые покупки</div>
        </div>
        <button className="btn btn--secondary">Оформить</button>
      </div>

      <div className="widget">
        <div>
          <div className="widget__name">Накопления</div>
          <div className="widget__sum">320 251,23 ₽</div>
        </div>
        <div className="widget__caption widget__caption--dark">10,85% годовых</div>
      </div>

      <div className="widget widget--glass">
        <div>
          <div className="widget__title-light">Новый продукт</div>
          <div className="widget__subtitle-light">Карты, сервисы и услуги</div>
        </div>
        <button className="btn btn--glass">Открыть</button>
      </div>
    </div>
  )
}

/* ---------- Заявка на кредит ---------- */
function CreditCard() {
  return (
    <section className="card credit">
      <div className="credit__row">
        <span>Заявка на кредит •• 9266</span>
        <Icon name="ic_s_chevron_right_filled" size={16} color="var(--text-tertiary)" />
      </div>
      <div className="progress">
        <div className="progress__fill" style={{ width: '84%' }} />
      </div>
    </section>
  )
}

/* ---------- Ожидают действия ---------- */
function PendingActions() {
  return (
    <section className="card pending">
      <h2 className="pending__title">Ожидают действия</h2>
      <div className="cell">
        <div className="cell__center">
          <div className="cell__text">Платёж по займу •• 9976</div>
          <div className="cell__sub">102 525 ₽ до 18 ноября</div>
        </div>
        <button className="btn btn--secondary btn--r8">Внести</button>
      </div>
      <div className="cell">
        <div className="cell__center">
          <div className="cell__text">Платежи на подпись</div>
        </div>
        <div className="cell__right">
          <span className="counter">6</span>
          <Icon name="ic_m_chevron_right_filled" size={24} color="var(--text-tertiary)" />
        </div>
      </div>
    </section>
  )
}

/* ---------- Заработали от доходных продуктов ---------- */
function IncomeIsland() {
  return (
    <section className="card card--shadow income">
      <div className="income__header">
        <div className="income__title">Заработали от доходных продуктов</div>
        <div className="income__sum">+15 498,32 ₽</div>
      </div>
      <div className="forecast">
        <div className="forecast__title">Прогноз дохода</div>
        <div className="forecast__chart">
          <div className="forecast__bar forecast__bar--grey">
            <span>+450 ₽</span>
          </div>
          <div className="forecast__bar forecast__bar--green">
            <span>+13 950 ₽</span>
          </div>
        </div>
        <div className="forecast__axis" />
        <div className="forecast__labels">
          <span style={{ left: '23%' }}>Завтра</span>
          <span style={{ left: '66%' }}>Через 30 дней</span>
        </div>
      </div>
    </section>
  )
}

/* ---------- Прибыль ---------- */
function ProfitIsland() {
  return (
    <section className="card card--shadow profit">
      <div className="profit__row">
        <span className="profit__label">Прибыль</span>
        <span className="profit__trend">
          <Icon name="ic_s_dropdown_collapse" size={16} color="var(--text-positive)" />
          11% <span className="profit__delta">(2 435,00 ₽)</span>
        </span>
      </div>
      <div className="profit__sum">40 000,00 ₽</div>
      <div className="profit__list">
        <div className="profit__item">
          <span>Доходы</span>
          <span className="profit__value">300 000 ₽</span>
        </div>
        <div className="profit__item">
          <span>Расходы</span>
          <span className="profit__value">260 000 ₽</span>
        </div>
      </div>
    </section>
  )
}

/* ---------- Ожидаемые поступления ---------- */
function PayoutTile() {
  return (
    <section className="card card--shadow payout">
      <div className="payout__body">
        <div className="payout__titlerow">
          <span className="payout__title">Ожидаемые поступления</span>
          <span className="payout__badge">5</span>
        </div>
        <div className="payout__sum">3 454 990 ₽</div>
        <button className="payout__btn">
          <Icon name="ic_m_confirmed_filled" size={20} color="var(--blue)" />
          Получить сейчас
        </button>
      </div>
      <div className="payout__logos">
        <img className="payout__logo payout__logo--ozon" src="/products/logo_ozon_blue.svg" alt="Ozon" />
        <img className="payout__logo payout__logo--second" src="/products/logo_unknown.svg" alt="" />
        <img className="payout__logo payout__logo--wb" src="/products/logo_wildberries.svg" alt="Wildberries" />
      </div>
    </section>
  )
}

/* ---------- Календарь ---------- */
const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const DOTS = new Set([12, 13, 18, 21, 26])

function buildDays() {
  const days = []
  for (let d = 27; d <= 31; d++) days.push({ n: d, muted: true })
  for (let d = 1; d <= 31; d++) days.push({ n: d, muted: false, dot: DOTS.has(d) })
  for (let d = 1; d <= 6; d++) days.push({ n: d, muted: true })
  return days
}

function MonthCalendar() {
  const days = buildDays()
  return (
    <section className="card card--shadow month">
      <div className="month__header">
        <button className="icon-btn icon-btn--s" aria-label="Предыдущий месяц">
          <Icon name="ic_s_disclosure_back_filled" size={16} color="var(--text-primary)" />
        </button>
        <div className="month__label">Июль 2026</div>
        <button className="icon-btn icon-btn--s" aria-label="Следующий месяц">
          <Icon name="ic_s_disclosure_filled" size={16} color="var(--text-primary)" />
        </button>
      </div>
      <div className="month__grid month__grid--weekdays">
        {WEEKDAYS.map((w) => (
          <div key={w} className="month__weekday">{w}</div>
        ))}
      </div>
      <div className="month__grid">
        {days.map((d, i) => (
          <div key={i} className={`day ${d.muted ? 'day--muted' : ''}`}>
            {d.dot && <span className="day__dot" />}
            <span className="day__num">{d.n}</span>
            <span className="day__sub">4 000 ₽</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- Таббар ---------- */
const TABS = [
  { id: 'home', label: 'Главная', icon: 'ic_m_tabbar_home' },
  { id: 'payments', label: 'Платежи', icon: 'ic_m_tabbar_transactions' },
  { id: 'chat', label: 'Чат', icon: 'ic_m_tabbar_chat' },
  { id: 'services', label: 'Сервисы', icon: 'ic_m_tabbar_catalog_increased' },
]

function TabBar() {
  return (
    <nav className="tabbar">
      <div className="tabbar__pill">
        {TABS.map((t, i) => (
          <button key={t.id} className={`tab ${i === 0 ? 'tab--active' : ''}`}>
            <Icon name={t.icon} size={24} color={i === 0 ? 'var(--blue)' : 'var(--text-secondary)'} />
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  return (
    <div className="app">
      <HeaderGradient />
      <TopBar scrolled={scrolled} />
      <main className="screen" onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 12)}>
        <Balance />
        <Widgets />
        <div className="products">
          <CreditCard />
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
