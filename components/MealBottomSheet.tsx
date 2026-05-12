"use client";

import { useEffect } from "react";

interface Props {
  mealName: string | null;
  onClose: () => void;
}

function getSwiggyUrls(meal: string) {
  const q = encodeURIComponent(meal);
  return {
    cheapest: `https://www.swiggy.com/search?query=${q}&sortAttribute=PRICE`,
    fastest: `https://www.swiggy.com/search?query=${q}&sortAttribute=DELIVERY_TIME`,
    search: `https://www.swiggy.com/search?query=${q}`,
  };
}

function getZomatoUrls(meal: string) {
  const q = encodeURIComponent(meal);
  return {
    cheapest: `https://www.zomato.com/search?q=${q}&sort=cost_asc`,
    fastest: `https://www.zomato.com/search?q=${q}&sort=delivery_time`,
    search: `https://www.zomato.com/search?q=${q}`,
  };
}

function OrderButton({
  href,
  icon,
  label,
  sublabel,
  color,
}: {
  href: string;
  icon: string;
  label: string;
  sublabel: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center gap-1 rounded-2xl py-3 px-2 flex-1 active:scale-95 transition-transform ${color}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-bold leading-tight text-center">{label}</span>
      <span className="text-[10px] opacity-70 text-center leading-tight">{sublabel}</span>
    </a>
  );
}

export default function MealBottomSheet({ mealName, onClose }: Props) {
  const open = !!mealName;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const swiggy = mealName ? getSwiggyUrls(mealName) : null;
  const zomato = mealName ? getZomatoUrls(mealName) : null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#f5f5f0] rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Meal name */}
        <div className="px-5 pb-4">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">
            Order this meal
          </p>
          <p className="text-lg font-bold text-gray-800 leading-snug">
            {mealName}
          </p>
        </div>

        <div className="px-4 flex flex-col gap-3 pb-4">
          {/* Swiggy Panel */}
          {swiggy && (
            <div className="rounded-3xl overflow-hidden border border-orange-100">
              {/* Swiggy header */}
              <div className="bg-[#FC8019] px-4 py-3 flex items-center gap-2">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#FC8019" />
                    <path
                      d="M12 22c0-4.4 3.6-8 8-8s8 3.6 8 8"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="20" cy="22" r="3" fill="white" />
                  </svg>
                </div>
                <span className="text-white font-black text-lg tracking-tight">swiggy</span>
              </div>
              {/* Swiggy buttons */}
              <div className="bg-orange-50 p-3 flex gap-2">
                <OrderButton
                  href={swiggy.cheapest}
                  icon="💰"
                  label="Cheapest"
                  sublabel="Sort by price"
                  color="bg-white border border-orange-200 text-orange-800"
                />
                <OrderButton
                  href={swiggy.fastest}
                  icon="⚡"
                  label="Fastest"
                  sublabel="Sort by time"
                  color="bg-white border border-orange-200 text-orange-800"
                />
                <OrderButton
                  href={swiggy.search}
                  icon="🔍"
                  label="Search"
                  sublabel="Open Swiggy"
                  color="bg-[#FC8019] text-white"
                />
              </div>
            </div>
          )}

          {/* Zomato Panel */}
          {zomato && (
            <div className="rounded-3xl overflow-hidden border border-red-100">
              {/* Zomato header */}
              <div className="bg-[#E23744] px-4 py-3 flex items-center gap-2">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#E23744" />
                    <path
                      d="M13 15h14M13 20h14M13 25h9"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-white font-black text-lg tracking-tight">zomato</span>
              </div>
              {/* Zomato buttons */}
              <div className="bg-red-50 p-3 flex gap-2">
                <OrderButton
                  href={zomato.cheapest}
                  icon="💰"
                  label="Cheapest"
                  sublabel="Sort by price"
                  color="bg-white border border-red-200 text-red-800"
                />
                <OrderButton
                  href={zomato.fastest}
                  icon="⚡"
                  label="Fastest"
                  sublabel="Sort by time"
                  color="bg-white border border-red-200 text-red-800"
                />
                <OrderButton
                  href={zomato.search}
                  icon="🔍"
                  label="Search"
                  sublabel="Open Zomato"
                  color="bg-[#E23744] text-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
