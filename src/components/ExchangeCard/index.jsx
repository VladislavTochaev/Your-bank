import './ExchangeCard.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    countryIcon,
    abbreviationCurrency,
    currency,
    value,
  } = props

  return (
    <div className={classNames(className, 'exchange-card')}>
      <div className="exchange-card__info">
        <div className="exchange-card__country">
          <Icon
            className="exchange-card__icon"
            name={countryIcon}
            hasFill
          />
          <span className="exchange-card__abbreviation">
            {abbreviationCurrency}
          </span>
        </div>
        <div className="exchange-card__currency">{currency}</div>
      </div>
      <div className="exchange-card__value">{value}</div>
    </div>
  )
}