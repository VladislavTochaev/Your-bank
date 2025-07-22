import './Hero.scss'
import Button from '@/components/Button'
import TransactionCard from '@/components/TransactionCard'
import Icon from '@/components/Icon'
import ExchangeCard from '@/components/ExchangeCard'

export default () => {
  const titleId = 'hero-title'

  const transactionItems = [
    'Joel Kenley',
    'Mark Smith',
    'Lenen Roy',
  ]

  const exchangeItems = [
    {
      countryIcon: 'india',
      abbreviationCurrency: 'INR',
      currency: 'Indian Rupees',
      value: '5,0000',
    },
    {
      countryIcon: 'usa',
      abbreviationCurrency: 'USD',
      currency: 'United States Dollar',
      value: '12.00',
    },
  ]

  return (
    <section
      className="hero"
      aria-labelledby={titleId}
    >
      <div className="hero__inner container">
        <div className="hero__body">
          <span className="hero__badge">
            <Icon
              className="hero__badge-icon"
              name="check"
              hasFill
            />
            No LLC Required, No Credit Check.
          </span>
          <div className="hero__info">
            <h1
              className="hero__title h2"
              id={titleId}
            >
              Welcome to YourBank <br />
              Empowering Your <span className="hero__title--green">Financial Journey</span>
            </h1>
            <div className="hero__description">
              <p>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
            </div>
          </div>
          <Button
            className="hero__button"
            label="Open Account"
          />
        </div>
        <div className="hero__rate">
          <h2 className="visually-hidden">Our rate</h2>
          <div className="hero__rate-card">
            <div className="hero__rate-body">
              <h3 className="hero__rate-subtitle">Your Transactions</h3>
              <ul className="hero__transactions-list">
                {transactionItems.map((personName, index) => (
                  <li
                    className="hero__transactions-item"
                    key={index}
                  >
                    <TransactionCard
                      className="hero__transactions-card"
                      label={personName}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero__rate-extra">
              <h3 className="hero__rate-subtitle">Money Exchange</h3>
              <ul className="hero__exchange-list">
                {exchangeItems.map((exchangeItem, index) => (
                  <li className="hero__exchange-item">
                    <ExchangeCard
                      className="hero__exchange-card"
                      {...exchangeItem}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="hero__rate-button"
              type="button"
            >
              Exchange
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}