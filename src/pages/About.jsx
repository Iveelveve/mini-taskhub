const s = {
  hero: {
    background: "#1A1915",
    borderRadius: "20px",
    padding: "3rem 2.5rem",
    marginBottom: "2rem",
    color: "#fff",
  },
  heroLabel: {
    fontSize: "13px",
    color: "#E8621A",
    fontWeight: 600,
    marginBottom: "14px",
    letterSpacing: "0.06em",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: 800,
    letterSpacing: "-1px",
    marginBottom: "12px",
    lineHeight: 1.1,
    color: "#fff",
  },
  infoBox: (dark) => ({
    background: dark ? "#1E1E1E" : "#fff",
    border: dark ? "1.5px solid #2A2A2A" : "1.5px solid #ECEAE3",
    borderRadius: "14px",
    padding: "20px 24px",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  }),
  infoIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "#FEF0E8",
    color: "#E8621A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "#E8621A",
    marginBottom: "2px",
  },
  infoValue: (dark) => ({
    fontSize: "15px",
    fontWeight: 600,
    color: dark ? "#F0EDE8" : "#1A1915",
  }),
};

const INFO = [
  { icon: "👤", label: "ОЮУТНЫ НЭР", value: "Iveel" },
  { icon: "🪪", label: "ОЮУТНЫ КОД", value: "B24FM1035" },
  { icon: "🏫", label: "ИХ СУРГУУЛЬ", value: "UFE" },
  { icon: "🎨", label: "МЭРГЭЖИЛ", value: "Tech UI/UX Designer" },
  { icon: "📚", label: "КУРС", value: "2-р курс" },
];

export default function About({ dark }) {
  return (
    <div style={{ padding: "2rem" }}>
      <div style={s.hero}>
        <div style={s.heroLabel}>БИЕ ДААЛТ</div>
        <h1 style={{ fontSize: "42px", fontWeight: 800, letterSpacing: "-1px", marginBottom: "12px", lineHeight: 1.1, color: "#fff" }}>
          Mini TaskHub
        </h1>
      </div>

      {INFO.map((item) => (
        <div key={item.label} style={s.infoBox(dark)}>
          <div style={s.infoIcon}>{item.icon}</div>
          <div>
            <p style={s.infoLabel}>{item.label}</p>
            <p style={s.infoValue(dark)}>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
