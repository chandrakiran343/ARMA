const router = require("express").Router();
const controller = require("../../../services/forum/controller");
const facultyController = require("../../../services/faculty/controller");
router.get("/getForums", controller.getForumsList);

router.get("/getFaculty",facultyController.getFacultyList);

module.exports = router;
