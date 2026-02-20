"use client";
import { PRODUCT_IMAGES, products } from "@/mockdata";
import { GradientButton } from "@/shared/GradientButton";
import { ImageWithFallback } from "@/shared/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={PRODUCT_IMAGES.hero}
          alt="Hero"
          width={600}
          height={400}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0B] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/25 text-[#A78BFA] text-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
              New Collection 2026
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] mb-4"
              style={{ lineHeight: 1.1 }}
            >
              Discover
              <br />
              <span className="bg-linear-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                Premium Products
              </span>
            </h1>
            <p className="text-[#A1A1AA] text-lg mb-8 max-w-md">
              Curated selection of the finest products for the modern lifestyle.
              Quality meets innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={"/shop"}>
                <GradientButton
                  size="lg"
                  icon={<ArrowRight size={18} strokeWidth={1.5} />}
                >
                  Shop Now
                </GradientButton>
              </Link>
              <Link href={"/shop"}>
                <GradientButton
                  variant="outlined"
                  size="lg"
                >
                  Browse Collections
                </GradientButton>
              </Link>
            </div>
          </motion.div>
          {/* Floating product card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-[#7C3AED]/20 to-[#06B6D4]/20 rounded-3xl blur-xl" />
              <div className="relative bg-[#141416] border border-white/6 rounded-2xl p-6 max-w-xs ml-auto">
                <ImageWithFallback
                  src={products[0].images[0]}
                  alt={products[0].name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-[#F5F5F5] text-sm mb-1">
                  {products[0].name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#F5F5F5]">${products[0].price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[#F59E0B] text-sm">★</span>
                    <span className="text-[#A1A1AA] text-sm">
                      {products[0].ratingsAverage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
