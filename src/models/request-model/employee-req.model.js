import Joi from "joi";

const getEmployeeHierarchyReq = Joi.object().keys({
    id: Joi.number().integer().required()
});

const getEmployeeHierarchyReqBatch = Joi.object().keys({
    id: Joi.number().integer().required(),
    batchSize: Joi.number().integer().required(),
    currentPage: Joi.number().integer().required(),
});

export default {
    getEmployeeHierarchyReq,
    getEmployeeHierarchyReqBatch,
}