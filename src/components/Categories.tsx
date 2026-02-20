"use client";
import {categories } from '@/mockdata';
import { ChevronRight, Cpu } from 'lucide-react';
import { motion } from "motion/react";
import Link from 'next/link';

function Categories() {
    const parentCategories = categories.filter((c) => c.parentId === null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[#F5F5F5] text-2xl">Browse Categories</h2>
        <Link
          href={"/shop"}
          className="text-[#A78BFA] text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
        >
          View All <ChevronRight size={16} strokeWidth={1.5} />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {parentCategories.map((cat, i) => (
          <Link href={"/shop"} key={i}>
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-[#141416] border border-white/6 rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 hover:border-[#7C3AED]/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#A78BFA] group-hover:bg-[#7C3AED]/20 transition-colors">
                {<Cpu size={24} strokeWidth={1.5} />}
                {/*{iconMap[cat.icon] || <Cpu size={24} strokeWidth={1.5} />}*/}
              </div>
              <p className="text-[#F5F5F5] text-sm mb-1">{cat.name}</p>
              <p className="text-[#71717A] text-xs">{cat.itemCount} items</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories
