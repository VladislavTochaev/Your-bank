import './Button.scss'
import classNames from 'classnames'

export default (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    /*
    * '' (default) | 'transparent'
    * */
    mode = '',
    label,
    isLabelHidden = false,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
    </Component>
  )
}