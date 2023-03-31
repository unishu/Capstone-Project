var express = require("express");
const controllers = require("../controllers");
var router = express.Router();
const {protect} = require("../middleware/authMiddleware")




//homepage
router.get ('/', (req, res) => {
    controllers.userController.getUsers(req, res);
   
});


//register new user
router.post('/register', (req, res) => {
    //res.send('<h1> user Data is posted </h1>');
    controllers.userController.createUser(req, res)
})

//login
router.post('/login', (req, res) => {
    controllers.userController.getUser(req, res)
})


//get user by Id
router.get('/:id', (req, res) => {
    controllers.userController.getUserById(req, res)
})

//delete user by Id
router.delete('/:id', (req, res) => {
    controllers.userController.deleteUser(req, res)
})

//update user via Id
router.put('/update/:id',protect, function (req, res) {
    controllers.userController.updateUser(req, res)
})



/*
//Login
router.post("/account/login", (req, res) => {

})

//register pet
router.post('/', controllers.userController.addUser);

//delete pet
router.delete('/:id', controllers.userController.deleteUser);

//update pet data
router.put('/update', controllers.userController.updateUser);

//get pet by id or other params
router.get('/update/:id', controllers.userController.getUserById);

//get list of pets
router.get('/yourpets', controllers.userController.getUsers);

*/


module.exports = router;