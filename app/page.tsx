import Image from "next/image";

/* ─── SVG Icons ─────────────────────────────────────────────────────────── */

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.18 8.18 0 0 0 4.78 1.52V6.81a4.85 4.85 0 0 1-1.01-.12z" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 7s-.3-1.9-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.4 3 12 3 12 3s-4.4 0-6.8.1c-.6 0-1.9.1-3 1.3C1.3 5.2 1 7 1 7S.7 9.1.7 11.3v2c0 2.2.3 4.3.3 4.3s.3 1.9 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.5 21.6 12 21.7 12 21.7s4.4 0 6.8-.2c.6-.1 1.9-.2 3-1.3.9-.8 1.2-2.7 1.2-2.7s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:border-white hover:text-white transition-all duration-200"
      style={{ background: "rgba(255,255,255,0.08)" }}
    >
      {children}
    </a>
  );
}

/* ─── Atlas Logo ─────────────────────────────────────────────────────────── */

function AtlasLogo() {
  return (
    <Image
      src="/atlas-logo.png"
      alt="Atlas Advisory Real Estate"
      width={200}
      height={80}
      priority
      style={{ objectFit: "contain" }}
    />
  );
}

/* ─── Cloud layers ───────────────────────────────────────────────────────── */

function CloudLayers() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: "100%", height: "28%",
        background: "linear-gradient(to top, rgba(175,183,255,0.60) 0%, rgba(160,170,255,0.28) 60%, transparent 100%)",
        filter: "blur(12px)",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", left: "-10%", width: "70%", height: "22%",
        background: "radial-gradient(ellipse 90% 70% at 50% 80%, rgba(195,202,255,0.58) 0%, rgba(170,178,255,0.25) 55%, transparent 100%)",
        filter: "blur(22px)", borderRadius: "50%",
        animation: "driftR 4s ease-in-out infinite alternate", willChange: "transform",
      }} />
      <div style={{
        position: "absolute", bottom: "12%", right: "-5%", width: "65%", height: "26%",
        background: "radial-gradient(ellipse 85% 65% at 50% 75%, rgba(200,208,255,0.62) 0%, rgba(172,180,255,0.28) 50%, transparent 100%)",
        filter: "blur(18px)", borderRadius: "50%",
        animation: "driftL 3.5s ease-in-out infinite alternate", willChange: "transform",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "5%", width: "80%", height: "30%",
        background: "radial-gradient(ellipse 80% 60% at 50% 85%, rgba(210,216,255,0.65) 0%, rgba(180,188,255,0.30) 50%, transparent 100%)",
        filter: "blur(14px)", borderRadius: "50%",
        animation: "driftR2 5s ease-in-out infinite alternate", willChange: "transform",
      }} />
      <div style={{
        position: "absolute", bottom: "30%", left: "5%", width: "50%", height: "14%",
        background: "radial-gradient(ellipse 100% 70% at 50% 60%, rgba(185,192,255,0.38) 0%, transparent 70%)",
        filter: "blur(28px)", borderRadius: "50%",
        animation: "driftL2 3s ease-in-out infinite alternate", willChange: "transform",
      }} />
      <div style={{
        position: "absolute", bottom: "24%", right: "5%", width: "45%", height: "16%",
        background: "radial-gradient(ellipse 100% 70% at 50% 60%, rgba(188,196,255,0.40) 0%, transparent 70%)",
        filter: "blur(24px)", borderRadius: "50%",
        animation: "driftR 4.5s ease-in-out infinite alternate", animationDelay: "-2s", willChange: "transform",
      }} />
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function ComingSoon() {
  return (
    <main className="relative h-dvh w-full overflow-hidden flex flex-col items-center"
      style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* Clouds */}
      <CloudLayers />

      {/* Logo */}
      <div className="relative z-10 pt-8 md:pt-10 anim-logo">
        <AtlasLogo />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 flex-1 justify-center pb-4 -mt-6 md:-mt-10">

        {/* Coming Soon */}
        <div className="anim-script mb-1">
          <span style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: "clamp(24px, 4.5vw, 52px)", color: "#ffffff",
            lineHeight: 1.2, display: "block", letterSpacing: "0.02em",
          }}>
            Coming Soon
          </span>
        </div>

        {/* Headline */}
        <h1 className="anim-h1" style={{ margin: "0 0 16px" }}>
          <span style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: "clamp(24px, 4.5vw, 52px)", color: "#ffffff",
            lineHeight: 1.2, display: "block",
          }}>
            Foundations First.
          </span>
          <span style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: "clamp(24px, 4.5vw, 52px)", color: "#ffffff",
            lineHeight: 1.2, display: "block",
          }}>
            Everything Else Follows.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="anim-sub" style={{
          fontFamily: "Poppins, sans-serif", fontWeight: 400,
          fontSize: "clamp(12px, 1.5vw, 16px)", color: "rgba(255,255,255,0.75)",
          lineHeight: 1.7, maxWidth: "520px", margin: "0 auto",
        }}>
          Great things are laid before they rise.<br />
          We&apos;ll be here soon, built with the same precision<br />
          we bring to every decision we carry.
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full flex flex-col items-center pb-6 md:pb-8 gap-3 anim-footer">
        <div className="flex items-center justify-center flex-wrap gap-2 px-2 py-1 max-w-full">
          <SocialLink href="https://www.instagram.com/atlasadvisory.ae?igsh=cTQ4ZWhnOWh0cHlw&utm_source=qr">
            <IconInstagram />
          </SocialLink>
          <SocialLink href="https://www.tiktok.com/@atlasadvisory.ae?_r=1&_t=ZS-95jAPkit120">
            <IconTikTok />
          </SocialLink>
          <SocialLink href="https://youtube.com/@atlasadvisory?si=tmMYQBZiy6AXemz6">
            <IconYouTube />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/company/atlasadvisory-ae/">
            <IconLinkedIn />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/atlasadvisory.ae">
            <IconFacebook />
          </SocialLink>
          <div className="w-px h-5 bg-white/20 mx-1" />
          <a href="https://atlasadvisory.ae" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400,
              fontSize: "clamp(12px, 1.3vw, 14px)", color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
            atlasadvisory.ae
          </a>
        </div>
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400,
          fontSize: "clamp(10px, 1.1vw, 12px)", color: "rgba(255,255,255,0.5)", margin: 0 }}>
          +971 58 585 1412 &nbsp;|&nbsp; operations@atlasadvisory.ae
        </p>
      </div>

    </main>
  );
}
