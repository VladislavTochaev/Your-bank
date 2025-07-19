import './Icon.scss'
import {Icon as MinistaIcon} from 'minista'
import classNames from 'classnames'

export default (props) => {
  const {
    className,
    name,
    hasFill = false,
  } = props

  return (
    <span
      className={classNames(className, 'icon')}
    >
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}