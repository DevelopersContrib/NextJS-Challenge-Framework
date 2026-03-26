"use client";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const BannerSection = () => {
  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute("name");
    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container tw-w-full tw-flex tw-min-h-0 tw-flex-1 tw-items-center tw-justify-center tw-relative tw-z-10 tw-px-3 sm:tw-px-4">
      <div className="row tw-justify-center tw-w-full tw-mx-0">
        <div className="col-xl-10 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center">
          <span className="tw-inline-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-full tw-bg-white/[0.07] tw-backdrop-blur-md tw-border tw-border-white/[0.14] tw-text-[#7eeeff] tw-font-semibold tw-tracking-[0.12em] tw-uppercase tw-text-[10px] sm:tw-text-xs tw-mb-8 tw-shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
            <span className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-[#00f6ff] tw-animate-pulse tw-shadow-[0_0_12px_rgba(0,246,255,0.6)]" aria-hidden />
            Challenges · hackathons · prizes
          </span>
          <h1 className="hero-title tw-font-extrabold tw-leading-snug sm:tw-leading-[1.12] tw-mb-6 tw-max-w-4xl sm:tw-text-5xl md:tw-text-6xl lg:tw-text-7xl xl:tw-text-8xl">
            <span className="hero-title-lead tw-block">Turn ideas into</span>
            <span className="hero-title-accent tw-block tw-mt-1 sm:tw-mt-2">
              unforgettable challenges
            </span>
          </h1>
          <p className="tw-text-base sm:tw-text-lg tw-text-white/72 tw-max-w-2xl tw-mb-10 tw-leading-relaxed tw-text-center tw-font-normal">
            Spin up hackathons and games, grow your community, and reward winners with cash, tokens, and bragging rights—all in one place.
          </p>
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-flex-wrap tw-gap-3 sm:tw-gap-4 tw-justify-center tw-w-full sm:tw-w-auto">
            <Link
              href="#sponsor-section"
              onClick={handleClick}
              name="sponsor-section"
              className="tw-group tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-px-8 tw-py-3.5 sm:tw-py-4 tw-rounded-full tw-bg-white tw-text-[#0c0a14] tw-font-semibold tw-shadow-lg tw-shadow-black/25 hover:tw-shadow-xl hover:tw-shadow-black/30 hover:-tw-translate-y-0.5 tw-transition-all tw-duration-300 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-cyan-400/80"
            >
              Get started
              <BsArrowRight className="tw-w-[1.15rem] tw-h-[1.15rem] tw-transition-transform group-hover:tw-translate-x-0.5" aria-hidden />
            </Link>
            <Link
              href="#play-section"
              onClick={handleClick}
              name="play-section"
              className="tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-px-8 tw-py-3.5 sm:tw-py-4 tw-rounded-full tw-bg-white/[0.08] tw-backdrop-blur-md tw-border tw-border-white/[0.22] tw-text-white tw-font-semibold hover:tw-bg-white/[0.14] hover:tw-border-white/40 tw-transition-all tw-duration-300 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-white/50"
            >
              Explore challenges
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
