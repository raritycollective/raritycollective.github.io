export interface DayHours {
  label: string;
  /** 0 (Sunday) - 6 (Saturday), matching Date#getDay() */
  dayOfWeek: number;
  /** 24-hour "HH:mm", or null if closed all day */
  open: string | null;
  close: string | null;
}

// The shop is physically in Garden Grove, CA - always compute "open now"
// against this timezone regardless of the visitor's own location.
export const SHOP_TIMEZONE = "America/Los_Angeles";

export const hoursOfOperation: DayHours[] = [
  { label: "Mon", dayOfWeek: 1, open: null, close: null },
  { label: "Tue", dayOfWeek: 2, open: "09:00", close: "13:00" },
  { label: "Wed", dayOfWeek: 3, open: "09:00", close: "18:00" },
  { label: "Thu", dayOfWeek: 4, open: "09:00", close: "18:00" },
  { label: "Fri", dayOfWeek: 5, open: "09:00", close: "18:00" },
  { label: "Sat", dayOfWeek: 6, open: "08:00", close: "14:00" },
  { label: "Sun", dayOfWeek: 0, open: null, close: null },
];

const formatHour = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour12}:00 ${period}` : `${hour12}:${String(m).padStart(2, "0")} ${period}`;
};

export const formatHoursRange = (day: DayHours) =>
  day.open && day.close ? `${formatHour(day.open)} - ${formatHour(day.close)}` : "Closed";

const shopNowParts = (now: Date) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SHOP_TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekdayShort = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const weekdayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekdayShort);

  return { dayOfWeek: weekdayIndex, minutesSinceMidnight: hour * 60 + minute };
};

const toMinutes = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

export interface ShopStatus {
  isOpen: boolean;
  today: DayHours;
}

export const getShopStatus = (now: Date = new Date()): ShopStatus => {
  const { dayOfWeek, minutesSinceMidnight } = shopNowParts(now);
  const today = hoursOfOperation.find((d) => d.dayOfWeek === dayOfWeek)!;

  const isOpen =
    today.open !== null &&
    today.close !== null &&
    minutesSinceMidnight >= toMinutes(today.open) &&
    minutesSinceMidnight < toMinutes(today.close);

  return { isOpen, today };
};
