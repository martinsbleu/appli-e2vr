const db = require("../models");
const User = db.User;

//                                                  Creation of an user
exports.create = (req, res) => {
    //                                              Validation of request
    if (!req.body.id) {
        res.status(400).send({ message: "Error: Empty field! " });
        return;
    }

    //                                              Creation of an user / All elements is required
    const user = new User({
        id: req.body.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
    });

    //                                              Save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while creating an user. ):"
            });
        });
};

//                                                  Update an user
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Error: Empty field!"
        });
    }

    const id = req.params.userId;

    user.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'Cannot update User with id=${id}. Possible cause: User Not Found. '
                });
            } else res.send({ message: "Updated successfully. " });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id= " + id
            });
        });
};

//                                                  Delete an user
exports.delete = (req, res) => {
    const id = req.params.userId;

    user.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'Cannot delete User with id=${id}. Possible cause: User Not Found. '
                });
            } else {
                res.send({
                    message: "Deleted successfully! "
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id= " + id
            });
        });
};

//                                                  Search an user
exports.findOne = (req, res) => {
    const id = req.params.userId;

    user.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
};

//                                                  Search for all user
exports.findAll = (req, res) => {
    user.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while retrieving User. "
            });
        });
};
