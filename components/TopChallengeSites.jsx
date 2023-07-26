import Image from "next/image"

const TopChallengeSites = ({ top_challenge_domains }) => {
    return (
        <div className="row gy-3">
            {top_challenge_domains.data.top_challenge_sites.map((challenge_site) => (
            <div className="col-xl-4" key={challenge_site.site}>
                <a href={`https://www.contrib.com/brand/details/`+challenge_site.site} className="tw-block tw-py-[0.85rem] tw-mb-5 tw-shadow-[0px_0px_3px_#b4b5b7] tw-relative tw-rounded-lg tw-no-underline">
                    <div className="tw-p-[.85rem_.85rem_.55rem]">
                    <Image
                        src={challenge_site.logo}
                        width={0}
                        height={60}
                        alt=""
                        sizes="100vw"
                        className="Image-fluid tw-w-full"
                    />
                    </div>
                    <div className="tw-capitalize tw-text-center tw-text-2xl tw-bg-[#f6f7f9] tw-my-2 tw-p-3 tw-text-[#222]">{challenge_site.site}</div>
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">Leads</span>
                        </div>
                        <div className="col-sm-6 text-center">
                            <span className="tw-p-[0.85rem] tw-text-[1.25rem] tw-font-semibold tw-uppercase tw-text-[#222222]">{challenge_site.leads}</span>
                        </div>
                    </div>
                </a>
            </div>
             ))}
      </div>
        )
}
export default TopChallengeSites;