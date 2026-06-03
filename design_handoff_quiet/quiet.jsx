// V2 · QUIET — Swiss minimal, image-forward. White, generous whitespace,
// one calm accent (indigo), a clean grotesk. Cards carry figures & headshots.
// Inspired by HuMNet's grid clarity, stripped of all newspaper noise.

const QUIET = (() => {
  const S = window.SITE, S2 = window.SITE2;
  const c = {
    bg: "#ffffff", panel: "#f7f7f4", ink: "#16181d", sub: "#6c6f78",
    line: "#e7e6e0", accent: "#3b3fae", accentSoft: "#ececf8",
  };
  const sans = "'Hanken Grotesk', system-ui, sans-serif";
  const serif = "'Spectral', Georgia, serif";

  const Photo = ({ h, label, ratio, round = 0, tint = "#dfe0ea" }) => (
    <div style={{
      height: h, aspectRatio: ratio, borderRadius: round,
      background: `linear-gradient(160deg, ${tint} 0%, #cdcedd 100%)`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.5,
        background: `radial-gradient(circle at 70% 25%, rgba(255,255,255,.6), transparent 55%)`,
      }} />
      {label && <div style={{
        position: "absolute", left: 12, bottom: 10, fontFamily: sans, fontSize: 11,
        color: c.sub, letterSpacing: 0.3,
      }}>{label}</div>}
    </div>
  );

  return function QuietArtboard() {
    return (
      <div style={{ background: c.bg, color: c.ink, fontFamily: sans, minHeight: "100%" }}>
        {/* slim top bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "20px 56px", borderBottom: `1px solid ${c.line}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 26, height: 26, borderRadius: 6, background: c.accent }} />
            <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: -0.2 }}>Choi Lab</span>
            <span style={{ color: c.sub, fontSize: 14 }}>· University of Minnesota</span>
          </div>
          <nav style={{ display: "flex", gap: 26, fontSize: 14.5, color: c.sub }}>
            {["Research", "Publications", "Team", "Data & Code", "News", "Contact"].map((n, i) => (
              <a key={n} style={{ color: i === 0 ? c.ink : c.sub, fontWeight: i === 0 ? 600 : 400 }}>{n}</a>
            ))}
          </nav>
        </div>

        {/* hero — calm, big type, no rules */}
        <section style={{ padding: "84px 56px 64px", maxWidth: 1100 }}>
          <div style={{ fontSize: 15, color: c.accent, fontWeight: 600, letterSpacing: 0.2, marginBottom: 22 }}>
            Seongjin Choi · Assistant Professor
          </div>
          <h1 style={{
            fontFamily: serif, fontWeight: 500, fontSize: 72, lineHeight: 1.05,
            letterSpacing: -1.5, margin: 0, maxWidth: 980,
          }}>
            Turning messy city data into operational insight for sustainable mobility.
          </h1>
          <p style={{ fontSize: 21, lineHeight: 1.55, color: c.sub, marginTop: 28, maxWidth: 720, textWrap: "pretty" }}>
            We work on urban mobility data analytics, spatiotemporal modeling, and deep generative AI in the
            Department of Civil, Environmental, and Geo-Engineering at the University of Minnesota, Twin Cities.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
            <a style={{ background: c.accent, color: "#fff", padding: "13px 22px", borderRadius: 8, fontWeight: 600, fontSize: 15 }}>
              Read the research →
            </a>
            <a style={{ border: `1px solid ${c.line}`, color: c.ink, padding: "13px 22px", borderRadius: 8, fontWeight: 600, fontSize: 15 }}>
              Recruiting · Fall 2026
            </a>
          </div>
        </section>

        {/* research areas — calm 4-up, generous */}
        <section style={{ padding: "8px 56px 64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
            <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 32, margin: 0, letterSpacing: -0.5 }}>Research areas</h2>
            <a style={{ fontSize: 14.5, color: c.accent, fontWeight: 600 }}>All projects →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {S2.areas.map((a, i) => (
              <div key={a.name}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: c.accentSoft,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: c.accent, fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: 18.5, fontWeight: 600, margin: "0 0 8px", letterSpacing: -0.2 }}>{a.name}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: c.sub, margin: 0, textWrap: "pretty" }}>{a.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* highlighted projects — image cards */}
        <section style={{ padding: "48px 56px 64px", background: c.panel, borderTop: `1px solid ${c.line}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
            <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 32, margin: 0, letterSpacing: -0.5 }}>Highlighted projects</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {S2.projects.slice(0, 6).map((p, i) => (
              <a key={p.name} style={{
                background: c.bg, borderRadius: 14, overflow: "hidden",
                border: `1px solid ${c.line}`, display: "block",
              }}>
                <Photo h={150} label="" tint={["#dfe0ea", "#e3e9e0", "#ece1df", "#e0e8ec", "#e8e4dc", "#e2e1ec"][i]} />
                <div style={{ padding: "16px 18px 20px" }}>
                  <div style={{ fontSize: 12, color: c.accent, fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase" }}>{p.tag}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 600, margin: "6px 0 6px", letterSpacing: -0.3 }}>{p.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: c.sub, margin: 0, textWrap: "pretty" }}>{p.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* highlighted publication — figure + abstract, calm */}
        <section style={{ padding: "64px 56px" }}>
          <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 32, margin: "0 0 28px", letterSpacing: -0.5 }}>Recent publication</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 44, alignItems: "center" }}>
            <Photo h={320} round={14} label="figure · drop paper teaser" tint="#dfe0ea" />
            <div>
              <div style={{ fontSize: 13.5, color: c.accent, fontWeight: 600 }}>{S2.highlights[0].venue}</div>
              <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: 30, lineHeight: 1.2, margin: "10px 0 14px", letterSpacing: -0.5 }}>
                {S2.highlights[0].title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: c.sub, margin: 0, textWrap: "pretty" }}>{S2.highlights[0].blurb}</p>
              <div style={{ display: "flex", gap: 18, marginTop: 22, fontSize: 14.5, fontWeight: 600 }}>
                <a style={{ color: c.accent }}>PDF</a>
                <a style={{ color: c.accent }}>BibTeX</a>
                <a style={{ color: c.accent }}>Code ↗</a>
              </div>
            </div>
          </div>
        </section>

        {/* people — headshot grid */}
        <section style={{ padding: "48px 56px 72px", background: c.panel, borderTop: `1px solid ${c.line}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
            <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 32, margin: 0, letterSpacing: -0.5 }}>The team</h2>
            <a style={{ fontSize: 14.5, color: c.accent, fontWeight: 600 }}>Full team & alumni →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20 }}>
            {S2.people.map((p) => (
              <div key={p.name}>
                <Photo ratio="1/1" round={12} label="" tint="#dfe0ea" />
                <h3 style={{ fontSize: 15, fontWeight: 600, margin: "12px 0 2px", letterSpacing: -0.2 }}>{p.name}</h3>
                <div style={{ fontSize: 12.5, color: c.accent, fontWeight: 600 }}>{p.role}</div>
                <div style={{ fontSize: 12.5, color: c.sub, marginTop: 2, lineHeight: 1.4 }}>{p.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* footer */}
        <footer style={{ padding: "40px 56px", borderTop: `1px solid ${c.line}`,
          display: "flex", justifyContent: "space-between", color: c.sub, fontSize: 14 }}>
          <span>© 2026 Choi Lab · CEGE · University of Minnesota</span>
          <span style={{ display: "flex", gap: 18 }}>
            <a style={{ color: c.sub }}>Scholar</a><a style={{ color: c.sub }}>GitHub</a><a style={{ color: c.sub }}>CV</a>
          </span>
        </footer>
      </div>
    );
  };
})();
window.QUIET = QUIET;
