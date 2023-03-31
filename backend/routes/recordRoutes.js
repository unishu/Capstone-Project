const express = require('express');

const router = express.Router();
const controllers = require("../controllers");
const {protect} = require("../middleware/authMiddleware");
const {getRecord} = require("../controllers/recordController")



//protected route to get all records
router.route("/").get(protect, getRecord); 

router.get('/', (req, res) => {
    controllers.recordController.getRecord(req, res);
}); 


//protected route to get record by id
router.post('/add/:petid', protect, function (req, res) {
    controllers.recordController.addRecord(req, res);
});

router.post('/add/:petid', (req, res)=> {
    controllers.recordController.addRecord(req, res);
});


//protected route to add record by id
router.post('/add/:petid',  protect, function (req, res) {
    controllers.recordController.addRecord(req, res);
});

router.post('/add/:petid',  (req, res) => {
    controllers.recordController.addRecord(req, res);
});


//protected route to get record by id
router.get('/:id', protect, function (req, res) {
    controllers.recordController.getRecordById(req, res)
})

router.get('/:id', (req, res) => {
    controllers.recordController.getRecordById(req, res)
})


//protected route to update record by id
router.put('/:id', (req, res) => {
    controllers.recordController.updateRecord(req, res)
})

//protect route to delete record
router.delete('/:id', protect, function (req, res)  {
    controllers.recordController.deleteRecord(req, res)
})

router.delete('/:id', (req, res) => {
    controllers.recordController.deleteRecord(req, res)
})


router.get("/search/:key",  protect, function (req, res) {
    controllers.recordController.searchRecord(req, res)
})

/*router.post('/', (req, res) => {
    const fileName= Date.now() + " " + req.files.upload.name;
    const file = req.files.upload;
    let uploadPath =  "./uploads/" + fileName;
    file.mv(uploadPath, (err) => {
        if (err) {
            return res.send(err);
        }
    });
    res.status(200)
});  */

module.exports = router