const express = require('express');
const validate = require('express-validation');
const roleController = require('../controller/roles');
const {authorize} = require("../middleware/authorization.middlware");
const {
    postRoleBodySchema,
    editRoleBodySchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /roles
router.get('/', authorize, roleController.getAllRoles)

// POST => /roles
router.post('/', authorize, validate(postRoleBodySchema), roleController.postRole);

// PUT => /roles/id
router.put('/:id', authorize, validate(editRoleBodySchema), roleController.editRole);

// DELETE => /roles/id
router.delete('/:id', authorize, roleController.deleteRole);


module.exports = router;