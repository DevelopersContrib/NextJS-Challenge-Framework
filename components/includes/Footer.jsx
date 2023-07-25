

const Footer = ({domain}) => {
  return (
    <footer className="tw-bg-black tw-p-8 text-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            Copyright {new Date().getFullYear()}. {domain[0].toUpperCase() + domain.substring(1)}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer