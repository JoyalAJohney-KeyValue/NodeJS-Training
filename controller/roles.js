const Role = require('../models/roles');

exports.getAllRoles = (req, res, next) => {
    
    Role.findAll()
        .then(roles => {
            res.status(200).json({
                message : "Roles retrieved successfully",
                roles
            })
        })
        .catch(err => {
            console.log(err);
            res.status(404).json({
                message : "Roles not found"
            })
        })
}

exports.postRole = (req, resp, next) => {
    const role = req.body.role;

    Role.create({
        role: role
    })
        .then(role => {
            resp.status(200).json({
                message: 'Role created successfully!',
                role
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Role creation failed',
            });
        });
};


exports.editRole = (req, resp, next) => {
    const id = req.params.id;
    const role = req.body.role;

    Role.findByPk(id)
        .then(row => {
            row.role = role;
            return row.save();
        })
        .then(role => {
            resp.status(200).json({
                message: 'Role updated successfully',
                role
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Department updation failed',
            });
        });
};

exports.deleteRole = (req, res, next) => {
    const id = req.params.id;

    Role.findByPk(id)
        .then(role => {
            return role.destroy();
        })
            .then(() => {
                res.status(200).json({
                    message : "Role successfully deleted",
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(404).json({
                    message : "Role Deletion Failed",
                })
            })
}