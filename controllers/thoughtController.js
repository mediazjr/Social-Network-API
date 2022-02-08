const { Thought, User } = require('../models');

module.exports = {
// find all 
    getAllThoughts(req, res) {
    Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
// find one 
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
// create
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
            return User.findOneAndUpdate(
            {username:req.body.username},
            {$push:{thoughts:thought._id}},{new:true}
        )
    })
            .then((user) => res.json(user))
            .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
// delete
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(() => res.json({ message: 'Thought has been deleted' }))
            .catch((err) => res.status(500).json(err));
    },
// update

}