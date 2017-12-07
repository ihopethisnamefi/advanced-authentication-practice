import express from "express";
import {signUp,signIn,getUsers} from "../controllers/AuthenticationController";
import passport from "passport";
import "../services/passport";

const router = express.Router();
const signinStrategy = passport.authenticate("signinStrategy", { session: false });

router.post("/api/signup",signUp );
router.post("/api/signin", signinStrategy, signIn);
router.get("/api/getusers",getUsers );


export default router;
