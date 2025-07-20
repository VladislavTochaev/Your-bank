import './TransactionCard.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    label,
  } = props

  return (
    <div
      className={classNames(className, 'transaction-card')}
    >
      <div className="transaction-card__body">
        <Icon
          className="transaction-card__icon"
          name="transaction"
          hasFill
        />
        <div className="transaction-card__info">
          <span className="transaction-card__subtitle">Transaction</span>
          <span className="transaction-card__person">{label}</span>
        </div>
      </div>
      <span className="transition-card__price">-$68.00</span>
    </div>
  )
}