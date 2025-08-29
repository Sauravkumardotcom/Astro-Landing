"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import ThemeToggle from "../ThemeToggle";

export default function Hero() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await fetch("/api/hero");
        if (!res.ok) throw new Error("Failed to fetch hero data");
        const heroData = await res.json();
        setData(heroData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchHero();
  }, []);

  if (loading) {
    return (
      <section className="flex items-center justify-center h-[80vh]">
        <p className="text-muted">Loading hero...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex items-center justify-center h-[80vh]">
        <p className="text-red-500">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-r from-yellow-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 lg:px-20">
      <ThemeToggle />
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Certified Vedic Astrologer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {data.title.split(" ").map((word, i) =>
              word === "Cosmic" ? (
                <span key={i} className="text-primary">
                  {word + " "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1>

          <p className="text-muted-foreground max-w-xl">{data.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Button asChild>
              <a href={data.ctaLink}>{data.ctaText}</a>
            </Button>
            <Button variant="outline">Call Now</Button>
          </div>

          {/* Badges */}
          <div className="flex gap-6 mt-6">
            {data.badges.map((badge, idx) => {
              const Icon = LucideIcons[badge.icon] || LucideIcons.Star;
              return (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <Icon className="w-5 h-5 text-primary" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="rounded-full bg-gradient-to-r from-yellow-200 to-purple-200 p-2">
            <Image
              src={data.imageUrl}
              alt="Astrologer"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
