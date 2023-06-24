import formatPhoneNumber from "./formatPhNum";

describe('formatPhoneNumber', () => {
    it('should format a valid phone number', () => {
      const phoneInput = '2223480032';
      expect(formatPhoneNumber(phoneInput)).toBe('(222) 348-0032');
    });
  
    // Other test cases...
  
    it('should update the input value with the formatted number', () => {
      const phoneInput = '1234567890';
      expect(formatPhoneNumber(phoneInput)).toBe('(123) 456-7890');
    });
  });