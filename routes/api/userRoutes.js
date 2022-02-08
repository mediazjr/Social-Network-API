const router = require("express").Router();

const {
    getAllUsers, 
    getSingleUser, 
    createUser, 
    deleteUser, 
    updateUser, 
    addFriend, 
    removeFriend
} = require("../../controllers/userController");

// api/user
router.route("/").get(getAllUsers).post(createUser);

// api/user/:userId 
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;