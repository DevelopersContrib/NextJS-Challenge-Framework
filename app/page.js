import Navigation from "@/components/includes/Navigation"
import Footer from "@/components/includes/Footer"
import TabSection from "@/components/includes/TabSection"
import Image from "next/image"
import { BsArrowRightCircle } from "react-icons/bs";
import { getDomain } from '../lib/data';

export default async function Home() {
  const domain = getDomain();

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
                <TabSection />
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
      <Footer domain={domain} />
    </>
  )
}
