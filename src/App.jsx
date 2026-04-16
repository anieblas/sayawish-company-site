import { Box, Typography, Link } from "@mui/material";
import { keyframes } from "@mui/system";
import { useEffect } from "react";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 0.7; transform: scale(1.15); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
`;

export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0f",
        overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      {[
        { size: 420, top: "-10%", left: "-8%", color: "#1a0a3a", delay: "0s" },
        { size: 300, bottom: "-5%", right: "-6%", color: "#0a1a2e", delay: "1.5s" },
        { size: 180, top: "60%", left: "55%", color: "#0d1f1a", delay: "3s" },
      ].map((orb, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            backgroundColor: orb.color,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            animation: `${pulse} 6s ease-in-out ${orb.delay} infinite`,
            filter: "blur(60px)",
          }}
        />
      ))}

      {/* Subtle grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Card */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: { xs: 4, sm: 8 },
          py: { xs: 6, sm: 8 },
          maxWidth: 560,
          width: "90%",
          borderRadius: "24px",
          border: "0.5px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(12px)",
          animation: `${fadeUp} 0.9s cubic-bezier(0.16,1,0.3,1) both`,
        }}
      >
        {/* Floating icon */}
        <Box sx={{ animation: `${float} 4s ease-in-out infinite`, mb: 4 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "18px",
              border: "0.5px solid rgba(255,255,255,0.12)",
              backgroundColor: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>

        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            mb: 2,
          }}
        >
          Get in touch
        </Typography>

        {/* Headline */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: { xs: "32px", sm: "42px" },
            fontWeight: 400,
            lineHeight: 1.15,
            color: "rgba(255,255,255,0.92)",
            mb: 3,
            letterSpacing: "-0.02em",
          }}
        >
          We'd love to
          <br />
          hear from you
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            width: 40,
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.12)",
            mx: "auto",
            mb: 3,
          }}
        />

        {/* Body */}
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            mb: 1,
          }}
        >
          For any inquiries, please contact us at
        </Typography>

        {/* Email link */}
        <Link
          href="mailto:contact@saywish.com"
          underline="none"
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            display: "inline-block",
            position: "relative",
            letterSpacing: "0.01em",
            transition: "color 0.2s",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: "-2px",
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.25)",
              transition: "background-color 0.2s",
            },
            "&:hover": { color: "#fff" },
            "&:hover::after": { backgroundColor: "rgba(255,255,255,0.6)" },
          }}
        >
          contact@saywish.com
        </Link>
      </Box>
    </Box>
  );
}