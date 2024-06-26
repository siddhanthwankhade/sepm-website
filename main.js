import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/logo.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="html/page1.html" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <div class="card">
    <a href="html/page1.html">
    <button class="button-85"> Publish your ad here </button>
    </a>
    </div>
    <h1>......</h1>
    <h1>Empowering local businesses with dynamic digital advertising</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      For any enquiries. Contact us at sid@yash@rohit@aditi
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
