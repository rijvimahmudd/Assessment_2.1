import formatPhoneNumber from './formatPhNum'
import { handleInput } from './handleInput'
import './style.css'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <div class="container text-center">
        <input type="tel" name="" id="phone" maxlength="16" placeholder="mobile number" autocomplete="off">
        <div><label for="phone">(123) 456-7890</label></div>
    </div>
`



// setupCounter(document.querySelector('#phone'))

handleInput(document.querySelector('#phone'))
