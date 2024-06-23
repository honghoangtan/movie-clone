import express from 'express';
import { Register, Login, Logout } from '../controllers/user.js'; // Đảm bảo đường dẫn này đúng

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

export default router;
