"use client"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from "next/image";
import { FaAnglesDown, FaAnglesRight } from "react-icons/fa6";
import striptags from 'striptags';

const TabSection = ({challenges, domain}) => {
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
				<div className="vf-button mt-3 text-end">
					<a href={`https://www.contrib.com/crypto/challenge/create?framework=challenge&domain=`+domain} className="btn btn-dark rounded-pill tw-bg-[#111] btn-lg" target="_blank">
						<span className="ripple3"><FaAnglesRight />&nbsp; Start Now</span>
					</a>	
				</div>
			</Tab>
			<Tab eventKey="sponsorChallenge" title={<span className="headingNavTitle"><span>Sponsor Challenge</span> <span><FaAnglesDown /></span></span>}>
				<h3 className="mb-3">
					Sponsor Challenge
				</h3>
				<div className="list-group">
					{challenges.data.challenges.map((challenge) => (
						<div className="list-group-item list-group-item-action d-flex gap-3" key={challenge.ChallengeId}>
							<Image src="https://cdn.vnoc.com/icons/check-2.png" alt=">>" className="rounded-circle flex-shrink-0" width="32" height="32" />
							<div className="d-flex gap-2 w-100 justify-content-between">
								<div>
									<h6 className="mb-0">{challenge.ChallengeTitle}</h6>
									<p className="mb-0 opacity-75">{striptags(challenge.ChallengeDesc, [], '\n', true).replace(/<\/?[^>]+(>|$)/g, '').replace(/&nbsp;/g, ' ')}</p>
								</div>
								<small className="mt-2 text-nowrap">
									<a href={`https://www.contrib.com/challenge/details/`+challenge.ChallengeId+`/`+challenge.Slug} className="btn rounded-pill tw-bg-[#222!important] tw-text-[#fff!important] tw-p-[.35em_.65em!important] btn-small-view" target="_blank"> View Challenge </a>
								</small>
							</div>
						</div>
					))}
				</div>
			</Tab>
  </Tabs>
  )
}

export default TabSection