import { RequestHandler } from "express";

const { validationResult } = require("express-validator")

/**
 * Validates the route bases on the rules passed to the route. Uses Express Validator package to do so
 * @param rules
 */
export const validateRequest = (rules: RequestHandler[]): RequestHandler[] => [...rules, validator];

const validator: RequestHandler = (req, res, next) => {
    const result = validationResult(req);
    result.isEmpty() ? next() : next({ status: 422, message: result.errors });
};
