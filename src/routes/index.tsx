import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  DoodleArrowDown,
  DoodleCloud,
  DoodleHeart,
  DoodleSparkle,
  DoodleSquiggle,
  DoodleStar,
} from "@/components/doodles";
import { Reveal } from "@/components/reveal";
import tzArcade from "@/assets/tz-arcade.jpg";
import grandWisata from "@/assets/grand-wisata.jpg";
import karose from "@/assets/karose.jpg";
import hangout from "@/assets/hangout.jpg";
import heroCouple from "@/assets/hero-couple.png";

// TODO: ganti dengan nomor WhatsApp asli (format internasional tanpa "+")
const WHATSAPP_LINK =
  "https://wa.me/6281234567890?text=" +
  encodeURIComponent("Aku ikut ngedate 3-4 Oktober! Kapan kita berangkat? 🎉");

const mapsSearch = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const mapsEmbed = (q: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

type LoveHeart = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  rotation: number;
  color: string;
};

type Place = {
  name: string;
  tag: string;
  desc: string;
  img: string;
  mapQuery: string;
};

const days: { label: string; chipClass: string; places: Place[] }[] = [
  {
    label: "Hari 1 — Sabtu, 3 Oktober",
    chipClass: "bg-secondary text-secondary-foreground",
    places: [
      {
        name: "Time Zone — Living World Grand Wisata",
        tag: "Ronde pembuka • siang",
        desc: "Adu jempol di arcade! Claw machine, racing, basketball taruhannya kecil, telaknya besar. Yang kalah traktir minum di stop berikutnya. Deal?",
        img: tzArcade,
        mapQuery: "Time Zone Living World Grand Wisata Bekasi",
      },
      {
        name: "Jalan-jalan santai di area Grand Wisata",
        tag: "Lambat-lambat aja • sore",
        desc: "Keliling Granwis sambil liat barang baguss hehehehe.",
        img: grandWisata,
        mapQuery: "Living World Grand Wisata Bekasi",
      },
      {
        name: "Ngopi santai di Karose Bistro & Coffee",
        tag: "Isi ulang energi • petang",
        desc: "Kopi hangat, camilan manis, dan kursi paling pojok. Waktu yang pas buat cerita apa aja dari hal penting sampai yang nggak penting-penting amat.",
        img: karose,
        mapQuery: "Karose Bistro and Coffee Bekasi",
      },
    ],
  },
  {
    label: "Hari 2 — Minggu, 4 Oktober",
    chipClass: "bg-accent text-accent-foreground",
    places: [
      {
        name: "Nonton santai di Hangout Place Bekasi — Grand Wisata",
        tag: "Penutup yang cozy • siang",
        desc: "Bioskop boutique dengan kursi reclining yang enak banget. Filmnya dipilih bareng, gorengannya juga. Yang penting bukan nonton apa tapi nontonnya sama-sama.",
        img: hangout,
        mapQuery: "Hangout Place Bekasi Grand Wisata",
      },
    ],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayo Ngedate! • 3–4 Oktober di Bekasi" },
      {
        name: "description",
        content:
          "Undangan date 2 hari 1 malam di Bekasi, 3–4 Oktober — arcade, jalan-jalan, ngopi, dan nonton. Aku ikut?",
      },
      { property: "og:title", content: "Ayo Ngedate! • 3–4 Oktober di Bekasi" },
      {
        property: "og:description",
        content:
          "2 hari 1 malam di Bekasi: Time Zone, jalan-jalan Grand Wisata, ngopi di Karose, dan nonton di Hangout Place. Aku ikut?",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-dot-grid">
      <Hero />
      <Itinerary />
      <Closing />
      <footer className="px-6 pb-10 text-center">
        <p className="text-xs text-muted-foreground">
          dibuat dengan hati (dan sedikit overthinking) • Bekasi, 3–4 Oktober
        </p>
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* doodle melayang */}
      <DoodleStar
        className="doodle-float absolute left-[8%] top-[16%] h-8 w-8 text-terracotta"
        style={{ ["--tilt" as string]: "-8deg" }}
      />
      <DoodleHeart
        className="doodle-float absolute right-[10%] top-[12%] h-7 w-7 text-terracotta"
        style={{ ["--tilt" as string]: "6deg", animationDelay: "0.8s" }}
      />
      <DoodleCloud
        className="doodle-float absolute left-[12%] bottom-[22%] h-10 w-16 text-sage"
        style={{ animationDelay: "1.4s" }}
      />
      <DoodleSparkle
        className="doodle-float absolute right-[14%] bottom-[28%] h-6 w-6 text-peach"
        style={{ animationDelay: "2s" }}
      />
      <DoodleStar
        className="doodle-float absolute right-[6%] top-[42%] h-5 w-5 text-sage-deep"
        style={{ animationDelay: "2.6s" }}
      />

      <div className="fade-up">
        <p className="font-display text-xl text-sage-deep">psst... ada undangan buat kamu</p>
        <h1 className="mt-3 font-display text-5xl leading-[1.1] sm:text-6xl md:text-7xl">
          Ayo Ngedate,
          <br />
          <span className="text-terracotta">2 hari 1 malam!</span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-terracotta/30 bg-card px-4 py-1.5 text-sm font-semibold text-terracotta-deep">
            3–4 Oktober
          </span>
          <span className="rounded-full border border-sage/40 bg-card px-4 py-1.5 text-sm font-semibold text-sage-deep">
            Bekasi
          </span>
          <span className="rounded-full border border-peach/50 bg-card px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            2 hari 1 malam
          </span>
        </div>

        <img
          src={heroCouple}
          alt="Ilustrasi pasangan duduk bersama sambil ngopi di bawah langit malam"
          width={1024}
          height={1024}
          className="mx-auto mt-8 w-64 drop-shadow-xl sm:w-80"
        />

        <a
          href="#itinerary"
          className="group mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-xl text-primary-foreground shadow-lg shadow-terracotta/30 transition-transform hover:scale-105"
        >
          Intip itinerary kita
          <DoodleArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
        </a>

        <DoodleSquiggle className="mx-auto mt-8 h-3 w-24 text-peach" />
      </div>
    </section>
  );
}

function Itinerary() {
  let number = 0;
  return (
    <section id="itinerary" className="scroll-mt-6 px-5 py-14 md:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <DoodleSquiggle className="mx-auto h-3 w-20 text-sage" />
        <h2 className="mt-3 font-display text-4xl md:text-5xl">
          Itinerary <span className="text-terracotta">kita</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground md:text-base">
          Dua hari satu malam di Bekasi udah aku racik dari awal sampai akhir. Kamu tinggal datang.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-12 max-w-2xl">
        {/* garis timeline putus-putus */}
        <div
          className="timeline-line absolute bottom-4 left-6 top-2 w-[2.5px] md:left-7"
          aria-hidden
        />

        {days.map((day) => (
          <div key={day.label}>
            <Reveal className="relative pl-14 md:pl-16">
              <span
                className={`relative z-10 inline-block rounded-full px-4 py-1.5 font-display text-lg shadow-sm ${day.chipClass}`}
              >
                {day.label}
              </span>
            </Reveal>

            {day.places.map((place) => {
              number += 1;
              const tilt = number % 2 === 0 ? "md:rotate-[1.2deg]" : "md:rotate-[-1.2deg]";
              return (
                <Reveal key={place.name} className="relative mt-6 pl-14 md:pl-16" delay={80}>
                  {/* titik di timeline */}
                  <span
                    className="absolute left-6 top-8 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-card bg-primary shadow"
                    aria-hidden
                  />
                  <PlaceCard place={place} number={number} tilt={tilt} />
                </Reveal>
              );
            })}

            <div className="h-6" />
          </div>
        ))}
      </div>
    </section>
  );
}

function PlaceCard({ place, number, tilt }: { place: Place; number: number; tilt: string }) {
  return (
    <article
      className={`polaroid rounded-2xl transition-all duration-300 hover:rotate-0 hover:shadow-xl ${tilt}`}
    >
      <div className="relative">
        <img
          src={place.img}
          alt={place.name}
          loading="lazy"
          width={1024}
          height={640}
          className="h-52 w-full rounded-xl object-cover md:h-64"
        />
        {/* selotip */}
        <div
          className="absolute -top-2.5 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-3 rounded-sm bg-peach-soft/90 shadow-sm"
          aria-hidden
        />
        {/* nomor urut */}
        <span
          className="absolute -left-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-terracotta font-display text-xl text-primary-foreground shadow-md"
          aria-hidden
        >
          {number}
        </span>
      </div>

      <div className="px-4 pb-4 pt-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
          {place.tag}
        </p>
        <h3 className="mt-1 font-display text-2xl leading-snug md:text-[1.7rem]">{place.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
          {place.desc}
        </p>

        <div className="mt-4 overflow-hidden rounded-xl border">
          <iframe
            src={mapsEmbed(place.mapQuery)}
            title={`Peta ${place.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-44 w-full border-0"
          />
        </div>

        <a
          href={mapsSearch(place.mapQuery)}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-terracotta/40 px-4 py-2 text-sm font-semibold text-terracotta-deep transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Buka di Google Maps
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
            <path
              d="M7 17L17 7m0 0H9m8 0v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

function Closing() {
  const [loveBursts, setLoveBursts] = useState<LoveHeart[]>([]);

  const triggerLoveRain = () => {
    const burst = Array.from({ length: 26 }, (_, index) => {
      const id = Date.now() + index;
      const duration = 1.3 + Math.random() * 1.5;

      return {
        id,
        left: 50 + (Math.random() * 40 - 20),
        top: 68 + Math.random() * 12,
        size: 18 + Math.random() * 18,
        delay: Math.random() * 0.25,
        duration,
        drift: (Math.random() - 0.5) * 180,
        rotation: (Math.random() - 0.5) * 220,
        color: ["#f97316", "#f43f5e", "#fb7185", "#fbbf24", "#a3e635", "#f9a8d4"][
          Math.floor(Math.random() * 6)
        ],
      } satisfies LoveHeart;
    });

    setLoveBursts((current) => [...current, ...burst]);

    burst.forEach((heart) => {
      window.setTimeout(
        () => {
          setLoveBursts((current) => current.filter((item) => item.id !== heart.id));
        },
        (heart.duration + 0.4) * 1000,
      );
    });
  };

  return (
    <section className="px-5 py-14 md:py-24">
      <Reveal className="relative mx-auto max-w-2xl overflow-hidden rounded-4xl border border-sage/30 bg-secondary/60 px-6 py-14 text-center shadow-sm md:px-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {loveBursts.map((heart) => (
            <span
              key={heart.id}
              className="love-rain-particle"
              style={{
                left: `${heart.left}%`,
                top: `${heart.top}%`,
                animationDelay: `${heart.delay}s`,
                animationDuration: `${heart.duration}s`,
                fontSize: `${heart.size}px`,
                color: heart.color,
                ["--drift" as string]: `${heart.drift}px`,
                ["--spin" as string]: `${heart.rotation}deg`,
              }}
            >
              ♥
            </span>
          ))}
        </div>

        <DoodleHeart className="doodle-float absolute left-8 top-8 h-6 w-6 text-terracotta" />
        <DoodleStar
          className="doodle-float absolute right-10 top-12 h-6 w-6 text-peach"
          style={{ animationDelay: "1s" }}
        />
        <DoodleSparkle
          className="doodle-float absolute bottom-10 left-12 h-5 w-5 text-sage-deep"
          style={{ animationDelay: "1.8s" }}
        />

        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          Jadi... <span className="text-terracotta">ikut, ya?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
          Semua udah aku siapkan itinerary, rutenya, sampai daftar camilannya. Kamu tinggal bawa
          dirimu sendiri (dan charger, siapa tahu fotonya banyak).
        </p>

        <a
          target="_blank"
          rel="noreferrer"
          onClick={triggerLoveRain}
          className="hover-wiggle mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-9 py-4 font-display text-2xl text-primary-foreground shadow-lg shadow-terracotta/40 transition-transform hover:scale-105"
        >
          <DoodleHeart className="h-5 w-5" />
          Aku Ikut!
        </a>

        <p className="mt-5 font-display text-lg text-muted-foreground">
          boleh mikir dulu... tapi jangan sampai tanggal 3 ya
        </p>
      </Reveal>
    </section>
  );
}
