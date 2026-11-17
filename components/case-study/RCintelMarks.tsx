"use client";

import React from "react";

export type SignatureTone =
  | "foil"
  | "slate"
  | "almond"
  | "mono-white"
  | "mono-slate"
  | "mono-almond";

export type MonogramTone =
  | "foil"
  | "slate"
  | "almond"
  | "mono-white"
  | "mono-slate"
  | "mono-bluegray";

/**
 * 01 · Primary Signature Lockup
 * Authentic vector SVG from RCintel Brand Kit v2.0
 */
export function RCintelSignature({
  tone = "foil",
  className = "",
  style,
  alt = "RCintel Signature Mark",
}: {
  tone?: SignatureTone;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}) {
  const map: Record<SignatureTone, string> = {
    foil: "/rcintel/rcintel-signature-foil-for-dark.svg",
    slate: "/rcintel/rcintel-signature-slate-for-light.svg",
    almond: "/rcintel/rcintel-signature-almond-for-dark.svg",
    "mono-white": "/rcintel/rcintel-signature-mono-white.svg",
    "mono-slate": "/rcintel/rcintel-signature-mono-slate.svg",
    "mono-almond": "/rcintel/rcintel-signature-mono-almond.svg",
  };

  const src = map[tone] || map.foil;

  return (
    <img
      src={src}
      alt={alt}
      className={`select-none ${className}`}
      style={{ display: "inline-block", maxWidth: "100%", height: "auto", ...style }}
      draggable={false}
      loading="eager"
    />
  );
}

/**
 * 02 · Capsule Character Badge
 * Authentic vector SVG from RCintel Brand Kit v2.0
 */
export function RCintelBadge({
  flat = false,
  className = "",
  style,
  alt = "RCintel Capsule Badge",
}: {
  flat?: boolean;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}) {
  const src = flat
    ? "/rcintel/rcintel-badge-flat.svg"
    : "/rcintel/rcintel-badge.svg";

  return (
    <img
      src={src}
      alt={alt}
      className={`select-none ${className}`}
      style={{ display: "inline-block", maxWidth: "100%", height: "auto", ...style }}
      draggable={false}
      loading="eager"
    />
  );
}

/**
 * 03 · Horizontal Lockup
 * Badge + Signature paired horizontally for navbar and headers
 */
export function RCintelLockup({
  tone = "dark",
  className = "",
  style,
  alt = "RCintel Horizontal Lockup",
}: {
  tone?: "dark" | "light";
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}) {
  const src =
    tone === "dark"
      ? "/rcintel/rcintel-horizontal-for-dark.svg"
      : "/rcintel/rcintel-horizontal-for-light.svg";

  return (
    <img
      src={src}
      alt={alt}
      className={`select-none ${className}`}
      style={{ display: "inline-block", maxWidth: "100%", height: "auto", ...style }}
      draggable={false}
      loading="eager"
    />
  );
}

/**
 * 04 · Architectural RC Monogram with 8 Shift Lights
 */
export function RCintelMonogram({
  tone = "foil",
  className = "",
  style,
  alt = "RCintel Monogram",
}: {
  tone?: MonogramTone;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}) {
  const map: Record<MonogramTone, string> = {
    foil: "/rcintel/rcintel-monogram-foil-for-dark.svg",
    slate: "/rcintel/rcintel-monogram-slate-for-light.svg",
    almond: "/rcintel/rcintel-monogram-almond-for-dark.svg",
    "mono-white": "/rcintel/rcintel-monogram-mono-white.svg",
    "mono-slate": "/rcintel/rcintel-monogram-mono-slate.svg",
    "mono-bluegray": "/rcintel/rcintel-monogram-mono-bluegray.svg",
  };

  const src = map[tone] || map.foil;

  return (
    <img
      src={src}
      alt={alt}
      className={`select-none ${className}`}
      style={{ display: "inline-block", maxWidth: "100%", height: "auto", ...style }}
      draggable={false}
      loading="eager"
    />
  );
}

/**
 * 05 · Studio Stack
 * Badge centered above Signature for covers and editorial decks
 */
export function RCintelStack({
  tone = "dark",
  className = "",
  style,
  alt = "RCintel Studio Stack",
}: {
  tone?: "dark" | "light";
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}) {
  const src =
    tone === "dark"
      ? "/rcintel/rcintel-stack-for-dark.svg"
      : "/rcintel/rcintel-stack-for-light.svg";

  return (
    <img
      src={src}
      alt={alt}
      className={`select-none ${className}`}
      style={{ display: "inline-block", maxWidth: "100%", height: "auto", ...style }}
      draggable={false}
      loading="eager"
    />
  );
}

/**
 * 05 · Studio Seal
 * Circular validation seal with typography and capsule emblem
 */
export function RCintelSeal({
  className = "",
  style,
  alt = "RCintel Studio Seal",
}: {
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}) {
  return (
    <img
      src="/rcintel/rcintel-seal.svg"
      alt={alt}
      className={`select-none ${className}`}
      style={{ display: "inline-block", maxWidth: "100%", height: "auto", ...style }}
      draggable={false}
      loading="eager"
    />
  );
}
