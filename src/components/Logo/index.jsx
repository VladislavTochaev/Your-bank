import './Logo.scss'
import classNames from 'classnames'

export default (props) => {
  const {
    className,
    loading = 'lazy',
  } = props
  const title = 'Home'

  return (
    <a
      className={classNames(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/logo.svg"
        alt=""
        width={155}
        height={40}
        loading={loading}
      />
    </a>
  )
}