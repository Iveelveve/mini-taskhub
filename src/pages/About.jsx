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
  heroDesc: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "16px",
    lineHeight: 1.7,
    maxWidth: "480px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "2rem",
  },
  featureCard: (dark) => ({
    background: dark ? "#1E1E1E" : "#fff",
    border: dark ? "1.5px solid #2A2A2A" : "1.5px solid #ECEAE3",
    borderRadius: "14px",
    padding: "20px",
    display: "flex",
    gap: "14px",
    alignItems: "flex-start",
  }),
  featureIcon: {
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
  featureName: (dark) => ({
    fontWeight: 600,
    fontSize: "15px",
    marginBottom: "4px",
    color: dark ? "#F0EDE8" : "#1A1915",
  }),
  featureDesc: {
    fontSize: "13px",
    color: "#888",
    lineHeight: 1.5,
  },
  techBox: (dark) => ({
    background: dark ? "#1E1E1E" : "#fff",
    border: dark ? "1.5px solid #2A2A2A" : "1.5px solid #ECEAE3",
    borderRadius: "14px",
    padding: "20px",
  }),
  techLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "#E8621A",
    marginBottom: "14px",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  techPill: (dark) => ({
    padding: "6px 14px",
    border: dark ? "1.5px solid #333" : "1.5px solid #E0DDD5",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: 500,
    color: dark ? "#AAA" : "#555",
  }),
  footer: {
    fontSize: "12px",
    color: "#AAA",
    marginTop: "16px",
  },
  
};

const FEATURES = [
  { icon: "✓", name: "Tasks", desc: "Ажлаа хянах, дуусгасанаа тэмдэглэх, устгах" },
  { icon: "📝", name: "Notes", desc: "Хурдан тэмдэглэл хөтлөх, хадгалах" },
  { icon: "🌙", name: "Dark Mode", desc: "Нүдэнд тааламжтай харанхуй горим" },
  { icon: "☁️", name: "API Integration", desc: "JSONPlaceholder API-тай холбогдсон" },
];

const TECH = ["React 18", "React Router v6", "Tailwind CSS v3", "Context API", "JSONPlaceholder"];

export default function About({ dark }) {
  return (
    <>
      {/* Hero */}
      <div style={s.hero}>
        <div style={s.heroLabel}>MINI TASKHUB</div>
        <h1 style={s.heroTitle}>React-ийн үндсэн<br />ойлголтуудыг практикт</h1>
        <p style={s.heroDesc}>
          Routing, State Management, Form Validation, API Integration бүгдийг агуулсан жижиг бүтээмжийн апп.
        </p>
      </div>

      {/* Feature cards */}
      <div style={s.featureGrid}>
        {FEATURES.map((f) => (
          <div key={f.name} style={s.featureCard(dark)}>
            <div style={s.featureIcon}>{f.icon}</div>
            <div>
              <p style={s.featureName(dark)}>{f.name}</p>
              <p style={s.featureDesc}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div style={s.techBox(dark)}>
        <p style={s.techLabel}>TECH STACK</p>
        <div style={s.techStack}>
          {TECH.map((t) => (
            <span key={t} style={s.techPill(dark)}>{t}</span>
          ))}
        </div>
        <p style={s.footer}>Frontend Development Биедаалт — 2025</p>
      </div>
    </>
  );
}