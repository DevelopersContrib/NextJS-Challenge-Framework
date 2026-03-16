import Image from "next/image"

const TopChallengeSites = ({ top_challenge_domains }) => {
  return (
    <div className="top-challenge-sites-grid">
      {top_challenge_domains.data.top_challenge_sites.map((challenge_site) => (
        <div key={challenge_site.site}>
          <a
            href={`https://www.contrib.com/brand/details/` + challenge_site.site}
            className="tw-group tw-relative tw-block tw-h-full tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-overflow-hidden tw-no-underline tw-transition-all tw-duration-300 hover:tw-border-[#00f6ff]/40 hover:tw-bg-white/10 hover:tw-shadow-xl hover:tw-shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] hover:tw-scale-[1.02] tw-text-inherit"
          >
            <span className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-0.5 tw-bg-gradient-to-r tw-from-transparent tw-via-[#00f6ff]/60 tw-to-transparent tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300" aria-hidden />
            <div className="tw-p-6 tw-pt-7">
              <div className="tw-mb-5 tw-flex tw-min-h-[64px] tw-items-center tw-justify-center tw-rounded-xl tw-bg-white/5 tw-p-4 group-hover:tw-bg-white/10 tw-transition-colors tw-duration-300">
                {challenge_site.logo ? (
                  <Image
                    src={challenge_site.logo}
                    width={0}
                    height={64}
                    alt={challenge_site.site}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="tw-max-h-14 tw-w-auto tw-object-contain"
                  />
                ) : (
                  <span className="tw-text-center tw-text-lg tw-font-bold tw-leading-tight tw-text-white/90 tw-capitalize tw-line-clamp-2 tw-px-2">
                    {challenge_site.site}
                  </span>
                )}
              </div>
              <h3 className="tw-mb-5 tw-text-center tw-text-lg tw-font-bold tw-leading-tight tw-text-white tw-capitalize tw-line-clamp-2 group-hover:tw-text-white">
                {challenge_site.site}
              </h3>
              <div className="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-rounded-xl tw-bg-white/5 tw-py-3.5 tw-px-5 group-hover:tw-bg-white/10 tw-transition-colors tw-duration-300">
                <span className="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-wider tw-text-white/50">
                  Leads
                </span>
                <span className="tw-text-2xl sm:tw-text-3xl tw-font-extrabold tw-tracking-tight tw-tabular-nums tw-text-[#00f6ff]">
                  {challenge_site.leads}
                </span>
              </div>
              <p className="tw-mt-4 tw-text-center tw-text-xs tw-font-medium tw-uppercase tw-tracking-wider tw-text-white/40 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300">
                View site →
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
export default TopChallengeSites