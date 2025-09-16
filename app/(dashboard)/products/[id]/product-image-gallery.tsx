"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const images = [
    "/images/products/1.png",
    "/images/products/2.png",
    "/images/products/3.png",
    "/images/products/4.png",
    "/images/products/5.png",
    "/images/products/6.png"
  ];

  return (
    <div className="sticky top-20 space-y-4">
      <Card>
        <CardContent className="p-6">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "var(--primary)",
                "--swiper-pagination-color": "var(--primary)"
              } as React.CSSProperties
            }
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2">
            {images.map((image, key) => (
              <SwiperSlide key={key}>
                <img
                  className="aspect-3/2 rounded-lg object-contain lg:aspect-square"
                  src={`${process.env.DASHBOARD_BASE_URL}/${image}`}
                  alt="..."
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 py-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-2">
            {images.map((image, key) => (
              <SwiperSlide key={key} className="group">
                <figure className="group-[.swiper-slide-thumb-active]:border-primary rounded-lg border opacity-70 group-[.swiper-slide-thumb-active]:opacity-100!">
                  <img
                    className="aspect-square object-contain"
                    src={`${process.env.DASHBOARD_BASE_URL}/${image}`}
                    alt="..."
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </Card>
    </div>
  );
}
