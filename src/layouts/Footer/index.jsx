import './Footer.scss'
import Logo from '@/components/Logo'
import classNames from 'classnames'
import Icon from '@/components/Icon'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/careers',
      label: 'Careers',
    },
    {
      href: '/about',
      label: 'About',
    },
    {
      href: '/security',
      label: 'Security',
    },
  ]

  const connectionLinks = [
    {
      iconName: 'mail',
      label: 'hello@skillbirdge.com',
      href: 'mailto:hello@skillbirdge.com',
    },
    {
      iconName: 'phone',
      label: '+91 91813 23 2309',
      href: 'tel:+9191813232309',
    },
    {
      iconName: 'location',
      label: 'Somewhere in the World',
      href: 'geo:61.915951608005095, 92.453124795473',
    },
  ]

  const extraLinks = []

  return (
    <footer className="footer">
      <div className="footer__body container">
        <Logo className="footer__logo" />
        <nav className="footer__menu">
          <ul className="footer__menu-list">
            {menuItems.map(({ href, label }, index) => (
              <li className="footer__menu-item" key={index}>
                <a
                  className={classNames('footer__menu-link', {
                    'is-active': href === url,
                  })}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer__connection container">
        <ul className="footer__connection-list">
          {connectionLinks.map(({ iconName, label, href }, index) => (
            <li className="footer__connection-item">
              <a
                className="footer__connection-link"
                href={href}
              >
                <Icon
                  className="footer__connection-icon"
                  name={iconName}
                  hasFill
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__extra container"></div>
    </footer>
  )
}