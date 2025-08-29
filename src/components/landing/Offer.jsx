"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Offer() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
        <p className="text-muted-foreground mb-6">
          Book your personalized astrology session before the timer runs out!
        </p>
        <div className="text-2xl font-semibold mb-6">
          {formatTime(timeLeft)}
        </div>
        <Link
          href="/book"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md shadow hover:opacity-90 transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}

