import BannerSection from "@/components/BannerSection";
import Footer from "@/components/includes/Footer";
import HeaderWidget from "@/components/includes/HeaderWidget";
import Navigation from "@/components/includes/Navigation";
import NewsTicker from "@/components/includes/NewsTicker";
import TabSection from "@/components/includes/TabSection";
import Notification from "@/components/notification/Notification";
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
      <NewsTicker />
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <section className="header-bg tw-w-full tw-mt-9 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-relative tw-text-white tw-pb-24 tw-min-h-screen tw-flex tw-flex-col tw-items-center">
        <Navigation />
        <BannerSection />
      </section>
      <CtaAdaoSection />
      <section className="tw-py-24 sm:tw-py-32 tw-bg-[#0f0e17] tw-text-white bg-grid-subtle" id="play-section">
        <div className="container tw-relative">
          <div className="row tw-justify-center">
            <div className="col-xl-12 tw-text-center tw-mb-14">
              <div className="tw-inline-flex tw-flex-col tw-items-center tw-gap-3 tw-mb-8">
                <span className="tw-text-7xl sm:tw-text-8xl tw-font-extrabold tw-tracking-tighter tw-text-white tw-relative text-ripple tw-drop-shadow-lg">
                  511
                </span>
                <span className="tw-text-xl sm:tw-text-2xl tw-text-white/70 tw-font-medium">
                  Players · Join the network
                </span>
              </div>
              <h2 className="section-heading tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-white tw-pb-4">
                Top Challenge Sites
              </h2>
            </div>
            <div className="col-xl-12">
              <TopChallengeSites
                top_challenge_domains={top_challenge_domains}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-20 lg:tw-py-28 tw-bg-[#0f0e17] tw-text-white" aria-labelledby="sponsor-stats-heading">
        <div className="container">
          <div className="row tw-gap-6 tw-justify-center">
            <div className="col-12 col-lg-4">
              <div className="tw-h-full tw-p-8 tw-rounded-2xl tw-bg-white/5 tw-border tw-border-white/10 tw-text-center tw-transition-all hover:tw-bg-white/10 hover:tw-border-white/20">
                <p className="tw-text-[#00f6ff] tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wider tw-mb-3">Sponsor &amp; Create</p>
                <h2 id="sponsor-stats-heading" className="tw-text-xl sm:tw-text-2xl tw-font-bold tw-tracking-tight tw-leading-snug">
                  Fun Blockchain Challenges
                </h2>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="tw-h-full tw-p-8 tw-rounded-2xl tw-bg-white/5 tw-border tw-border-white/10 tw-text-center tw-transition-all hover:tw-bg-white/10 hover:tw-border-white/20">
                <p className="tw-text-white/70 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wider tw-mb-2">Challenges sponsored</p>
                <p className="tw-text-4xl sm:tw-text-5xl tw-font-extrabold tw-text-white tw-tracking-tight">{count}</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="tw-h-full tw-p-8 tw-rounded-2xl tw-bg-white/5 tw-border tw-border-white/10 tw-text-center tw-transition-all hover:tw-bg-white/10 hover:tw-border-white/20">
                <p className="tw-text-white/70 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wider tw-mb-2">Total amount</p>
                <p className="tw-text-4xl sm:tw-text-5xl tw-font-extrabold tw-text-[#00f6ff] tw-tracking-tight">${amount}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 sm:tw-py-28 tw-bg-[#0f0e17] tw-text-white bg-grid-subtle" id="sponsor-section">
        <div className="container">
          <div className="row tw-justify-center">
            <div className="col-xl-10">
              <div className="tw-text-center tw-mb-14">
                <p className="tw-text-[#00f6ff] tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wider tw-mb-3">
                  Challenges
                </p>
                <h2 className="section-heading tw-text-2xl sm:tw-text-4xl tw-font-bold tw-text-white tw-pb-4">
                  Create or sponsor a challenge
                </h2>
                <p className="tw-text-white/70 tw-max-w-xl tw-mx-auto tw-mt-4 tw-leading-relaxed">
                  Set up your own challenge in a few steps, or explore and sponsor existing ones.
                </p>
              </div>
              <div className="challenge-section-tabs challenge-section-tabs-dark tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-relative tw-ring-1 tw-ring-white/10 hover:tw-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] tw-transition-shadow tw-duration-300">
                <span className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-1 tw-bg-gradient-to-r tw-from-indigo-500 tw-to-violet-500 tw-rounded-t-2xl" aria-hidden />
                <TabSection challenges={latest_challenge} domain={domain} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 sm:tw-py-32 tw-bg-[#0f0e17] tw-text-white tw-relative tw-overflow-hidden bg-grid-subtle" id="earn-section">
        <div className="container tw-relative tw-z-10">
          <div className="row">
            <div className="col-xl-12 tw-text-center tw-mb-16">
              <h2 className="section-heading tw-text-2xl sm:tw-text-4xl tw-font-bold tw-text-white tw-pb-4">
                3 Ways To Earn Tokens
              </h2>
              <p className="tw-text-white/70 tw-max-w-xl tw-mx-auto tw-mt-4">
                Compete, complete tasks, or mine — pick your path to earn.
              </p>
            </div>
            <div className="col-xl-12">
              <div className="row justify-content-center tw-gap-6 lg:tw-gap-8">
                <div className="col-md-4">
                  <a
                    href="https://www.contrib.com/marketplace/challenges"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="earn-card tw-block tw-group tw-h-full tw-p-8 tw-rounded-2xl tw-bg-white/5 tw-border tw-border-white/10 tw-shadow-sm hover:tw-shadow-xl hover:tw-bg-white/10 hover:tw-border-indigo-400/50 tw-transition-all tw-duration-300 tw-text-center tw-relative tw-overflow-hidden"
                  >
                    <span className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-1 tw-bg-gradient-to-r tw-from-indigo-500 tw-to-violet-500 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-rounded-t-2xl" />
                    <span className="tw-inline-flex tw-items-center tw-justify-center tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-indigo-500/20 tw-text-indigo-300 tw-font-bold tw-text-xl tw-mb-5 group-hover:tw-bg-indigo-500 group-hover:tw-text-white tw-transition-all tw-duration-300">
                      1
                    </span>
                    <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-2 tw-tracking-tight">
                      Join Fun Blockchain Challenges
                    </h3>
                    <p className="tw-text-white/70 tw-mb-5 tw-text-sm">Compete &amp; win tokens</p>
                    <span className="tw-inline-flex tw-items-center tw-gap-2 tw-text-indigo-300 tw-font-semibold group-hover:tw-gap-3 tw-transition-all">
                      Explore <BsArrowRightCircle className="tw-w-5 tw-h-5" />
                    </span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="https://www.contrib.com/marketplace/microtasks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="earn-card tw-block tw-group tw-h-full tw-p-8 tw-rounded-2xl tw-bg-white/5 tw-border tw-border-white/10 tw-shadow-sm hover:tw-shadow-xl hover:tw-bg-white/10 hover:tw-border-purple-400/50 tw-transition-all tw-duration-300 tw-text-center tw-relative tw-overflow-hidden"
                  >
                    <span className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-1 tw-bg-gradient-to-r tw-from-purple-500 tw-to-fuchsia-500 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-rounded-t-2xl" />
                    <span className="tw-inline-flex tw-items-center tw-justify-center tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-purple-500/20 tw-text-purple-300 tw-font-bold tw-text-xl tw-mb-5 group-hover:tw-bg-purple-500 group-hover:tw-text-white tw-transition-all tw-duration-300">
                      2
                    </span>
                    <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-2 tw-tracking-tight">
                      Contrib Community &amp; Tasks
                    </h3>
                    <p className="tw-text-white/70 tw-mb-5 tw-text-sm">Complete microtasks for tokens</p>
                    <span className="tw-inline-flex tw-items-center tw-gap-2 tw-text-purple-300 tw-font-semibold group-hover:tw-gap-3 tw-transition-all">
                      Explore <BsArrowRightCircle className="tw-w-5 tw-h-5" />
                    </span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="https://realtydao.com/earnrdao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="earn-card tw-block tw-group tw-h-full tw-p-8 tw-rounded-2xl tw-bg-white/5 tw-border tw-border-white/10 tw-shadow-sm hover:tw-shadow-xl hover:tw-bg-white/10 hover:tw-border-amber-400/50 tw-transition-all tw-duration-300 tw-text-center tw-relative tw-overflow-hidden"
                  >
                    <span className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-1 tw-bg-gradient-to-r tw-from-amber-500 tw-to-orange-500 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-rounded-t-2xl" />
                    <span className="tw-inline-flex tw-items-center tw-justify-center tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-amber-500/20 tw-text-amber-300 tw-font-bold tw-text-xl tw-mb-5 group-hover:tw-bg-amber-500 group-hover:tw-text-white tw-transition-all tw-duration-300">
                      3
                    </span>
                    <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-2 tw-tracking-tight">
                      Mine &amp; Earn at Realtydao
                    </h3>
                    <p className="tw-text-white/70 tw-mb-5 tw-text-sm">Tokens and more</p>
                    <span className="tw-inline-flex tw-items-center tw-gap-2 tw-text-amber-300 tw-font-semibold group-hover:tw-gap-3 tw-transition-all">
                      Explore <BsArrowRightCircle className="tw-w-5 tw-h-5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-bg-[#0f0e17]">
        <BlogList theme="white" />
      </section>
      <Notification />
      <Footer domain={domain} />
    </>
  );
}
