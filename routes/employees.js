const express = require('express');
const validate = require('express-validation');
const empController = require('../controller/employees');
const {authorize} = require("../middleware/authorization.middlware");
const {
    idParamsSchema,
    postEmployeeBodySchema,
    editEmployeeBodySchema,
    postEmployeeDepartmentBodySchema,
    postEmployeeRoleBodySchema,
    postEmployeeAddressSchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /employees
router.get('/', authorize, empController.getAllEmployees);
// router.get('/', empController.getAllEmployees);

// GET => /employees/id
router.get('/:id', authorize, validate(idParamsSchema), empController.getEmployee);

// POST => /employees
// router.post('/', authorize, validate(postEmployeeBodySchema), empController.postEmployee);
router.post('/', validate(postEmployeeBodySchema), empController.postEmployee);

// PUT => /employees/id
router.put('/:id', validate(editEmployeeBodySchema), empController.editEmployee);

// DELETE => /employees/id
router.delete('/:id', empController.deleteEmployee);

// GET => /employees/id/departments
router.get('/:id/departments', empController.getEmployeeDepartments);

// POST => /employees/id/departments
router.post('/:id/departments', validate(postEmployeeDepartmentBodySchema), empController.postEmployeeDepartment);


// POST => /employees/id/roles
router.post('/:id/roles', authorize, validate(postEmployeeRoleBodySchema), empController.postEmployeeRole);

// POST => /employees/id/address
router.post('/:id/address', authorize, validate(postEmployeeAddressSchema), empController.postEmployeeAddress)

// PUT => /employees/id/address
router.put('/:id/address', authorize, validate(postEmployeeAddressSchema), empController.editEmployeeAddress)


module.exports = router;
