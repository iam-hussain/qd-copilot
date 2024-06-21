import { messages } from './messages';

export const createValidationErrorResponse = (
  validation: string,
  messageKey: keyof typeof messages,
  code: string = 'custom'
) => ({
  code: 400,
  issues: [
    {
      validation,
      code,
      message: messages[messageKey],
      path: [],
    },
  ],
  name: 'ZodError',
});

export const createManyValidationErrorResponse = (
  items: {
    validation: string;
    messageKey: keyof typeof messages;
    code?: string;
  }[]
) => ({
  code: 400,
  issues: items.map(({ validation, messageKey, code }) => ({
    validation,
    code: code || 'custom',
    message: messages[messageKey],
    path: [],
  })),
  name: 'ZodError',
});

export const setUnexpectedFormError = (
  setError: (
    name: string,
    error: {
      type: string;
      message: string;
    },
    options?: {
      shouldFocus: boolean;
    }
  ) => void
) => {
  const errorData = {
    type: 'manual',
    message: messages.unexpected,
  };
  setError('root', errorData);
  return errorData;
};

export const setFormValidationErrors = (
  error: any,
  setError: (
    name: string,
    error: {
      type: string;
      message: string;
    },
    options?: {
      shouldFocus: boolean;
    }
  ) => void
) => {
  const { name, issues } = error || {};
  if (name === 'ZodError') {
    const items = (issues || []) as {
      validation: string;
      message: string;
      code: string;
    }[];
    items.forEach((e) => {
      setError(
        e.validation,
        {
          type: e.code,
          message: e.message,
        },
        {
          shouldFocus: items.length === 1,
        }
      );
    });
    return items;
  } else {
    return [setUnexpectedFormError(setError)];
  }
};
