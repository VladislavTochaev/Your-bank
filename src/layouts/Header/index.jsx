import './Header.scss'
import Logo from '@/components/Logo'
import classNames from 'classnames'
import BurgerButton from '@/components/BurgerButton'
import Button from '@/components/Button'

export default (props) => {
  const {
    url,
  } = props

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

  return (
    <header
      className="header"
      data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo loading="eager" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({href, label}) => (
                <li
                  className="header__menu-item"
                >
                  <a
                    className={classNames('header__menu-link', {
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
          <div className="header__actions">
            <Button
              className="header__button header__button--transparent"
              label="Sign Up"
              href="/sign-up"
              mode="transparent"
            />
            <Button
              className="header__button"
              label="Login"
              href="/login"
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}