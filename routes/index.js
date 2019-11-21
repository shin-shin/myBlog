const express = require('express')
const router = express.Router()
//move model require to controllers
const indexCtrl = require("../controllers/index")


router.get("/", indexCtrl.index) ;

module.exports = router;