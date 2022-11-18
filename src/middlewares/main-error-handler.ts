import { ErrorRequestHandler } from "express";

export const mainErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let status = err.status ?? 500;
    let errorBody = {
        message: err.message ?? err,
        code: err.code ?? null,
        data: err.data ?? null
    };
    // logger.error(errorBody)
    console.log('<ERROR>')
    console.log(errorBody)
    console.log('</ERROR>')
    res.status(status).json(errorBody);
};
