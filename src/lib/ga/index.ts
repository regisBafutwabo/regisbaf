export default class Tracking {
  static isProduction() {
    const mode = process.env.NEXT_PUBLIC_MODE?.toUpperCase();
    return mode === 'PRODUCTION';
  }
  static pageView = (url: string) => {
    if (!Tracking.isProduction()) {
      return;
    }
    if (window) {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    }
  };

  // log specific events happening.
  static event = ({ action, params }: { action: string; params: Record<string, unknown> }) => {
    if (!Tracking.isProduction()) {
      return;
    }
    if (window) {
      window.gtag('event', action, params);
    }
  };
}
