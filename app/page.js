"use client"
import Navigation from "@/components/includes/Navigation"
import Footer from "@/components/includes/Footer"
import Image from "next/image"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaAnglesDown, FaCircleArrowRight } from "react-icons/fa6";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <section
        className='header-bg xl:tw-min-h-screen tw-bg-cover tw-bg-bottom tw-relative tw-text-white tw-pb-24'
      >
        <Navigation />
        <div className="container tw-flex tw-min-h-[calc(100vh-40px-6rem)] tw-items-center">
          <div className="row">
            <div className="col-xl-12 tw-flex tw-flex-col tw-text-center">
              <h1 className="tw-font-bold tw-text-white sm:tw-text-5xl xl:tw-text-7xl tw-mb-6">
                <span className="tw-text-[#cdcdcd]">Hey you!</span> Join and help us build the next challenge platform
              </h1>
              <h4 className="mb-4">
                Build your own hackathon/challenge or game, explore challenges, learn new tech, and play to win cash and prizes!
              </h4>
              <div>
                <a href="" className="btn btn-dark rounded-pill tw-bg-[#111] btn-lg">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 tw-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className="text-center tw-text-5xl mb-5 tw-font-bold">
                Play With <span className="tw-relative text-ripple tw-font-extrabold">511</span> Players
              </h1>
            </div>
            <div className="col-xl-12">
              <h2 className="text-center mb-5">Top Challenge Sites</h2>
            </div>
          </div>
          <div className="row tw-justify-center">
            <div className="col-xl-10">
              <div className="row gy-3">
                <div className="col-xl-4">
                  <a href="#" className="tw-block tw-py-[0.85rem] tw-mb-5 tw-shadow-[0px_0px_3px_#b4b5b7] tw-relative tw-rounded-lg tw-no-underline">
                    <div className="tw-p-[.85rem_.85rem_.55rem]">
                      <Image
                        src="https://cdn.vnoc.com/logos/logo-MyChallenge-1.png"
                        width={0}
                        height={60}
                        alt=""
                        sizes="100vw"
                        className="Image-fluid tw-w-full"
                      />
                    </div>
                    <div className="tw-capitalize tw-text-center tw-text-2xl tw-bg-[#f6f7f9] tw-my-2 tw-p-3 tw-text-[#222]">mychallenge.com</div>
                    <div className="row">
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">Leads</span>
                      </div>
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">1261</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4">
                  <a href="#" className="tw-block tw-py-[0.85rem] tw-mb-5 tw-shadow-[0px_0px_3px_#b4b5b7] tw-relative tw-rounded-lg tw-no-underline">
                    <div className="tw-p-[.85rem_.85rem_.55rem]">
                      <Image
                        src="https://cdn.vnoc.com/logos/logo-MyChallenge-1.png"
                        width={0}
                        height={60}
                        alt=""
                        sizes="100vw"
                        className="Image-fluid tw-w-full"
                      />
                    </div>
                    <div className="tw-capitalize tw-text-center tw-text-2xl tw-bg-[#f6f7f9] tw-my-2 tw-p-3 tw-text-[#222]">mychallenge.com</div>
                    <div className="row">
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">Leads</span>
                      </div>
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">1261</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4">
                  <a href="#" className="tw-block tw-py-[0.85rem] tw-mb-5 tw-shadow-[0px_0px_3px_#b4b5b7] tw-relative tw-rounded-lg tw-no-underline">
                    <div className="tw-p-[.85rem_.85rem_.55rem]">
                      <Image
                        src="https://cdn.vnoc.com/logos/logo-MyChallenge-1.png"
                        width={0}
                        height={60}
                        alt=""
                        sizes="100vw"
                        className="Image-fluid tw-w-full"
                      />
                    </div>
                    <div className="tw-capitalize tw-text-center tw-text-2xl tw-bg-[#f6f7f9] tw-my-2 tw-p-3 tw-text-[#222]">mychallenge.com</div>
                    <div className="row">
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">Leads</span>
                      </div>
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">1261</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4">
                  <a href="#" className="tw-block tw-py-[0.85rem] tw-mb-5 tw-shadow-[0px_0px_3px_#b4b5b7] tw-relative tw-rounded-lg tw-no-underline">
                    <div className="tw-p-[.85rem_.85rem_.55rem]">
                      <Image
                        src="https://cdn.vnoc.com/logos/logo-MyChallenge-1.png"
                        width={0}
                        height={60}
                        alt=""
                        sizes="100vw"
                        className="Image-fluid tw-w-full"
                      />
                    </div>
                    <div className="tw-capitalize tw-text-center tw-text-2xl tw-bg-[#f6f7f9] tw-my-2 tw-p-3 tw-text-[#222]">mychallenge.com</div>
                    <div className="row">
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">Leads</span>
                      </div>
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">1261</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4">
                  <a href="#" className="tw-block tw-py-[0.85rem] tw-mb-5 tw-shadow-[0px_0px_3px_#b4b5b7] tw-relative tw-rounded-lg tw-no-underline">
                    <div className="tw-p-[.85rem_.85rem_.55rem]">
                      <Image
                        src="https://cdn.vnoc.com/logos/logo-MyChallenge-1.png"
                        width={0}
                        height={60}
                        alt=""
                        sizes="100vw"
                        className="Image-fluid tw-w-full"
                      />
                    </div>
                    <div className="tw-capitalize tw-text-center tw-text-2xl tw-bg-[#f6f7f9] tw-my-2 tw-p-3 tw-text-[#222]">mychallenge.com</div>
                    <div className="row">
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">Leads</span>
                      </div>
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">1261</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4">
                  <a href="#" className="tw-block tw-py-[0.85rem] tw-mb-5 tw-shadow-[0px_0px_3px_#b4b5b7] tw-relative tw-rounded-lg tw-no-underline">
                    <div className="tw-p-[.85rem_.85rem_.55rem]">
                      <Image
                        src="https://cdn.vnoc.com/logos/logo-MyChallenge-1.png"
                        width={0}
                        height={60}
                        alt=""
                        sizes="100vw"
                        className="Image-fluid tw-w-full"
                      />
                    </div>
                    <div className="tw-capitalize tw-text-center tw-text-2xl tw-bg-[#f6f7f9] tw-my-2 tw-p-3 tw-text-[#222]">mychallenge.com</div>
                    <div className="row">
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">Leads</span>
                      </div>
                      <div className="col-sm-6 text-center">
                        <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">1261</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
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
                  Sponsor &amp; Create Fun<br />
                  Blockchain Challenges
                </h2>
              </div>
              <div className="col-xl-12 tw-text-center">
                <h2 className="tw-font-bold">
                  <span className="tw-font-extrabold">647</span> Challenges Sponsored Amounting To <span className="tw-font-extrabold">$7280</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 lg:tw-pt-0 tw-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="challenge-section-tabs">
                <Tabs
                  defaultActiveKey="createChallenge"
                  id="challengeList"
                  className="mb-3 challengeTabNav tw-justify-center"
                >
                  <Tab eventKey="createChallenge" title={<span className="headingNavTitle"><span>Create Challenge</span> <span><FaAnglesDown /></span></span>}>
                    <h3 className="mb-3">
                      Create Your Challenge
                    </h3>
                    <div className="list-group">
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/number-one1.png" alt="1" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Challenge Main</h6>
                            <p className="mb-0 opacity-75">Information</p>
                          </div>
                          <small className="mt-2 text-nowrap"> Name Your Challenge | Category </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/number-two1.png" alt="2" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Challenge Page</h6>
                            <p className="mb-0 opacity-75">Design</p>
                          </div>
                          <small className="mt-2 text-nowrap"> Challenge Overview | Backgrounds </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/number-three1.png" alt="3" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Blockchain</h6>
                            <p className="mb-0 opacity-75">Settings</p>
                          </div>
                          <small className="mt-2 text-nowrap"> Blockchain | Equity Points </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/number-four1.png" alt="4" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Timeline</h6>
                            <p className="mb-0 opacity-75">Announcement</p>
                          </div>
                          <small className="mt-2 text-nowrap"> Submission &amp; Judging Period </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/number-five1.png" alt="5" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Prizes &amp; </h6>
                            <p className="mb-0 opacity-75">Criteria</p>
                          </div>
                          <small className="mt-2 text-nowrap"> Prizes Description &amp; Criteria </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/number-six1.png" alt="6" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Challenge</h6>
                            <p className="mb-0 opacity-75">Type</p>
                          </div>
                          <small className="mt-2 text-nowrap"> Onboarding | Quiz Related </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/number-seven1.png" alt="7" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Challenge</h6>
                            <p className="mb-0 opacity-75">Content</p>
                          </div>
                          <small className="mt-2 text-nowrap"> Submit Challenge | Agreement </small>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="sponsorChallenge" title={<span className="headingNavTitle"><span>Sponsor Challenge</span> <span><FaAnglesDown /></span></span>}>
                    <h3 className="mb-3">
                      Sponsor Challenge
                    </h3>
                    <div className="list-group">
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Fanchallenge.com</h6>
                            <p className="mb-0 opacity-75">FanChallenge is a blockchain-based game that allows fans to compete against each other in a variety of challenges related to their favorite sports teams and athletes. Players earn rewards in the form of digital tokens by participating in challenges and climbing the leaderboard with your favorite profile.</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/497/fanchallenge-com" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">REGISTER AND WATCH Contrib WEBINAR CHALLENGE</h6>
                            <p className="mb-0 opacity-75">Signup for a Contrib account. Register and Secure an Event pass to Watch Webinar on&nbsp; Contribution Side Hustle for Free Blockchain Tokens. Take a screenshot of the Invite and the Webinar Video you’re watching. GET CTB tokens</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/424/register-and-watch-contrib-webinar-challenge" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div className="tw-break-all">
                            <h6 className="mb-0">Realtydao Install and Connect Challenge</h6>
                            <p className="mb-0 opacity-75">Sign up for a Realtydao account.&nbsp;To Sign Up follow these steps. click on the link below https://realtydao.freshdesk.com/support/solutions/articles/67000341350-how-can-i-sign-up-Install Metamask and Connect -&nbsp;&nbsp;Finally, click the link below to follow the steps on how to connect to Binance Smartchain&nbsp;https://realtydao.freshdesk.com/support/solutions/articles/67000680269-how-to-connect-to-binance-smart-chain&nbsp;</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/422/realtydao-install-and-connect-challenge" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">CONTRIB INSTALL AND CONNECT CHALLENGE</h6>
                            <p className="mb-0 opacity-75">Signup for a Contrib account. Install Metamask and Connect wallet to your Contrib account Take a screenshot. GET CTB tokens</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/421/contrib-install-and-connect-challenge" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Help Us Create The First Contributor Produced Webinar</h6>
                            <p className="mb-0 opacity-75">These are the contributor slots. You can choose which of these contributor scripts you will be producing in your video.</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/408/help-us-create-the-first-contributor-produced-webinar" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Diva Singer Challenge</h6>
                            <p className="mb-0 opacity-75">This is a challenge to all aspiring Divas.</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/407/diva-singer-challenge" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Groupie Challenge</h6>
                            <p className="mb-0 opacity-75">In this GROUPIE CHALLENGE , we're looking to become the ultimate groupie! You will need to get a bunch of views on your youtube channel, join contrib team, and then marry someone who is on that team. We've got tips on all of these things in out Groupie Challenge Guide below.</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/406/groupie-challenge" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">CHALLENGE YOUR IDEA</h6>
                            <p className="mb-0 opacity-75">&nbsp;Use your creativity and critical thinking to solve a challenge set by us. You’ll be assigned to a team in advance and by the end of the year, you’ll present a short video pitch and show us how you’d solve your own idea challenge.</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/405/challenge-your-idea" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Tiktok Challenge</h6>
                            <p className="mb-0 opacity-75">Create a Tiktok video challenge for Contrib and send us your best Tiktok video using the Contrib platform.Be as unique, provocative as Tiktokers go!The winner will win cash and CTB tokens!</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/403/tiktok-challenge" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action d-flex gap-3">
                        <Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">Best Christmas decor - with recycling theme</h6>
                            <p className="mb-0 opacity-75">Create a Christmas décor based on recycled materials&nbsp;</p>
                          </div>
                          <small className="mt-2 text-nowrap">
                            <a href="https://www.contrib.com/challenge/details/400/best-christmas-decor---with-recycling-theme" className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
                          </small>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 tw-bg-[#fafafa]">
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
                    <span className="tw-bg-[#555] tw-rounded-[50%] tw-inline-flex tw-items-center tw-justify-center tw-text-white tw-h-[40px] tw-w-[40px]">1</span>
                    <br /> Join Fun <div className="bg-linear-dark"> Blockchain Challenges <br />&amp; Win </div> Tokens 
                    <a className="tw-block tw-text-black tw-text-4xl" href="https://www.contrib.com/marketplace/challenges" target="_blank">
                      <span><BsArrowRightCircle/></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="tw-text-2xl tw-font-semibold tw-mb-12">
                    <span className="tw-bg-[#555] tw-rounded-[50%] tw-inline-flex tw-items-center tw-justify-center tw-text-white tw-h-[40px] tw-w-[40px]">2</span>
                    <br /> Join The <div className="bg-linear-dark"> Contrib Community <br />&amp; Complete Tasks </div> For Tokens 
                    <a className="tw-block tw-text-black tw-text-4xl" href="https://www.contrib.com/marketplace/microtasks" target="_blank">
                      <span><BsArrowRightCircle/></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="tw-text-2xl tw-font-semibold tw-mb-12">
                    <span className="tw-bg-[#555] tw-rounded-[50%] tw-inline-flex tw-items-center tw-justify-center tw-text-white tw-h-[40px] tw-w-[40px]">3</span>
                    <br /> Mine <div className="bg-linear-dark"> Tokens To Earn <br />&amp; More At </div> Realtydao
                    <a className="tw-block tw-text-black tw-text-4xl" href="https://realtydao.com/earnrdao" target="_blank">
                      <span><BsArrowRightCircle/></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
