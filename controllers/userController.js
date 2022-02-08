const { User } = require("../models");

module.exports = {
    // find all
    getAllUsers(req, res) {
        User.find()
            .populate('thoughts')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
// find one
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
// create
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
// delete
    deleteUser(req,res) {
        User.findOneAndDelete({_id: req.params.userId})
            .then(() => res.json({ message: 'User has been deleted'}))
            .catch((err) => res.status(500).json(err))
    },
// update



}