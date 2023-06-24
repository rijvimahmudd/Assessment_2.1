import formatPhoneNumber from "./formatPhNum"

export const handleInput = (element) => {

    const setInput = (val) => {    
        element.value = formatPhoneNumber(val);
    }

    element.addEventListener('input', (e) => setInput(e.target.value))
}

// "testEnvironmentOptions": {
//   "html": "<html lang='zh-cmn-Hant'></html>",
//   "url": "https://jestjs.io/",
//   "userAgent": "Agent/007"
// },