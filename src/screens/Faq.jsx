import React from 'react'
import {Row, Col} from 'reactstrap'

import style from '../styles/faq.module.css'

export default () => (
  <section>
    <Row>
      <Col sm="6">
        <h3 className={style.question}>What is this?</h3>
        <p className={style.answer}>The short story is that Chase doesn't want to be sued in a class action thingy. I made this form to make it as easy as possible to send a letter to opt-out.</p>
        <p className={style.answer}>For the long story, here's one of many links <a href="https://www.latimes.com/business/lazarus/la-fi-lazarus-chase-rigged-arbitration-system-20190607-story.html" target="_blank" rel="noopener noreferrer">LA Times: Chase's Rigged Arbitration System</a></p>
        <h3 className={style.question}>What do I do?</h3>
        <p className={style.answer}>Fill out this form (name, address, and account numbers), print it, sign it with a real pen, and mail it to the address at the top of the letter. You can even cut out the address and tape it on your letter. You do you. Just gotta find an envelope and stamp. They sell them at grocery stores and pharmacies.</p>
      </Col>
      <Col sm="6">
        <h3 className={style.question}>You're not going to steal my info, right?</h3>
        <p className={style.answer}>There's no backend. This thing is hosted on github pages. It's open source. You can see the code, that I'm not collecting any data.</p>
        <p className={style.answer}>I do have google analytics hooked up because I wanna know how many people are visiting. Just visits, I promise, check the code.</p>
        <h3 className={style.question}>Do I really have to snail mail?</h3>
        <p className={style.answer}>Yeah, it's Chase's rules. They suck, but fill this out, send it in, get your $0.55 revenge?</p>
      </Col>
    </Row>
  </section>
)
