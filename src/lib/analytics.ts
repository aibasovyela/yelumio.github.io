type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  ym?: (id: number, method: string, target: string, params?: Record<string, unknown>) => void;
  fbq?: (...args: unknown[]) => void;
};

const YM_COUNTER_ID = 0;

export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.gtag?.("event", eventName, params);
  if (YM_COUNTER_ID) analyticsWindow.ym?.(YM_COUNTER_ID, "reachGoal", eventName, params);
  analyticsWindow.fbq?.("trackCustom", eventName, params);
};

export const trackSectionView = (sectionId: string, eventName: string) => {
  if (typeof window === "undefined") return;
  const el = document.getElementById(sectionId);
  if (!el) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        trackEvent(eventName);
        observer.disconnect();
      }
    },
    { threshold: 0.45 }
  );
  observer.observe(el);
};
