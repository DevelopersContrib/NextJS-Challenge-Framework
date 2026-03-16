"use client";
import Link from "next/link";

const BannerSection = () => {
  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute("name");
    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container tw-w-full tw-flex tw-min-h-0 tw-flex-1 tw-items-center tw-justify-center tw-relative tw-z-10">
      <div className="row tw-justify-center tw-w-full tw-mx-0">
        <div className="col-xl-10 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center">
          <span className="tw-inline-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-full tw-bg-white/10 tw-backdrop-blur-md tw-border tw-border-white/20 tw-text-[#00f6ff] tw-font-semibold tw-tracking-wider tw-uppercase tw-text-xs tw-mb-6">
            <span className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-[#00f6ff] tw-animate-pulse" aria-hidden />
            Challenge platform
          </span>
          <h1 className="hero-title tw-font-extrabold tw-text-white tw-leading-[1.15] tw-tracking-tight tw-mb-6 sm:tw-text-5xl md:tw-text-6xl lg:tw-text-7xl xl:tw-text-8xl">
            <span className="tw-text-white">Hey you!</span>
            <br className="tw-hidden sm:tw-block" />
            <span className="tw-text-white">Build the next</span>
            <br className="tw-hidden sm:tw-block" />
            <span className="tw-text-white">challenge platform</span>
          </h1>
          <p className="tw-text-base sm:tw-text-lg tw-text-white/80 tw-max-w-xl tw-mb-10 tw-leading-relaxed tw-text-center">
            Run hackathons & challenges, explore games, learn tech, and win cash and prizes.
          </p>
          <div className="tw-flex tw-flex-wrap tw-gap-4 tw-justify-center">
            <Link
              href="#sponsor-section"
              onClick={handleClick}
              name="sponsor-section"
              className="tw-inline-flex tw-items-center tw-gap-2 tw-px-8 tw-py-4 tw-rounded-full tw-bg-white tw-text-[#0c0a14] tw-font-semibold tw-shadow-xl hover:tw-shadow-2xl hover:tw-scale-105 tw-transition-all tw-duration-300"
            >
              Get Started
            </Link>
            <Link
              href="#play-section"
              onClick={handleClick}
              name="play-section"
              className="tw-inline-flex tw-items-center tw-gap-2 tw-px-8 tw-py-4 tw-rounded-full tw-bg-white/10 tw-backdrop-blur-md tw-border tw-border-white/30 tw-text-white tw-font-semibold hover:tw-bg-white/20 hover:tw-border-white/50 tw-transition-all tw-duration-300"
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
