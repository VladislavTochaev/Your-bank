import './Socials.scss'
import classNames from 'classnames'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    links = [],
  } = props

  return (
    <div
      className={classNames(className, 'soc1als')}
    >
      <ul className="soc1als__list">
        {links.map(({ label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              mode=""
              href="/"
              target="_blank"
              label={label}
              iconName={iconName}
              isLabelHidden
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}