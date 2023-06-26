import formatPhoneNumber from "./formatPhNum";

const handleInput = (element) => {
  const setInput = (val) => {
    const formattedValue = formatPhoneNumber(val) || "";
    const selectionStart = element.selectionStart || 0;
  
    element.value = formattedValue;
  
    // Determine the caret position based on the formatted value
    let caretPosition = selectionStart + (formattedValue?.length - (val ? val.length : 0));
  
    if (caretPosition > 0 && (formattedValue[caretPosition - 1] === '-' || formattedValue[caretPosition - 1] === ' ' || formattedValue[caretPosition - 1] === ')')) {
      caretPosition--;
    }
    else if ( formattedValue?.length > 0 && formattedValue[caretPosition] === '-' || formattedValue[caretPosition] === ' ' || formattedValue[caretPosition] === ')') {
      caretPosition++;
    }
  
    if (formattedValue.length <= 3 && caretPosition < 0) {
      caretPosition = 0;
    }
    if (formattedValue.length > 3 && caretPosition === 0) {
      caretPosition = 1;
    }
  
    element.setSelectionRange(caretPosition, caretPosition);
  };

  element.addEventListener('input', (e) => setInput(e?.target?.value));
  
}

export default handleInput;
