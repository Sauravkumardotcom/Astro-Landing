"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center">
        <p className="text-muted">Loading testimonials...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center">
        <p className="text-red-500">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            What Our Clients <span className="text-primary">Say About Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Discover how our astrological guidance has transformed lives across
            the globe, bringing clarity, purpose, and positive change.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-card rounded-2xl shadow-md p-6 h-full flex flex-col items-center text-center">
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  width={120}
                  height={120}
                  className=" object-cover mb-4"
                />
                <p className="text-muted-foreground italic mb-4">
                  “{t.feedback}”
                </p>
                <h3 className="font-semibold text-lg">{t.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
