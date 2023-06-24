import { handleInput } from "./handleInput";
import formatPhoneNumber from "./formatPhNum";

jest.mock("./formatPhNum", () => jest.fn());

describe("handleInput", () => {
  let inputElement;

  beforeEach(() => {
    inputElement = document.createElement("input");
    formatPhoneNumber.mockClear();
  });

  test("should format phone number when input value changes", () => {
    const phoneNumber = "1234567890";
    formatPhoneNumber.mockReturnValue("123-456-7890");
    handleInput(inputElement);

    inputElement.value = phoneNumber;
    inputElement.dispatchEvent(new Event("input"));

    expect(formatPhoneNumber).toHaveBeenCalledWith(phoneNumber);
    expect(inputElement.value).toBe("123-456-7890");
  });

  test("should update input value when formatting fails", () => {
    const phoneNumber = "1234567890";
    formatPhoneNumber.mockReturnValue(null);
    handleInput(inputElement);

    inputElement.value = phoneNumber;
    inputElement.dispatchEvent(new Event("input"));

    expect(formatPhoneNumber).toHaveBeenCalledWith(phoneNumber);
    expect(inputElement.value).toBe("");
  });
});
