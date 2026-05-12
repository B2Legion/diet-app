"use client";

import { useState, useMemo } from "react";
import { mealPlan, tagConfig, type MealTag, type Meal } from "@/lib/mealData";
import MealBottomSheet from "@/components/MealBottomSheet";

const MEAL_SECTIONS = ["breakfast", "lunch", "dinner", "snacks"] as const;
type MealSection = (typeof MEAL_SECTIONS)[number];

const sectionLabel: Record<MealSection, string> = {
  breakfast: "🌅 Breakfast",
  lunch: "☀️ Lunch",
  dinner: "🌙 Dinner",
  snacks: "🍎 Snacks",
};

function getTodayIndex() {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
}

function MealCard({
  meal,
  fatLossOnly,
  onTap,
}: {
  meal: Meal;
  fatLossOnly: boolean;
  onTap: (name: string) => void;
}) {
  if (fatLossOnly && meal.tag !== "fat-loss") return null;
  const cfg = tagConfig[meal.tag];
  return (
    <button
      onClick={() => onTap(meal.name)}
      className={`w-full text-left rounded-2xl border p-4 mb-3 ${cfg.bg} active:scale-[0.98] transition-transform`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-semibold text-gray-800 text-[15px] leading-snug flex-1">
          {meal.name}
        </p>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${cfg.color} bg-white/80 border`}>
            {cfg.label}
          </span>
          <span className="text-gray-300 text-sm">›</span>
        </div>
      </div>
      {meal.note && (
        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
          {meal.note}
        </p>
      )}
      <p className="text-[10px] text-gray-400 mt-2 font-medium">
        Tap to order on Swiggy or Zomato
      </p>
    </button>
  );
}

export default function MealApp() {
  const todayIdx = getTodayIndex();
  const [selectedDay, setSelectedDay] = useState(todayIdx);
  const [activeSection, setActiveSection] = useState<MealSection>("breakfast");
  const [fatLossOnly, setFatLossOnly] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);

  const day = mealPlan[selectedDay];
  const meals = day[activeSection] as Meal[];

  const visibleCount = useMemo(
    () =>
      fatLossOnly ? meals.filter((m) => m.tag === "fat-loss").length : meals.length,
    [meals, fatLossOnly]
  );

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header */}
      <div className="bg-[#2d5a3d] text-white px-5 pt-12 pb-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Diet Plan 🥗</h1>
            <p className="text-emerald-200 text-xs mt-0.5">
              Pure Veg · Recovery & Vitality
            </p>
          </div>
          <button
            onClick={() => setFatLossOnly(!fatLossOnly)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
              fatLossOnly
                ? "bg-emerald-300 text-emerald-900 shadow-inner"
                : "bg-white/20 text-white"
            }`}
          >
            {fatLossOnly ? "🔥 Fat Loss" : "⚖️ All Meals"}
          </button>
        </div>

        {/* Day Selector */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1 pb-1">
          {mealPlan.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setSelectedDay(i)}
              className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl transition-all active:scale-95 ${
                selectedDay === i
                  ? "bg-white text-[#2d5a3d] shadow"
                  : "bg-white/15 text-white"
              }`}
            >
              <span className="text-xs font-bold">
                {d.day.slice(0, 3).toUpperCase()}
              </span>
              {i === todayIdx && (
                <span
                  className={`w-1.5 h-1.5 rounded-full mt-0.5 ${
                    selectedDay === i ? "bg-emerald-500" : "bg-emerald-300"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Day Theme */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 rounded-full bg-[#2d5a3d]" />
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              {day.day}
              {selectedDay === todayIdx && (
                <span className="ml-2 text-emerald-600 normal-case">· Today</span>
              )}
            </p>
            <h2 className="text-lg font-bold text-gray-800 leading-tight">
              {day.theme}
            </h2>
          </div>
        </div>
      </div>

      {/* B12 Reminder */}
      <div className="mx-5 mb-4 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex items-center gap-3">
        <span className="text-xl">💊</span>
        <div>
          <p className="text-xs font-bold text-amber-800">Daily Reminder</p>
          <p className="text-xs text-amber-700 mt-0.5">
            Take your B12 supplement. Squeeze lemon on dals & sabzis for iron absorption.
          </p>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="px-5 mb-4">
        <div className="flex gap-1.5 bg-white rounded-2xl p-1.5 shadow-sm">
          {MEAL_SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex-1 py-2 rounded-xl text-[11px] font-bold capitalize transition-all active:scale-95 ${
                activeSection === section
                  ? "bg-[#2d5a3d] text-white shadow-sm"
                  : "text-gray-400"
              }`}
            >
              {sectionLabel[section]}
            </button>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="px-5 pb-10">
        {fatLossOnly && visibleCount === 0 ? (
          <div className="text-center py-14">
            <p className="text-4xl mb-3">🥗</p>
            <p className="text-gray-500 text-sm font-semibold">
              No fat-loss options here
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Try a different meal time or turn off the filter.
            </p>
          </div>
        ) : (
          meals.map((meal, idx) => (
            <MealCard
              key={idx}
              meal={meal}
              fatLossOnly={fatLossOnly}
              onTap={setSelectedMeal}
            />
          ))
        )}

        {/* Legend */}
        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Guide
          </p>
          <div className="flex flex-col gap-2.5">
            {(
              Object.entries(tagConfig) as [MealTag, (typeof tagConfig)[MealTag]][]
            ).map(([tag, cfg]) => (
              <div key={tag} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
                <span className={`text-xs font-bold ${cfg.color}`}>
                  {cfg.label}
                </span>
                <span className="text-xs text-gray-400">
                  {tag === "fat-loss" && "— light, calorie-conscious pick"}
                  {tag === "recovery" && "— nutritious but heavier"}
                  {tag === "treat" && "— indulge occasionally"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hydration tip */}
        <div className="mt-3 bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="text-xl">💧</span>
          <p className="text-xs text-blue-700">
            Aim for <span className="font-bold">2.5–3 litres</span> of water today.
            Swap aerated drinks for buttermilk, coconut water, or lime soda.
          </p>
        </div>
      </div>

      {/* Order Bottom Sheet */}
      <MealBottomSheet
        mealName={selectedMeal}
        onClose={() => setSelectedMeal(null)}
      />
    </div>
  );
}
