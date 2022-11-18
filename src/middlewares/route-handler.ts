import { RequestHandler } from "express";

/**
 * Handles all the errors that the route might throw (syntax errors, wrong variable names, exceptions from external libraries)
 * If no errors, proceeds to route handler
 * If any errors, returns error, does not break the server
 * @param requestHandler
 */
export const handleRoute = (requestHandler: RequestHandler) => (req, res, next) => Promise.resolve(requestHandler(req, res, next)).catch(next);


