import type { OpeningPeriod, Weekday } from "@/data/business";

const dayLabels: Record<Weekday, string> = {
  Monday: "seg",
  Tuesday: "ter",
  Wednesday: "qua",
  Thursday: "qui",
  Friday: "sex",
  Saturday: "sáb",
  Sunday: "dom",
};

export function formatPeriod(period: OpeningPeriod) {
  const days = period.days.map((day) => dayLabels[day]).join(", ");
  return `${days}: ${period.opens} às ${period.closes}`;
}
