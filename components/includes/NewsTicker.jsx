"use client";

const NewsTicker = () => {
  const label = (
    <span className="tw-shrink-0 tw-inline-flex tw-items-center tw-gap-1.5 tw-text-[#00f6ff] tw-font-semibold tw-uppercase tw-tracking-wider">
      <span className="tw-w-1.5 tw-h-1.5 tw-rounded-full tw-bg-[#00f6ff] tw-animate-pulse" aria-hidden />
      Flash News
    </span>
  );
  const link = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://adao.ai/?referral=jstack.com"
      className="tw-text-white/90 hover:tw-text-white tw-transition-colors tw-whitespace-nowrap"
    >
      ADAO token is dropping to your Base chain soon! Get ADAO today while it&apos;s on sale!
    </a>
  );
  return (
    <section
      className="tw-w-full tw-bg-[#080612] tw-text-white tw-fixed tw-top-0 tw-z-50 tw-border-b tw-border-white/5"
      aria-label="Flash news"
    >
      <div className="tw-h-9 tw-flex tw-items-center tw-overflow-hidden ticker-fade-edges">
        <div className="ticker-track tw-flex tw-items-center tw-gap-6 tw-py-2 tw-text-sm tw-w-max">
          {label}
          {link}
          <span className="tw-text-white/40 tw-shrink-0">•</span>
          {label}
          {link}
          <span className="tw-text-white/40 tw-shrink-0">•</span>
          {label}
          {link}
        </div>
      </div>
    </section>
  );
};

export default NewsTicker;
