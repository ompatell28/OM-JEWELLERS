import React from 'react';
import { Truck, Headphones, ShieldCheck, Award } from 'lucide-react';

const badges = [
  { icon: Truck, title: 'Free Shipping', desc: 'Insured all India delivery' },
  { icon: Headphones, title: '24/7 Call Support', desc: 'Expert assistance anytime' },
  { icon: ShieldCheck, title: '100% Payment Secured', desc: '256-bit SSL encrypted' },
  { icon: Award, title: 'BIS Hallmarked', desc: 'Government certified purity' }
];

export const TrustBadges = () => {
  return (
    <div className="py-12 border-y border-white/10 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <div key={i} className="flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-serif font-medium text-white">{b.title}</h5>
                <p className="text-xs text-gray-400">{b.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};