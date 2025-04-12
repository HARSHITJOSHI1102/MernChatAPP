import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signup = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        // hash passwords
        if (password.length < 6) {
            return res.status(400).json({ message: "Password Must Be At Least 6 Characters" });
        }

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: "Email already exists" })

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
    }
    catch (error) { }

}

export const login = (req, res) => {
    res.send("login route");
}

export const logout = (req, res) => {
    res.send("logout route");
}