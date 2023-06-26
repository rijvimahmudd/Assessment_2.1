import handleInput from './handleInput'
import './style.css'

document.querySelector('#app').innerHTML = `
    <div class="container text-center">
        <input type="tel" name="" id="phone" maxlength="16" placeholder="mobile number" autocomplete="off">
        <div><label for="phone">(123) 456-7890</label></div>
    </div>
`;

handleInput(document.querySelector('#phone'))
