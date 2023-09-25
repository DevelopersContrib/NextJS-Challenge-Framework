

const Footer = ({domain}) => {
  return (
    <footer className="tw-bg-black tw-p-8 text-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            Copyright {new Date().getFullYear()}. {domain[0].toUpperCase() + domain.substring(1)}
          </div>
          <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank">
            Build
          </a>
        </span>{' '}
        <span>·</span>
        <span>{' '}
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank">
            Invest
          </a>
        </span>{' '}
        <span>·</span>
        <span>{' '}
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank">
            Manage
          </a>
        </span>
        <span>·</span>
        <span>{' '}
          <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} rel="noopener" target="_blank">
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