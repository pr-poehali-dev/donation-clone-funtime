import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "ranks" | "currency" | "items" | "titles";

const RANKS = [
  {
    id: "vip",
    cls: "rank-vip",
    name: "VIP",
    price: 199,
    color: "hsl(142 70% 45%)",
    emoji: "⚡",
    perks: ["Приставка [VIP] в чате", "Доступ к /fly на 1 час/день", "3 точки дома", "Доступ к /nick", "Цветной ник"],
  },
  {
    id: "premium",
    cls: "rank-premium",
    name: "PREMIUM",
    price: 449,
    color: "hsl(210 80% 58%)",
    emoji: "💎",
    perks: ["Приставка [PREMIUM]", "/fly без ограничений", "10 точек дома", "/heal & /feed", "Кит каждые 12 часов", "Доступ к /tpa"],
    popular: true,
  },
  {
    id: "elite",
    cls: "rank-elite",
    name: "ELITE",
    price: 899,
    color: "hsl(43 95% 55%)",
    emoji: "👑",
    perks: ["Приставка [ELITE]", "Все права PREMIUM", "Приоритетный вход", "Доступ к /god", "Эксклюзивный кит", "Партиклы и эффекты"],
  },
  {
    id: "legend",
    cls: "rank-legend",
    name: "LEGEND",
    price: 1799,
    color: "hsl(265 70% 62%)",
    emoji: "🔮",
    perks: ["Приставка [LEGEND]", "Все права ELITE", "Доступ к командам OP", "Личная арена PvP", "Уникальный плащ", "Поддержка 24/7"],
  },
];

const CURRENCY = [
  { id: "c1", coins: 1000,  bonus: 0,   price: 99,  emoji: "🪙" },
  { id: "c2", coins: 3000,  bonus: 10,  price: 249, emoji: "🪙" },
  { id: "c3", coins: 7500,  bonus: 25,  price: 499, emoji: "💰" },
  { id: "c4", coins: 20000, bonus: 50,  price: 999, emoji: "💰", best: true },
];

const ITEMS = [
  { id: "i1", name: "Стартовый кит",    price: 149, emoji: "🎒", desc: "Алмазный набор + еда на старт" },
  { id: "i2", name: "Кейс «Фортуна»",   price: 299, emoji: "🎁", desc: "Случайный предмет высокого уровня" },
  { id: "i3", name: "Набор строителя",   price: 399, emoji: "🏗️", desc: "Редкие блоки + инструменты" },
  { id: "i4", name: "Кейс «Легенда»",   price: 599, emoji: "⚔️", desc: "Топовое оружие с зачарованиями" },
  { id: "i5", name: "Эндер-набор",       price: 799, emoji: "🌌", desc: "Снаряжение для End-рейдов" },
  { id: "i6", name: "Кит Повелителя",   price: 1499, emoji: "🔱", desc: "Лучший кит на сервере" },
];

const TITLES = [
  { id: "t1", name: "«Герой Сервера»",   price: 249, color: "hsl(43 95% 55%)",  emoji: "🏆" },
  { id: "t2", name: "«Тёмный Лорд»",     price: 349, color: "hsl(265 70% 62%)", emoji: "🌑" },
  { id: "t3", name: "«Дракон»",          price: 399, color: "hsl(0 72% 55%)",   emoji: "🐉" },
  { id: "t4", name: "«Хранитель»",       price: 299, color: "hsl(210 80% 58%)", emoji: "🛡️" },
  { id: "t5", name: "«Бог Войны»",       price: 499, color: "hsl(0 65% 50%)",   emoji: "⚔️" },
  { id: "t6", name: "«Строитель Эпох»",  price: 199, color: "hsl(142 70% 45%)", emoji: "🏛️" },
];

const STATS = [
  { label: "Версия", value: "1.16.5-1.21.1", icon: "Layers" as const },
];

export default function Index() {
  const [tab, setTab] = useState<Tab>("ranks");
  const [cart, setCart] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("c4");

  const toggleCart = (id: string) =>
    setCart(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  const cartCount = cart.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-lg">⛏️</div>
            <div>
              <span className="font-black text-base text-foreground tracking-tight">ShockByte</span>
              <span className="text-muted-foreground text-xs ml-2">Donate</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <span className="server-online">847 онлайн</span>
            <span className="text-muted-foreground text-xs font-mono">play.shockbyte.pro</span>
          </div>

          <button
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold transition-all hover:brightness-110"
          >
            <Icon name="ShoppingCart" size={15} />
            Корзина
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-up">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-2 text-foreground">
                Магазин <span className="gold-shimmer">ShockByte</span>
              </h1>
              <p className="text-muted-foreground text-sm max-w-md">
                Поддержи сервер и получи уникальные привилегии. Все покупки активируются мгновенно.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-shrink-0">
              {STATS.map(s => (
                <div key={s.label} className="bg-card border border-border rounded-lg px-4 py-3 text-center min-w-[90px]">
                  <div className="text-lg font-black text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border bg-card/30 sticky top-16 z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 py-2">
            {([
              { id: "ranks",    label: "Ранги",    emoji: "👑" },
              { id: "currency", label: "Валюта",   emoji: "🪙" },
              { id: "items",    label: "Предметы", emoji: "⚔️" },
              { id: "titles",   label: "Титулы",   emoji: "🏷️" },
            ] as { id: Tab; label: string; emoji: string }[]).map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`tab-btn flex items-center gap-1.5 ${tab === t.id ? "active" : ""}`}
              >
                <span>{t.emoji}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* RANKS */}
        {tab === "ranks" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RANKS.map((rank, i) => (
              <div key={rank.id} className={`rank-card ${rank.cls} animate-fade-up-${i + 1} p-6`}>
                {rank.popular && (
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-primary text-primary-foreground uppercase tracking-widest">
                      Топ
                    </span>
                  </div>
                )}
                <div className="text-3xl mb-3">{rank.emoji}</div>
                <div className="rank-badge mb-4">{rank.name}</div>
                <div className="text-2xl font-black text-foreground mb-1">₽ {rank.price}</div>
                <div className="text-xs text-muted-foreground mb-5">навсегда</div>

                <ul className="space-y-2 mb-6">
                  {rank.perks.map(perk => (
                    <li key={perk} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Icon name="Check" size={12} className="mt-0.5 flex-shrink-0" style={{ color: rank.color }} />
                      {perk}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => toggleCart(rank.id)}
                  className={`buy-btn ${cart.includes(rank.id) ? "opacity-70" : ""}`}
                >
                  {cart.includes(rank.id) ? "✓ Добавлено" : "Купить"}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* CURRENCY */}
        {tab === "currency" && (
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-black text-foreground mb-1">Игровая валюта</h2>
              <p className="text-sm text-muted-foreground">Монеты зачисляются на аккаунт моментально</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {CURRENCY.map((c, i) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedCurrency(c.id)}
                  className={`currency-card animate-fade-up-${i + 1} ${selectedCurrency === c.id ? "selected" : ""}`}
                >
                  {c.best && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-black px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 uppercase">
                        Выгодно
                      </span>
                    </div>
                  )}
                  <div className="text-4xl mb-3">{c.emoji}</div>
                  <div className="text-2xl font-black text-foreground">
                    {c.coins.toLocaleString("ru")}
                    <span className="text-sm font-normal text-muted-foreground ml-1">монет</span>
                  </div>
                  {c.bonus > 0 && (
                    <div className="text-xs text-green-400 font-bold mt-1">+{c.bonus}% бонус</div>
                  )}
                  <div className="mt-4 text-xl font-black" style={{ color: "hsl(43 95% 55%)" }}>
                    ₽ {c.price}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="px-10 py-3 rounded-lg bg-yellow-500 text-yellow-950 font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all hover:-translate-y-0.5">
                Купить за ₽ {CURRENCY.find(c => c.id === selectedCurrency)?.price}
              </button>
            </div>
          </div>
        )}

        {/* ITEMS */}
        {tab === "items" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ITEMS.map((item, i) => (
              <div key={item.id} className={`bg-card border border-border rounded-lg p-5 flex items-center gap-4 cursor-pointer transition-all duration-200 hover:border-primary/40 hover:-translate-y-1 animate-fade-up-${i + 1}`}>
                <div className="text-4xl flex-shrink-0 w-14 h-14 rounded-lg bg-muted flex items-center justify-center">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-foreground text-sm">{item.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 truncate">{item.desc}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-base font-black text-primary">₽ {item.price}</span>
                    <button
                      onClick={() => toggleCart(item.id)}
                      className={`text-xs px-3 py-1 rounded font-bold transition-all ${
                        cart.includes(item.id)
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-primary text-primary-foreground hover:brightness-110"
                      }`}
                    >
                      {cart.includes(item.id) ? "✓ В корзине" : "Купить"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TITLES */}
        {tab === "titles" && (
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-black text-foreground mb-1">Уникальные титулы</h2>
              <p className="text-sm text-muted-foreground">Отображаются перед ником в чате и над головой</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {TITLES.map((t, i) => (
                <div key={t.id} className={`bg-card border border-border rounded-lg p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 animate-fade-up-${i + 1}`}
                  style={{ borderColor: cart.includes(t.id) ? t.color : undefined }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{t.emoji}</span>
                    <span className="font-black text-sm" style={{ color: t.color }}>{t.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-foreground">₽ {t.price}</span>
                    <button
                      onClick={() => toggleCart(t.id)}
                      className="text-xs px-3 py-1.5 rounded font-bold transition-all hover:brightness-110"
                      style={{
                        background: cart.includes(t.id) ? `${t.color}22` : t.color,
                        color: cart.includes(t.id) ? t.color : "hsl(222 25% 7%)",
                        border: cart.includes(t.id) ? `1px solid ${t.color}55` : "none",
                      }}
                    >
                      {cart.includes(t.id) ? "✓ В корзине" : "Купить"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-base">⛏️</span>
            <span className="font-black text-foreground">ShockByte</span>
            <span>· play.shockbyte.pro</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Правила</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
            <a href="#" className="hover:text-foreground transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}