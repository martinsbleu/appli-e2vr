module.exports = (app) => {
    const users = require('../controllers/users.controller.js');
    let router = require("express").Router();
    //                                          Creation of a new User
    router.post('/', users.create);

    //                                          Update an User
    router.put('/:userId', users.update);

    //                                          Delete an User
    router.delete('/:userId', users.delete);

    //                                          Find an User
    router.get('/:userId', users.findOne);

    //                                          Find all Users
    router.get('/', users.findAll);

    app.use('/api/users', router);
};
