import React from 'react'

const Footer = () => (
  <section id="footer">
    <div className="first">
      <a onClick={() => window.open('https://www.linkedin.com/in/ferdiansyah-ferdi-68a1a2175')}>Linkedin</a>
      <a onClick={() => window.open('https://github.com/ferdiansyah0611')}>Github</a>
    </div>
    <div className="second">
      <p href="/">Build With React JS</p>
    </div>
  </section>
)

export default Footer