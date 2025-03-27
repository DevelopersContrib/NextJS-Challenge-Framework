"use client";
import Link from "next/link";

const BannerSection = () => {
  const handleClick = (e) => {
    const id = e.target.name;

    const targetDiv = document.getElementById(id);
    console.log(targetDiv);
    if (targetDiv) {
      targetDiv.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="container tw-flex tw-min-h-[calc(75vh)] tw-items-center">
      <div className="row">
        
        <div className="col-xl-12 tw-flex tw-flex-col tw-text-center">
          <h1 className="tw-font-bold tw-text-white sm:tw-text-5xl xl:tw-text-7xl tw-mb-6">
            <span className="tw-text-[#cdcdcd]">Hey you!</span> Join and help us
            build the next challenge platform
          </h1>
          <h4 className="mb-4">
            Build your own hackathon/challenge or game, explore challenges,
            learn new tech, and play to win cash and prizes!
          </h4>
          <div>
            <Link
              href="#sponsor-section"
              onClick={handleClick}
              className="btn btn-dark rounded-pill tw-bg-[#111] btn-lg"
              name="sponsor-section"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
