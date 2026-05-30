import { useState } from "react";
import Icon from "@/components/ui/icon";

const PRESET_AMOUNTS = [100, 250, 500, 1000, 2500, 5000];

const RECENT_DONATES = [
  { id: 1, name: "Александр М.", amount: 2500, message: "Отличный стрим, продолжай в том же духе!", time: "2 мин назад", avatar: "АМ" },
  { id: 2, name: "Виктория Л.", amount: 500, message: "Спасибо за контент!", time: "8 мин назад", avatar: "ВЛ" },
  { id: 3, name: "Дмитрий К.", amount: 1000, message: "", time: "15 мин назад", avatar: "ДК" },
  { id: 4, name: "Анонимный", amount: 150, message: "Так держать 💪", time: "23 мин назад", avatar: "?" },
  { id: 5, name: "Елена Р.", amount: 5000, message: "Лучший стример на платформе!", time: "41 мин назад", avatar: "ЕР" },
];

const STATS = [
  { label: "Всего донатов", value: "₽ 284 500", icon: "TrendingUp", sub: "+12% за месяц" },
  { label: "Доноров", value: "1 247", icon: "Users", sub: "за всё время" },
  { label: "Этот месяц", value: "₽ 41 200", icon: "Calendar", sub: "18 доноров" },
  { label: "Топ донат", value: "₽ 15 000", icon: "Award", sub: "от BlackDragon" },
];

export default function Index() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "sbp" | "yoomoney">("card");

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : (selectedAmount ?? 0);

  return (
    <div className="min-h-screen bg-background noise-overlay">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
              <Icon name="Zap" size={14} className="text-primary-foreground" />
            </div>
            <span className="font-semibold text-sm tracking-wide text-foreground">DONATIX</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            В эфире
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row gap-10 mb-12 animate-fade-in">
          {/* Left: Profile */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-5 mb-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-md bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary mono">PX</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground tracking-tight mb-1">PixelStorm</h1>
                <p className="text-sm text-muted-foreground mb-3">Игровой стример · Киберспорт</p>
                <div className="flex flex-wrap gap-2">
                  {["CS2", "Valorant", "Dota 2"].map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-lg">
              Профессиональный гейм-стример с 6-летним опытом. Играю в топ-100 рейтинга СНГ.
              Каждый донат — это поддержка ежедневных трансляций и развития канала.
              Ваша помощь позволяет закупать новое оборудование и улучшать качество контента.
            </p>

            <div className="divider-gold mb-6" />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`stat-card animate-fade-in-delay-${i + 1}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                      {stat.label}
                    </span>
                    <Icon name={stat.icon as "TrendingUp" | "Users" | "Calendar" | "Award"} size={14} className="text-primary/60 mt-0.5" />
                  </div>
                  <div className="text-xl font-bold text-foreground mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Donate Form */}
          <div className="w-full lg:w-[400px] flex-shrink-0 animate-fade-in-delay-2">
            <div className="border border-border rounded-lg bg-card overflow-hidden">
              {/* Form header */}
              <div className="px-6 py-4 border-b border-border bg-muted/30">
                <h2 className="font-semibold text-foreground text-sm uppercase tracking-widest">Поддержать донатом</h2>
              </div>

              <div className="p-6 space-y-5">
                {/* Amount presets */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-3 font-medium uppercase tracking-widest">
                    Сумма (₽)
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {PRESET_AMOUNTS.map(amt => (
                      <button
                        key={amt}
                        onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                        className={`amount-chip text-center mono ${selectedAmount === amt && !customAmount ? "selected" : ""}`}
                      >
                        {amt.toLocaleString("ru")}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Своя сумма"
                    value={customAmount}
                    onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    className="w-full bg-input border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary mono"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-medium uppercase tracking-widest">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Аноним"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-input border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-medium uppercase tracking-widest">
                    Сообщение
                  </label>
                  <textarea
                    placeholder="Напишите что-нибудь стримеру..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={3}
                    className="w-full bg-input border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                {/* Payment methods */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-medium uppercase tracking-widest">
                    Способ оплаты
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "card", label: "Карта", icon: "CreditCard" },
                      { id: "sbp", label: "СБП", icon: "Smartphone" },
                      { id: "yoomoney", label: "ЮMoney", icon: "Wallet" },
                    ].map(method => (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id as "card" | "sbp" | "yoomoney")}
                        className={`amount-chip flex flex-col items-center gap-1 py-2.5 ${paymentMethod === method.id ? "selected" : ""}`}
                      >
                        <Icon name={method.icon as "CreditCard" | "Smartphone" | "Wallet"} size={16} />
                        <span className="text-xs">{method.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="donate-btn w-full rounded py-3 text-sm"
                  disabled={finalAmount < 10}
                >
                  {finalAmount >= 10
                    ? `Задонатить ₽ ${finalAmount.toLocaleString("ru")}`
                    : "Введите сумму от ₽ 10"}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Безопасный платёж · Без комиссии для донора
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Donate Feed */}
        <div className="animate-fade-in-delay-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Последние поступления
            </h2>
            <span className="text-xs text-muted-foreground mono">{RECENT_DONATES.length} за сегодня</span>
          </div>

          <div className="border border-border rounded-lg bg-card divide-y divide-border overflow-hidden">
            {RECENT_DONATES.map(d => (
              <div key={d.id} className="flex items-start gap-4 px-5 py-4 hover:bg-muted/20 transition-colors">
                <div className="w-9 h-9 rounded-md bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-muted-foreground mono">{d.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">{d.name}</span>
                    <span className="text-sm font-bold text-primary mono flex-shrink-0">
                      ₽ {d.amount.toLocaleString("ru")}
                    </span>
                  </div>
                  {d.message && (
                    <p className="text-xs text-muted-foreground leading-relaxed mb-1 truncate">
                      {d.message}
                    </p>
                  )}
                  <span className="text-xs text-muted-foreground/60 mono">{d.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span className="mono">DONATIX · 2026</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Условия</a>
            <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
          </div>
        </div>
      </div>
    </div>
  );
}