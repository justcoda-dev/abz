import Joi from "joi";
// Schema
export const textInputSchema = Joi.string().min(2).max(60).required()
export const emailInputSchema = Joi.string().min(5).required()
export const phoneInputSchema = Joi.string().min(13).max(13).required()
// Validation
export const inputValidate = (value, schema) => {
    if (schema.validate(value).error) {
        const [details] = schema.validate(value).error.details
        return details.message
    }
    return ""
};