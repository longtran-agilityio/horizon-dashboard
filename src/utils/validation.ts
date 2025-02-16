import { DateTimeParts } from '@/types/date';

/**
 * Validates that the confirm password matches the original password.
 *
 * @param password - The original password.
 * @param confirmPassword - The confirmation password that needs to match the original password.
 * @param message - Optional custom error message to return if passwords do not match.
 * @returns {string | boolean} - Returns a boolean `true` if passwords match, or a string error message if they don't.
 */

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
  message?: string,
): string | boolean => {
  if (password !== confirmPassword) {
    return message || 'Your confirmation passwords do not match';
  }
  return true;
};

export const validateDates = (
  startDate: DateTimeParts | null,
  dueDate: DateTimeParts | null,
) => {
  if (!startDate || !dueDate) return true;

  const start = new Date(
    `${startDate.year}-${startDate.month}-${startDate.day}`,
  );
  const due = new Date(`${dueDate.year}-${dueDate.month}-${dueDate.day}`);

  return due > start;
};

export const identifierRules = {
  required: 'This field is required',
  minLength: {
    value: 6,
    message: 'User name must be at least 6 characters',
  },
};

export const emailRules = (regexEmail: RegExp) => ({
  required: 'Email is required',
  pattern: {
    value: regexEmail,
    message: 'Invalid email address',
  },
});

export const passwordRules = (regexPassword: RegExp) => ({
  required: 'Password is required',
  pattern: {
    value: regexPassword,
    message: 'Invalid password format',
  },
});
