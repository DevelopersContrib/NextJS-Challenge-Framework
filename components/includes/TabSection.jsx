"use client"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from "next/image";
import { FaAnglesDown } from "react-icons/fa6";

const TabSection = () => {
  return (
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
  )
}

export default TabSection