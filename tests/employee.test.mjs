// const request = require('supertest');
// const app = require('../app.js');

import request from "supertest";
import app from "../app.js";

describe('Employee API', () => {
  it('should return employee hierarchy', async () => {
    const res = await request(app).get('/api/employee/hierarchy?id=1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('responseData');
    expect(res.body).toHaveProperty('responseMessage');

    const { responseData, responseMessage } = res.body;

    expect(responseMessage).toBe('Showing employee heirarchy.');

    const checkChildren = (employee) => {
      expect(employee).toHaveProperty('id');
      expect(employee).toHaveProperty('name');
      expect(employee).toHaveProperty('positionId');
      expect(employee).toHaveProperty('positionName');
      expect(employee).toHaveProperty('parentId');
      expect(employee).toHaveProperty('children');
      employee.children.forEach(child => checkChildren(child));
    };

    responseData.forEach(employee => checkChildren(employee));
  });
});
