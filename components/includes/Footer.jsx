

const Footer = ({domain}) => {
  return (
    <footer className="tw-bg-[#0f0e17] tw-pt-10 tw-pb-8 tw-px-8 tw-border-t tw-border-white/10 tw-text-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 tw-text-center tw-text-white/90">
            Copyright {new Date().getFullYear()}. {domain[0].toUpperCase() + domain.substring(1)}
          </div>
          <div className="tw-mt-3 tw-flex tw-justify-center tw-gap-1 tw-text-center tw-text-sm tw-text-white/60">
        <span>
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank" className="tw-text-[#00f6ff] hover:tw-text-[#00f6ff]/80 tw-transition-colors">
            Build
          </a>
        </span>{' '}
        <span>·</span>
        <span>{' '}
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank" className="tw-text-[#00f6ff] hover:tw-text-[#00f6ff]/80 tw-transition-colors">
            Invest
          </a>
        </span>{' '}
        <span>·</span>
        <span>{' '}
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank" className="tw-text-[#00f6ff] hover:tw-text-[#00f6ff]/80 tw-transition-colors">
            Manage
          </a>
        </span>
        <span>·</span>
        <span>{' '}
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank" className="tw-text-[#00f6ff] hover:tw-text-[#00f6ff]/80 tw-transition-colors">
            Monetize
          </a>
        </span>
      </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer