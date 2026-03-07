export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
  const studioUrl = `https://${projectId}.sanity.studio`;
  return (
    <div style={{ padding: 60, fontFamily: "sans-serif", background: "#2A5C45", minHeight: "100vh", color: "white" }}>
      <h1 style={{ fontSize: 32, marginBottom: 16 }}>Planet Zero Studio</h1>
      <p style={{ marginBottom: 24, opacity: 0.7 }}>The CMS is hosted at Sanity.io.</p>
      <a href={studioUrl} style={{ background: "#E8513A", color: "white", padding: "14px 28px", borderRadius: 40, textDecoration: "none", fontWeight: 500 }}>
        Open Studio →
      </a>
    </div>
  );
}
