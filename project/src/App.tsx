import { useEffect, useMemo, useState } from "react";

/** ========= PERSONAL SETTINGS ========= */
const NAME = "Ethan Hopper";
const TAGLINE = "Cybersecurity student focused on practical skills and reliability.";
const BLURB =
  "I’m building practical defensive skills: least privilege, clean logging, strong patching, and tested recovery. I learn by doing—audits, detections, and hands-on labs—with clear documentation and reproducible results.";

const EMAIL = "Hoppersec@proton.me";
const GITHUB_URL = "https://github.com/Hpp553";
// No LinkedIn yet; resume hidden for now

/** ========= TYPES ========= */
type Project = {
  title: string;
  subtitle?: string;
  date?: string;
  role?: string;
  highlights?: string[];
  tags?: string[];
  repo?: string;
  demo?: string;
};

type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  link?: string;
};

/** ========= DATA ========= */
const projects: Project[] = [
  {
    title: "Botium Toys — Internal IT Audit",
    subtitle: "NIST CSF • CIS v8 • PCI/GDPR mapping",
    date: "2025",
    role: "Security Analyst (Student Project)",
    highlights: [
      "Completed controls & compliance checklist and risk register",
      "Prioritized MFA, patch SLAs, egress filtering, immutable backups",
      "Delivered 30-day remediation plan with owners and due dates",
    ],
    tags: ["Audit", "Risk", "Controls", "Compliance"],
  },
  {
    title: "Password Policy & Hardening Baseline",
    subtitle: "Account security and configuration standards",
    highlights: [
      "Defined strong password requirements aligned to best practices",
      "Documented checks and verification steps",
      "Prepared rollout notes for MFA enablement where possible",
    ],
    tags: ["Identity", "Hardening", "MFA"],
  },
  {
    title: "Endpoint Hardening (Windows)",
    subtitle: "BitLocker, baseline settings, update cadence",
    highlights: [
      "Enabled disk encryption on supported devices",
      "Applied baseline settings similar to CIS recommendations",
      "Established a simple update cadence and compliance check",
    ],
    tags: ["Windows", "Hardening", "Baseline"],
  },
  {
    title: "Network Egress Rules",
    subtitle: "Deny-by-default with allowlist",
    highlights: [
      "Designed simple allowlist for server outbound traffic",
      "Reduced unnecessary external exposure",
      "Documented change and review procedure",
    ],
    tags: ["Network", "Egress", "Firewall"],
  },
  {
    title: "Backups & Restore Test",
    subtitle: "Nightly backups and file-level restore verification",
    highlights: [
      "Verified a small file restore to prove recoverability",
      "Captured RTO/RPO notes and next steps for full restore tests",
      "Outlined offsite/immutable backup improvements",
    ],
    tags: ["Backups", "Recovery", "Resilience"],
  },
];

const skills = [
  "Least Privilege",
  "MFA",
  "Password Standards",
  "SIEM Basics",
  "Log Pipelines",
  "Detections",
  "CIS Baselines",
  "Patch SLAs",
  "Backups & Restore Tests",
  "Network Egress Rules",
  "Wireshark",
  "nmap",
  "Burp",
  "Python",
  "Linux",
];

const certificates: Certificate[] = [
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    date: "2025 (this month)",
    link: "https://coursera.org/share/77853d5cf395c5767fda9c55247fa3d0",
  },
];

/** ========= THEME (Light/Dark Toggle) ========= */
type Theme = "dark" | "light";

function useTheme(): [Theme, (t: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    return stored ?? "dark";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

export default function App() {
  const [theme, setTheme] = useTheme();

  const styles = useMemo(() => {
    const isDark = theme === "dark";
    const text = isDark ? "#ffffff" : "#0b1020";
    const subtext = isDark ? "rgba(255,255,255,.8)" : "rgba(11,16,32,.8)";
    const faint = isDark ? "rgba(255,255,255,.6)" : "rgba(11,16,32,.6)";
    const border = isDark ? "rgba(255,255,255,.12)" : "rgba(11,16,32,.12)";
    const chipBg = isDark ? "rgba(255,255,255,.06)" : "rgba(11,16,32,.06)";
    const cardBg = isDark
      ? "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))"
      : "linear-gradient(180deg, rgba(11,16,32,.03), rgba(11,16,32,.02))";
    const background = isDark
      ? "#080A0E"
      : "#f6f7fb";

    const gradientText = {
      background: "linear-gradient(90deg,#34d7ff,#a855f7,#7c3aed)",
      WebkitBackgroundClip: "text" as const,
      color: "transparent",
    };

    return {
      isDark,
      colors: { text, subtext, faint, border, chipBg, background },
      gradientText,
      base: {
        minHeight: "100vh",
        background,
        color: text,
        fontFamily: "system-ui, Segoe UI, Roboto, sans-serif",
        padding: "48px 24px",
      } as React.CSSProperties,
      container: { maxWidth: 1100, margin: "0 auto" } as React.CSSProperties,
      card: {
        borderRadius: 16,
        border: `1px solid ${border}`,
        background: cardBg,
        padding: 20,
      } as React.CSSProperties,
      chip: {
        display: "inline-block",
        padding: "8px 12px",
        borderRadius: 999,
        background: chipBg,
        border: `1px solid ${border}`,
        marginRight: 8,
        marginBottom: 8,
        fontSize: 12,
        color: text,
        opacity: 0.9,
      } as React.CSSProperties,
      pillBtn: {
        display: "inline-block",
        padding: "10px 14px",
        borderRadius: 12,
        background: isDark ? "rgba(255,255,255,.08)" : "rgba(11,16,32,.08)",
        border: `1px solid ${border}`,
        marginRight: 10,
        textDecoration: "none",
        color: text,
        fontSize: 14,
      } as React.CSSProperties,
      sectionTitle: { fontSize: 22, margin: "28px 0 12px" } as React.CSSProperties,
      small: { fontSize: 14, opacity: 0.85, color: subtext } as React.CSSProperties,
      body: { opacity: 0.85, color: subtext } as React.CSSProperties,
      faint: { opacity: 0.7, color: faint } as React.CSSProperties,
      link: { color: isDark ? "#9be2ff" : "#4f3cd8", textDecoration: "none" } as React.CSSProperties,
    };
  }, [theme]);

  return (
    <div style={styles.base}>
      <div style={styles.container}>
        {/* NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div style={{ fontWeight: 600, opacity: 0.9 }}>{NAME}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#projects" style={styles.link}>Projects</a>
            <a href="#skills" style={styles.link}>Skills</a>
            <a href="#contact" style={styles.link}>Contact</a>
            <button
              onClick={() => setTheme(styles.isDark ? "light" : "dark")}
              style={{
                ...styles.pillBtn,
                marginRight: 0,
                cursor: "pointer",
                background: styles.isDark ? "rgba(255,255,255,.12)" : "rgba(11,16,32,.08)",
              }}
              aria-label="Toggle theme"
              title="Toggle light/dark"
            >
              {styles.isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>

        {/* HERO */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ ...styles.small, marginBottom: 6 }}>Portfolio</div>
          <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: "0 0 6px" }}>
            <span style={styles.gradientText}>{NAME}</span>
          </h1>
          <p style={{ margin: "0 0 12px", opacity: 0.9, color: styles.colors.subtext }}>{TAGLINE}</p>
          <p style={{ margin: "0 0 18px", maxWidth: 720, ...styles.body }}>{BLURB}</p>
          <div>
            <a href={GITHUB_URL} style={styles.pillBtn}>GitHub</a>
            {/* LinkedIn not set yet */}
            {/* Resume hidden for now */}
          </div>
        </div>

        {/* ABOUT */}
        <h2 style={styles.sectionTitle}>About</h2>
        <div style={styles.card}>
          <p style={{ margin: 0, ...styles.body }}>
            I’m <strong style={{ color: styles.colors.text }}>{NAME}</strong>, focused on practical defense:
            least privilege, clean logging, strong patching, and tested recovery. I learn by doing—running
            internal audits, mapping controls to frameworks, writing detections, and building small utilities
            that automate the boring but critical stuff.
          </p>
          <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap" }}>
            {[
              "NIST CSF & CIS Controls",
              "SIEM Detections & Log Pipelines",
              "Identity & Access (MFA, RBAC)",
              "Secure Configs & Patch SLAs",
              "Backups & Recovery Tests",
              "OWASP & Web App Hardening",
            ].map((t) => (
              <span key={t} style={styles.chip}>{t}</span>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <h2 id="projects" style={styles.sectionTitle}>Projects</h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {projects.map((p) => (
            <div key={p.title} style={styles.card}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{p.title}</div>
                  {p.subtitle && (
                    <div
                      style={{
                        fontSize: 13,
                        color: styles.isDark ? "#34d7ff" : "#004b6b",
                        opacity: 0.9,
                      }}
                    >
                      {p.subtitle}
                    </div>
                  )}
                </div>
                <div style={{ textAlign: "right", fontSize: 12, ...styles.faint }}>
                  {p.date && <div>📅 {p.date}</div>}
                  {p.role && <div>🎛️ {p.role}</div>}
                </div>
              </div>

              {p.highlights && (
                <ul style={{ margin: "12px 0 10px", paddingLeft: 18, opacity: 0.9, color: styles.colors.subtext }}>
                  {p.highlights.map((h) => (
                    <li key={h} style={{ marginBottom: 6 }}>{h}</li>
                  ))}
                </ul>
              )}

              {p.tags && (
                <div style={{ marginBottom: 10 }}>
                  {p.tags.map((t) => (
                    <span key={t} style={styles.chip}>{t}</span>
                  ))}
                </div>
              )}

              <div style={{ fontSize: 13 }}>
                {p.demo && p.demo !== "#" && (
                  <a href={p.demo} style={{ ...styles.link, marginRight: 12 }}>Demo ↗</a>
                )}
                {p.repo && p.repo !== "#" && <a href={p.repo} style={styles.link}>Repo ↗</a>}
              </div>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <h2 id="skills" style={styles.sectionTitle}>Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {skills.map((s) => (
            <span key={s} style={styles.chip}>{s}</span>
          ))}
        </div>

        {/* CERTIFICATES */}
        <h2 style={styles.sectionTitle}>Certificates</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {certificates.map((c) => (
            <div key={c.title} style={styles.card}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{c.title}</div>
                  <div style={{ fontSize: 13, ...styles.faint }}>{c.issuer}</div>
                </div>
                {c.date && <div style={{ fontSize: 12, ...styles.faint }}>📅 {c.date}</div>}
              </div>
              {c.link && (
                <div style={{ marginTop: 10 }}>
                  <a href={c.link} style={styles.link}>Verify on Coursera ↗</a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <h2 id="contact" style={styles.sectionTitle}>Contact</h2>
        <div style={styles.card}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Let’s build safer systems.</div>
              <div style={{ ...styles.faint }}>
                Open to internships, junior roles, and collaborations. Email me or find me on GitHub.
              </div>
            </div>
            <div>
              <a href={`mailto:${EMAIL}`} style={styles.pillBtn}>Email</a>
              <a href={GITHUB_URL} style={styles.pillBtn}>GitHub</a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ ...styles.faint, fontSize: 13, textAlign: "center", marginTop: 28 }}>
          © {new Date().getFullYear()} {NAME}
        </div>
      </div>
    </div>
  );
}
