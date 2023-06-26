import handleInput from "./handleInput";
import formatPhoneNumber from "./formatPhNum";

jest.mock("./formatPhNum");

describe("handleInput", () => {
  let element;

  beforeEach(() => {
    // Create a dummy input element
    element = document.createElement("input");
    element.value = "";
    element.selectionStart = 0;
    element.setSelectionRange = jest.fn();
    handleInput(element);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set the formatted value when input event is triggered", () => {
    const value = "1234567890";
    const formattedValue = "(123) 456-7890";
    formatPhoneNumber.mockReturnValue(formattedValue);

    element.value = value;
    element.dispatchEvent(new Event("input"));

    expect(element.value).toBe(formattedValue);
  });

  it("should set the caret position correctly", () => {
    const value = "1234567890";
    const formattedValue = "(123) 456-7890";
    formatPhoneNumber.mockReturnValue(formattedValue);
    const caretPosition = 14;

    element.value = value;
    element.dispatchEvent(new Event("input"));

    expect(element.setSelectionRange).toHaveBeenCalledWith(caretPosition, caretPosition);
  });

  it("should handle the caret position correctly when value length is less than or equal to 3", () => {
    const value = "123";
    const formattedValue = "123";
    formatPhoneNumber.mockReturnValue(formattedValue);
    const caretPosition = 3;

    element.value = value;
    element.dispatchEvent(new Event("input"));

    expect(element.setSelectionRange).toHaveBeenCalledWith(caretPosition, caretPosition);
  });

  it("should handle the caret position correctly when value length is greater than 3", () => {
    const value = "123456";
    const formattedValue = "(123) 456";
    formatPhoneNumber.mockReturnValue(formattedValue);
    const caretPosition = 9;

    element.value = value;
    element.dispatchEvent(new Event("input"));

    expect(element.setSelectionRange).toHaveBeenCalledWith(caretPosition, caretPosition);
  });
});
