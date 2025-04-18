import BannerSection from "@/components/BannerSection";
import Footer from "@/components/includes/Footer";
import HeaderWidget from "@/components/includes/HeaderWidget";
import Navigation from "@/components/includes/Navigation";
import TabSection from "@/components/includes/TabSection";
import TopChallengeSites from "@/components/TopChallengeSites";
import BlogList from "@/modules/blog/BlogList";
import { BsArrowRightCircle } from "react-icons/bs";
import {
  getData,
  getDomain,
  getLatestChallenges,
  getSponsorDetails,
  getTopChallengeSites
} from "../lib/data";
import CtaAdaoSection from "./home/CtaAdaoSection";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const top_challenge_domains = await getTopChallengeSites();
  const sponsor_count = await getSponsorDetails();
  const latest_challenge = await getLatestChallenges();

  const {
    data: { sponsor_details }
  } = sponsor_count;
  const { count, amount } = sponsor_details[0];

  return (
    <>
      <section className="tw-w-full tw-bg-[#1A122A] tw-text-white tw-fixed tw-top-0 tw-z-50">
        <div className="container tw-overflow-hidden tw-items-center tw-flex">
          <marquee
          
            direction="left"
            height="33px"
            className="tw-text-sm tw-flex tw-gap-2 tw-items-center"
          >
            <span className="tw-inline-flex tw-text-[#00f6ff] tw-mr-2">
              Flash News!
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="tw-text-white/90 hover:tw-text-white tw-transition-colors tw-inline-flex tw-items-center blink"
              href="https://adao.ai/?referral=jstack.com"
            >
              ADAO token is dropping to your Base chain soon! Get ADAO today
              while it&apos;s on sale!
            </a>
          </marquee>
        </div>
      </section>
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <section className="header-bg  tw-w-full tw-mt-[78px] tw-bg-cover tw-bg-bottom tw-relative tw-text-white tw-pb-24">
        <Navigation />
        <BannerSection />
      </section>
      <CtaAdaoSection />
      <section className="tw-py-24 tw-bg-white" id="play-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className="text-center tw-text-5xl mb-5 tw-font-bold">
                Play With{" "}
                <span className="tw-relative text-ripple tw-font-extrabold">
                  511
                </span>{" "}
                Players
              </h1>
            </div>
            <div className="col-xl-12">
              <h2 className="text-center mb-5">Top Challenge Sites</h2>
            </div>
          </div>
          <div className="row tw-justify-center">
            <div className="col-xl-10">
              <TopChallengeSites
                top_challenge_domains={top_challenge_domains}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:tw-pb-24 tw-bg-white tw-text-white">
        <div className="bg-wave tw-py-24 lg:tw-py-48">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 tw-text-center">
                <h2 className="tw-text-4xl tw-mb-8">
                  Sponsor &amp; Create Fun
                  <br />
                  Blockchain Challenges
                </h2>
              </div>
              <div className="col-xl-12 tw-text-center">
                <h2 className="tw-font-bold">
                  <span className="tw-font-extrabold">{count}</span> Challenges
                  Sponsored Amounting To{" "}
                  <span className="tw-font-extrabold">${amount}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 lg:tw-pt-0 tw-bg-white" id="sponsor-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="challenge-section-tabs">
                <TabSection challenges={latest_challenge} domain={domain} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 tw-bg-[#fafafa]" id="earn-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="mb-5 text-center tw-font-semibold">
                3 Ways To Earn Tokens
              </h2>
            </div>
            <div className="col-xl-12">
              <div className="row justify-content-center text-center">
                <div className="col-md-3">
                  <div className="tw-text-2xl tw-font-semibold tw-mb-12">
                    <span className="tw-bg-[#555] tw-rounded-[50%] tw-inline-flex tw-items-center tw-justify-center tw-text-white tw-h-[40px] tw-w-[40px]">
                      1
                    </span>
                    <br /> Join Fun{" "}
                    <div className="bg-linear-dark">
                      {" "}
                      Blockchain Challenges <br />
                      &amp; Win{" "}
                    </div>{" "}
                    Tokens
                    <a
                      className="tw-block tw-text-black tw-text-4xl"
                      href="https://www.contrib.com/marketplace/challenges"
                      target="_blank"
                    >
                      <span>
                        <BsArrowRightCircle />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="tw-text-2xl tw-font-semibold tw-mb-12">
                    <span className="tw-bg-[#555] tw-rounded-[50%] tw-inline-flex tw-items-center tw-justify-center tw-text-white tw-h-[40px] tw-w-[40px]">
                      2
                    </span>
                    <br /> Join The{" "}
                    <div className="bg-linear-dark">
                      {" "}
                      Contrib Community <br />
                      &amp; Complete Tasks{" "}
                    </div>{" "}
                    For Tokens
                    <a
                      className="tw-block tw-text-black tw-text-4xl"
                      href="https://www.contrib.com/marketplace/microtasks"
                      target="_blank"
                    >
                      <span>
                        <BsArrowRightCircle />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="tw-text-2xl tw-font-semibold tw-mb-12">
                    <span className="tw-bg-[#555] tw-rounded-[50%] tw-inline-flex tw-items-center tw-justify-center tw-text-white tw-h-[40px] tw-w-[40px]">
                      3
                    </span>
                    <br /> Mine{" "}
                    <div className="bg-linear-dark">
                      {" "}
                      Tokens To Earn <br />
                      &amp; More At{" "}
                    </div>{" "}
                    Realtydao
                    <a
                      className="tw-block tw-text-black tw-text-4xl"
                      href="https://realtydao.com/earnrdao"
                      target="_blank"
                    >
                      <span>
                        <BsArrowRightCircle />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogList />
      <Footer domain={domain} />
    </>
  );
}
