<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
  />
  <meta name="theme-color" content="#f7f5f0" />
  <title>Maria Clara | Psicologia, Psicanálise &amp; Recrutamento</title>

  <!-- Google Fonts: Tipografia Editorial Serif + Sans-Serif minimalista -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />

  <style>
    :root {
      /* Paleta: Red Inferno, Rosewood, Coffee Bean & Classic White */
      --bg-cream: #f7f5f0;        /* Classic White quente */
      --cream-accent: #efefc9;    /* Lemon Chiffon / Creme suave */
      --burgundy: #640017;        /* Rosewood / Vinho editorial */
      --burgundy-deep: #440000;   /* Red Inferno profundo */
      --coffee-bean: #2f1b1a;     /* Coffee Bean / Chocolate escuro */
      --text-muted: #5e4c48;      /* Taupe amarronzado suave para leitura */
      --white: #ffffff;

      --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
      -webkit-text-size-adjust: 100%;
      width: 100%;
      overflow-x: hidden;
    }

    body {
      width: 100%;
      max-width: 100vw;
      min-height: 100dvh;
      background-color: var(--bg-cream);
      color: var(--coffee-bean);
      font-family: "Montserrat", sans-serif;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    .bio-wrapper {
      width: 100%;
      min-height: 100dvh;
      background-color: var(--bg-cream);
      overflow-x: hidden;
    }

    /* =========================================
       1. HERO SECTION (Foto no Topo + Blur Abaixo do Peito)
    ========================================= */
    .hero {
      position: relative;
      width: 100%;
      min-height: 100svh;
      background-color: var(--bg-cream);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      overflow: hidden;
      padding-bottom: clamp(36px, 6vh, 64px);
    }

    .hero-corner-tag {
      position: absolute;
      top: calc(18px + env(safe-area-inset-top, 0px));
      right: clamp(18px, 5vw, 44px);
      z-index: 6;
      text-align: right;
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-weight: 500;
      font-size: clamp(0.95rem, 3.4vw, 1.15rem);
      line-height: 1.08;
      color: var(--coffee-bean);
      opacity: 0;
      transform: translateY(-8px);
      animation: fadeDown 0.9s var(--ease-out-expo) 0.25s forwards;
    }

    .hero-media {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 76svh;
      min-height: 450px;
      z-index: 1;
      overflow: hidden;
      mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 76%,
        rgba(0, 0, 0, 0.55) 90%,
        rgba(0, 0, 0, 0) 100%
      );
      -webkit-mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 76%,
        rgba(0, 0, 0, 0.55) 90%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    .hero-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
      filter: sepia(10%) brightness(1.06) contrast(0.98);
      transform: scale(1);
      transform-origin: center top;
      animation: heroZoomOut 1.6s var(--ease-out-expo) forwards;
    }

    .hero-fade-blur {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 26%;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 35%,
        rgba(0, 0, 0, 0.6) 72%,
        rgba(0, 0, 0, 0) 100%
      );
      -webkit-mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 35%,
        rgba(0, 0, 0, 0.6) 72%,
        rgba(0, 0, 0, 0) 100%
      );
      pointer-events: none;
      z-index: 2;
    }

    .hero-fade-gradient {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 30%;
      background: linear-gradient(
        to bottom,
        rgba(247, 245, 240, 0) 0%,
        rgba(247, 245, 240, 0.65) 52%,
        rgba(247, 245, 240, 0.94) 82%,
        var(--bg-cream) 100%
      );
      pointer-events: none;
      z-index: 3;
    }

    .hero-content {
      position: relative;
      z-index: 5;
      width: 100%;
      max-width: 680px;
      padding: 0 24px;
      text-align: center;
      margin-top: 60svh;
    }

    .title-mask {
      overflow: hidden;
      display: block;
    }

    .hero-greeting {
      display: block;
      font-family: "Cormorant Garamond", serif;
      font-weight: 400;
      font-size: clamp(2.35rem, 9.2vw, 3.5rem);
      line-height: 1.02;
      letter-spacing: 0.03em;
      color: var(--coffee-bean);
      transform: translateY(115%);
      opacity: 0;
      animation: riseUp 1s var(--ease-out-expo) 0.18s forwards;
    }

    .hero-greeting em {
      font-style: italic;
      font-weight: 500;
      color: var(--burgundy);
      letter-spacing: 0;
    }

    .hero-name {
      display: block;
      font-family: "Cormorant Garamond", serif;
      font-weight: 500;
      font-size: clamp(2.65rem, 10.6vw, 4.2rem);
      line-height: 1.02;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--burgundy-deep);
      margin-top: 2px;
      transform: translateY(115%);
      opacity: 0;
      animation: riseUp 1.08s var(--ease-out-expo) 0.34s forwards;
    }

    .hero-cta-wrap {
      margin-top: 20px;
      transform: translateY(24px);
      opacity: 0;
      animation: riseUp 1s var(--ease-out-expo) 0.5s forwards;
    }

    .hero-outline-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 46px;
      padding: 12px 32px;
      border-radius: 999px;
      border: 1.2px solid var(--burgundy);
      background-color: rgba(247, 245, 240, 0.75);
      color: var(--burgundy-deep);
      text-decoration: none;
      font-size: clamp(0.68rem, 2.7vw, 0.78rem);
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      transition: transform 0.35s var(--ease-smooth), background-color 0.35s ease,
        color 0.35s ease, box-shadow 0.35s ease;
    }

    .hero-outline-btn:active {
      transform: scale(0.97);
      background-color: var(--burgundy-deep);
      color: var(--bg-cream);
    }

    @media (hover: hover) {
      .hero-outline-btn:hover {
        transform: translateY(-2px);
        background-color: var(--burgundy-deep);
        color: var(--bg-cream);
        box-shadow: 0 10px 24px rgba(68, 0, 0, 0.18);
      }
    }

    @keyframes riseUp {
      0% {
        transform: translateY(115%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeDown {
      0% {
        transform: translateY(-8px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 0.85;
      }
    }

    @keyframes heroZoomOut {
      0% {
        transform: scale(1.03);
      }
      100% {
        transform: scale(1);
      }
    }

    /* =========================================
       2. SEÇÃO MANIFESTO & SOBRE MIM
    ========================================= */
    .about-section {
      width: 100%;
      padding: clamp(52px, 8vh, 88px) 24px clamp(52px, 8vh, 88px);
      background-color: var(--bg-cream);
      border-top: 1px solid rgba(100, 0, 23, 0.08);
    }

    .about-inner {
      width: 100%;
      max-width: 780px;
      margin: 0 auto;
    }

    .epigraph {
      text-align: center;
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-weight: 500;
      font-size: clamp(1.55rem, 6.2vw, 2.25rem);
      line-height: 1.24;
      color: var(--burgundy);
      max-width: 640px;
      margin: 0 auto;
    }

    .editorial-divider {
      width: 44px;
      height: 1px;
      background-color: rgba(100, 0, 23, 0.35);
      margin: 28px auto 32px;
    }

    .about-label {
      display: block;
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--burgundy);
      margin-bottom: 14px;
    }

    .about-text {
      font-size: clamp(0.92rem, 3.6vw, 1.02rem);
      font-weight: 400;
      line-height: 1.78;
      color: var(--coffee-bean);
    }

    .maternity-highlight {
      margin-top: 24px;
      padding: 16px 20px;
      border-left: 2px solid var(--burgundy);
      background-color: rgba(100, 0, 23, 0.04);
      border-radius: 0 12px 12px 0;
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-size: clamp(1.25rem, 4.8vw, 1.5rem);
      line-height: 1.35;
      color: var(--burgundy-deep);
    }

    /* =========================================
       3. SEÇÃO CARDS + CLÍNICA & RECRUTAMENTO
    ========================================= */
    .services-section {
      width: 100%;
      background-color: var(--burgundy-deep);
      padding: clamp(48px, 8vh, 84px) 20px clamp(52px, 8vh, 88px);
      color: var(--bg-cream);
    }

    .services-container {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
    }

    .services-header {
      text-align: center;
      margin-bottom: clamp(28px, 5vh, 42px);
    }

    .services-header h2 {
      font-family: "Cormorant Garamond", serif;
      font-size: clamp(2.2rem, 8.8vw, 3.2rem);
      font-weight: 400;
      line-height: 1.04;
      color: var(--bg-cream);
    }

    .services-header h2 em {
      font-style: italic;
      color: var(--cream-accent);
    }

    .services-grid {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .service-card {
      position: relative;
      height: 136px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      text-decoration: none;
      background-color: var(--coffee-bean);
      box-shadow: 0 12px 28px rgba(18, 4, 4, 0.32);
      transition: transform 0.4s var(--ease-smooth), box-shadow 0.4s var(--ease-smooth);
    }

    .service-card:active {
      transform: scale(0.985);
    }

    @media (hover: hover) {
      .service-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 36px rgba(18, 4, 4, 0.44);
      }

      .service-card:hover img {
        transform: scale(1.05);
      }
    }

    .service-card img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: contrast(1.04) saturate(0.92);
      transition: transform 0.6s var(--ease-smooth);
    }

    .card-1 img {
      object-position: center 45%;
    }
    .card-2 img {
      object-position: center 50%;
    }
    .card-3 img {
      object-position: center 55%;
    }

    .service-overlay-left {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(47, 27, 26, 0.92) 0%,
        rgba(100, 0, 23, 0.75) 56%,
        rgba(68, 0, 0, 0.18) 100%
      );
    }

    .service-overlay-right {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        270deg,
        rgba(47, 27, 26, 0.92) 0%,
        rgba(100, 0, 23, 0.76) 58%,
        rgba(68, 0, 0, 0.18) 100%
      );
    }

    .service-content {
      position: relative;
      z-index: 2;
      padding: 0 24px;
      width: 100%;
      color: var(--white);
    }

    .service-card.align-right .service-content {
      text-align: right;
    }

    .service-title {
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-weight: 500;
      font-size: clamp(2.1rem, 8.5vw, 2.5rem);
      line-height: 1;
      color: var(--white);
    }

    .service-tag {
      display: block;
      margin-top: 6px;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--cream-accent);
    }

    /* Pilares de Atuação (Clínica & Recrutamento) */
    .pillars-grid {
      margin-top: clamp(32px, 5vh, 48px);
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .pillar-box {
      padding: 26px 24px;
      border-radius: 14px;
      background-color: rgba(47, 27, 26, 0.52);
      border: 1px solid rgba(239, 239, 201, 0.14);
    }

    .pillar-box h3 {
      font-family: "Cormorant Garamond", serif;
      font-size: 1.65rem;
      font-weight: 400;
      color: var(--cream-accent);
      margin-bottom: 10px;
    }

    .pillar-box h3 em {
      font-style: italic;
    }

    .pillar-box p {
      font-size: 0.88rem;
      font-weight: 300;
      line-height: 1.75;
      color: rgba(247, 245, 240, 0.9);
    }

    .pillars-closing {
      margin-top: clamp(30px, 5vh, 44px);
      text-align: center;
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-size: clamp(1.32rem, 5vw, 1.75rem);
      line-height: 1.35;
      color: var(--cream-accent);
      max-width: 680px;
      margin-left: auto;
      margin-right: auto;
    }

    /* =========================================
       4. SEÇÃO "COMO FUNCIONA O PROCESSO?"
    ========================================= */
    .process-section {
      width: 100%;
      padding: clamp(54px, 8vh, 88px) 24px clamp(44px, 7vh, 72px);
      background-color: var(--bg-cream);
    }

    .process-inner {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
    }

    .section-heading {
      font-family: "Cormorant Garamond", serif;
      font-size: clamp(2.4rem, 9.5vw, 3.6rem);
      font-weight: 400;
      line-height: 1.04;
      color: var(--burgundy);
    }

    .section-heading em {
      font-style: italic;
      font-weight: 500;
    }

    .process-section .section-heading {
      text-align: center;
      margin-bottom: clamp(36px, 6vh, 56px);
    }

    .steps-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .step-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }

    .step-number-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 68px;
      justify-content: flex-end;
      flex-shrink: 0;
    }

    .step-badge-icon {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1px solid rgba(100, 0, 23, 0.45);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--burgundy);
      font-size: 0.75rem;
      flex-shrink: 0;
    }

    .step-number {
      font-family: "Cormorant Garamond", serif;
      font-size: 3.1rem;
      font-weight: 400;
      line-height: 0.85;
      color: var(--burgundy);
    }

    .step-text h3 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--coffee-bean);
      margin-bottom: 6px;
    }

    .step-text p {
      font-size: 0.88rem;
      font-weight: 400;
      line-height: 1.6;
      color: var(--text-muted);
    }

    /* =========================================
       5. CARTÃO CTA ("Agende seu atendimento")
    ========================================= */
   .cta-wrapper {
      width: 100%;
      padding: 8px 20px clamp(42px, 6vh, 64px);
      background-color: var(--bg-cream);
    }

    .cta-card {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      background: linear-gradient(155deg, #640017 0%, #440000 100%);
      border-radius: 24px;
      padding: clamp(32px, 5vh, 48px) clamp(20px, 4vw, 48px);
      text-align: center;
      color: var(--white);
      box-shadow: 0 18px 38px rgba(68, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    .cta-copy {
      width: 100%;
      max-width: 620px;
    }

    .cta-card h2 {
      font-family: "Cormorant Garamond", serif;
      font-size: clamp(2rem, 7.8vw, 3.2rem);
      font-weight: 400;
      line-height: 1.08;
      color: var(--bg-cream);
      text-wrap: balance;
    }

    .cta-card p {
      max-width: 480px;
      margin: 14px auto 22px;
      font-size: clamp(0.88rem, 3.8vw, 1rem);
      font-weight: 400;
      line-height: 1.55;
      color: rgba(247, 245, 240, 0.92);
      text-wrap: balance;
    }

    .cta-card h2 em {
      font-style: italic;
      color: var(--cream-accent);
    }

    .cta-quote {
      margin: 14px auto 24px;
      max-width: 480px;
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-size: clamp(1.15rem, 4.2vw, 1.45rem);
      line-height: 1.4;
      color: rgba(247, 245, 240, 0.92);
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 54px;
      min-width: min(100%, 220px);
      background-color: var(--bg-cream);
      color: var(--burgundy-deep);
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 14px 32px;
      border-radius: 999px;
      white-space: nowrap;
      box-shadow: 0 6px 18px rgba(24, 4, 4, 0.24);
      transition: transform 0.35s var(--ease-smooth), background-color 0.35s ease,
        box-shadow 0.35s ease;
    }
    @media (min-width: 1024px) {
      .cta-card {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
        padding: 48px 56px;
        gap: 36px;
      }

      .cta-copy {
        max-width: 620px;
      }

      .cta-card p {
        margin: 14px 0 0;
        max-width: 580px;
      }

      .cta-quote {
        margin: 12px 0 0;
        max-width: 580px;
      }
    }

    /* =========================================
       6. RODAPÉ COM FOTO E COPYRIGHT
    ========================================= */
    .footer-photo-section {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
      background-color: var(--coffee-bean);
      display: flex;
      justify-content: center;
    }

    .footer-media {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .footer-photo-section img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 18%;
      display: block;
    }

    .footer-vignette {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(47, 27, 26, 0.94) 0%,
        rgba(68, 0, 0, 0.36) 50%,
        rgba(247, 245, 240, 0.14) 100%
      );
      z-index: 2;
    }

    .footer-copy {
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(20px + env(safe-area-inset-bottom, 0px));
      z-index: 3;
      text-align: center;
      padding: 0 20px;
      color: rgba(247, 245, 240, 0.9);
      font-size: 0.7rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      line-height: 1.7;
    }

    /* =========================================
       ADAPTAÇÃO PARA PC / DESKTOP (>= 1024px)
    ========================================= */
    @media (min-width: 1024px) {
      .hero {
        min-height: 720px;
        padding-bottom: 48px;
      }

      .hero-media {
        width: min(580px, 46vw);
        height: 78vh;
        mask-image: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 14%,
            rgba(0, 0, 0, 1) 86%,
            rgba(0, 0, 0, 0) 100%
          ),
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 76%,
            rgba(0, 0, 0, 0) 100%
          );
        mask-composite: intersect;
        -webkit-mask-image: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 14%,
            rgba(0, 0, 0, 1) 86%,
            rgba(0, 0, 0, 0) 100%
          ),
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 76%,
            rgba(0, 0, 0, 0) 100%
          );
        -webkit-mask-composite: source-in;
      }

      .hero-content {
        margin-top: 62vh;
      }

      .services-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .service-card {
        height: 300px;
        align-items: flex-end;
      }

      .service-overlay-left,
      .service-overlay-right {
        background: linear-gradient(
          to top,
          rgba(47, 27, 26, 0.94) 0%,
          rgba(100, 0, 23, 0.62) 52%,
          rgba(68, 0, 0, 0.12) 100%
        );
      }

      .service-content,
      .service-card.align-right .service-content {
        text-align: left;
        padding: 28px;
      }

      .pillars-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      .steps-list {
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
      }

      .step-item {
        flex-direction: column;
        gap: 14px;
        padding: 28px;
        border-radius: 16px;
        background-color: rgba(100, 0, 23, 0.04);
        border: 1px solid rgba(100, 0, 23, 0.1);
      }

      .step-number-wrap {
        min-width: auto;
        justify-content: flex-start;
      }

      .cta-card {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
        gap: 36px;
      }

      .cta-quote {
        margin: 12px 0 0;
        max-width: 580px;
      }

      .footer-media {
        width: min(680px, 52vw);
        mask-image: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 16%,
          rgba(0, 0, 0, 1) 84%,
          rgba(0, 0, 0, 0) 100%
        );
        -webkit-mask-image: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 16%,
          rgba(0, 0, 0, 1) 84%,
          rgba(0, 0, 0, 0) 100%
        );
      }
    }

    
/* =========================================
   ANIMAÇÃO DE SCROLL REVEAL
========================================= */

/* Estado inicial: conteúdo permanece visível sem JavaScript */
.reveal {
    opacity: 1;
    transform: none;
}

/* Animação ativada somente quando JavaScript está disponível */
.js .reveal {
    opacity: 0;
    transform: translateY(24px);

    transition:
        opacity 0.85s var(--ease-smooth),
        transform 0.85s var(--ease-smooth);
}

/* Estado final */
.js .reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Respeita usuários que preferem movimento reduzido */
@media (prefers-reduced-motion: reduce) {
    .js .reveal {
        opacity: 1;
        transform: none;
        transition: none;
    }
}

  </style>
</head>
<body>
  <main class="bio-wrapper">
    <!-- 1. HERO COM FOTO NO TOPO E BLUR ABAIXO DO PEITO -->
    <header class="hero">
      <span class="hero-corner-tag">
        psicologia &amp;<br />psicanálise
      </span>

      <div class="hero-media">
        <img
          src="imagens/mariaclara.jpg"
          onerror="this.onerror=null;this.src='imagens/anaclara.jpg';"
          alt="Maria Clara"
          class="hero-photo"
        />
        <div class="hero-fade-blur" aria-hidden="true"></div>
        <div class="hero-fade-gradient" aria-hidden="true"></div>
      </div>

      <div class="hero-content">
        <h1>
          <span class="title-mask">
            <span class="hero-greeting"><em>Oiee,</em> EU SOU</span>
          </span>
          <span class="title-mask">
            <span class="hero-name">A MARIA CLARA</span>
          </span>
        </h1>

        <div class="hero-cta-wrap">
          <a href="#sobre" class="hero-outline-btn">
            Conheça minha história
          </a>
        </div>
      </div>
    </header>

    <!-- 2. MANIFESTO & QUEM SOU EU -->
    <section id="sobre" class="about-section reveal">
      <div class="about-inner">
        <blockquote class="epigraph">
          &ldquo;Há encontros que nos apresentam ao outro. E há aqueles que,
          inesperadamente, nos devolvem a nós mesmos.&rdquo;
        </blockquote>

        <div class="editorial-divider" aria-hidden="true"></div>

        <span class="about-label">Sobre mim</span>
        <p class="about-text">
          Sou Maria Clara, tenho 23 anos, sou mãe, inquieta e atravessada pela
          subjetividade dos encontros. Foi o desejo de compreender o outro que me
          fez mudar de cidade para cursar Psicologia. O que eu não imaginava era
          que, nesse percurso, acabaria me encontrando também.
        </p>

        <p class="maternity-highlight reveal">
          A maternidade ampliou minha sensibilidade e me apresentou novas formas
          de sentir, escutar e existir.
        </p>
      </div>
    </section>

    <!-- 3. BLOCO VINHO: CARDS + CLÍNICA & RECRUTAMENTO -->
    <section id="servicos" class="services-section">
      <div class="services-container">
        <div class="services-header reveal">
          <h2>
            O que eu posso<br />
            <em>fazer por você</em>
          </h2>
        </div>

        <div class="services-grid">
          <a
            href="https://wa.me/556296598209?text=Ol%C3%A1%2C%20Maria%20Clara!%20Gostaria%20de%20saber%20mais%20sobre%20escuta%20psicanal%C3%ADtica."
            target="_blank"
            rel="noopener noreferrer"
            class="service-card card-1 reveal"
          >
            <img
              src="imagens/escuta.jpg"
              onerror="this.onerror=null;this.src='imagens/mariaclara.jpg';"
              alt="Escuta Psicanalítica"
            />
            <div class="service-overlay-left"></div>
            <div class="service-content">
              <h3 class="service-title">Escuta</h3>
              <span class="service-tag">Psicanalítica</span>
            </div>
          </a>

          <a
            href="https://wa.me/556296598209?text=Ol%C3%A1%2C%20Maria%20Clara!%20Gostaria%20de%20saber%20mais%20sobre%20Recrutamento%20e%20Sele%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            class="service-card card-2 align-right reveal"
          >
            <img
              src="imagens/acompanhamento.jpg"
              onerror="this.onerror=null;this.src='imagens/mariaclara.jpg';"
              alt="acompanhamento"
            />
            <div class="service-overlay-right"></div>
            <div class="service-content">
              <h3 class="service-title">Acompanhamento</h3>
              <span class="service-tag">Profissional</span>
            </div>
          </a>

          <a
            href="https://wa.me/556296598209?text=Ol%C3%A1%2C%20Maria%20Clara!%20Gostaria%20de%20conversar%20sobre%20desenvolvimento%20pessoal."
            target="_blank"
            rel="noopener noreferrer"
            class="service-card card-3 reveal"
          >
            <img
              src="imagens/acolhimento.jpg"
              onerror="this.onerror=null;this.src='imagens/mariaclara.jpg';"
              alt="Acolhimento Individual"
            />
            <div class="service-overlay-left"></div>
            <div class="service-content">
              <h3 class="service-title">Acolhimento</h3>
              <span class="service-tag">Desenvolvimento Pessoal</span>
            </div>
          </a>
        </div>

       

        <p class="pillars-closing reveal">
          &ldquo;Entre o movimento do recrutamento e a profundidade da clínica,
          sigo me descobrindo, movida pelo desejo e transformada pelos
          encontros.&rdquo;
        </p>
      </div>
    </section>

    <!-- 4. COMO FUNCIONA O PROCESSO? -->
    <section class="process-section reveal">
      <div class="process-inner">
        <h2 class="section-heading">
          Como funciona<br />
          <em>o processo?</em>
        </h2>

        <div class="steps-list">
          <div class="step-item reveal">
            <div class="step-number-wrap">
              <span class="step-number">01</span>
            </div>
            <div class="step-text">
              <h3>Primeiro contato</h3>
              <p>
                Você clica no botão abaixo e envia uma mensagem pelo WhatsApp para
                conversarmos sobre o seu momento atual.
              </p>
            </div>
          </div>

          <div class="step-item reveal">
            <div class="step-number-wrap">
              <span class="step-badge-icon">&#8250;</span>
              <span class="step-number">02</span>
            </div>
            <div class="step-text">
              <h3>Alinhamento inicial</h3>
              <p>
                Compreendemos suas demandas, objetivos pessoais ou profissionais e
                definimos o melhor formato de atendimento.
              </p>
            </div>
          </div>

          <div class="step-item reveal">
            <div class="step-number-wrap">
              <span class="step-number">03</span>
            </div>
            <div class="step-text">
              <h3>Acompanhamento contínuo</h3>
              <p>
                Iniciamos os encontros com escuta ética, acolhedora e estruturada
                para a sua evolução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CTA AGENDE SEU ATENDIMENTO -->
    <section class="cta-wrapper reveal">
      <div class="cta-card">
        <div class="cta-copy">
          <h2>
            Vamos iniciar<br />
            <em>esse encontro?</em>
          </h2>
          <p>
            Toque no botão abaixo e fale diretamente comigo pelo WhatsApp.
          </p>
        </div>
        <a
          href="https://wa.me/556296598209?text=Ol%C3%A1%2C%20Maria%20Clara!%20Vim%20pelo%20seu%20bio%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button"
        >
          Fale Comigo
        </a>
      </div>
    </section>

    <!-- 6. RODAPÉ COM FOTO -->
    <footer class="footer-photo-section reveal">
      <div class="footer-media">
        <img
          src="imagens/mariaclara.jpg"
          onerror="this.onerror=null;this.src='imagens/anaclara.jpg';"
          alt="Maria Clara"
        />
      </div>
      <div class="footer-vignette" aria-hidden="true"></div>
      <div class="footer-copy">
        Copyright &copy; 2026 &bull; Maria Clara<br />
        Todos os direitos reservados
      </div>
    </footer>
  </main>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const revealElements = document.querySelectorAll(".reveal");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      revealElements.forEach((el) => observer.observe(el));
    });
  </script>
  
</body>
</html>
