import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import StoreContext from '../contexts/Store'
import style from '../styles/print.module.css'

export default () => {
  const { name, address1, address2, city, state, zip, accountNumbers} = useContext(StoreContext)

  return (
    <div>
      <label>Mail to:</label>
      <address>
        Chase Customer Service <br />
        P.O. Box 15298 <br />
        Wilmington, DE 19850-5298 <br />
      </address>

      <address>
        {name} <br />
        {address1} <br />
        {address2} { address2 && <br /> }
        {city}, {state} {zip} <br />
      </address>

      <p>Regarding: Rejecting Chase Binding Arbitration Agreement</p>

      <p>To Whom It May Concern:</p>

      <p>Please note that I REJECT the Chase Binding Arbitration Agreement effective August 11, 2019. <br />
      Please confirm receipt of this rejection and annotate my account(s) appropriately.</p>

      <div>Name: {name}</div>
      <div>Account Number(s): {accountNumbers}</div>
      <div>Billing Address: {address1}, {address2}{address2 && ','} {city}, {state}, {zip}</div>
      <div>Signature: <span className={style.hidden}>(Really, really sign here)</span></div>
      <br />
      <br />
      <div>__________________________________________________________________________________</div>
      <div>Thank you for your attention to this matter,</div>
      <div>{name}</div>

      <div className="my-4">
        <Link to="/" className={`btn btn-warning ${style.hidden} mr-2`}>Edit Info</Link>
        <Button onClick={() => window.print()} className={style.hidden}>Print</Button>
      </div>
    </div>
  )
}
