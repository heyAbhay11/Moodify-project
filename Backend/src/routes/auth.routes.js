const { Router } = require("express")
const authController = require("../controllers/auth.controller")
const router = Router();
const authMiddelwares = require("../middelwares/auth.middelware")


router.post("/register", authController.registerUser)

router.post("/login", authController.loginUser)

router.get("/get-me",authMiddelwares.authUser,authController.getMe)

router.get("/logout",authController.logoutUser)

module.exports = router;