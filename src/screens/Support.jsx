import React from 'react'

import printStyles from '../styles/print.module.css'

export default () => (
  <section className={printStyles.hidden}>
    <p>Appreciate? Support:</p>
    <p>
      Donate with paypal:
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="7KU3N8KPUMY7W" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </p>
    <p>Or maybe sign up for more Chase cards with my referral?</p>
    <a href="https://www.referyourchasecard.com/18a/624JNIE109" target="_blank" rel="noopener noreferrer">Freedom Unlimited (3% in first year)</a>
    <a href="https://www.referyourchasecard.com/2/VCFXJ2B13P" target="_blank" rel="noopener noreferrer">Freedom (5% categories)</a>
  </section>
)
