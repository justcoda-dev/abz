import Joi from 'joi';
// Schema
export const textInputSchema = Joi.string().min(2).max(60).required();
export const emailInputSchema = Joi.string().email({ tlds: { allow: false } });
export const phoneInputSchema = Joi.string()
  .regex(/^\+380\d{3}\d{2}\d{2}\d{2}$/)
  .min(13)
  .max(13)
  .messages({
    'string.pattern.base': `Phone number must have 13 digits, and start with +380.`,
  })
  .required();
// Validation
export const inputValidate = (value, schema) => {
  if (schema?.validate(value)?.error) {
    const [details] = schema.validate(value).error.details;
    return details.message;
  }
  return '';
};
