import { user } from "../models/user.model.js"

export const getUsers = async (req, res) => {
    try {
        const resposne = await user.find()
        res.status(201).json({ users: resposne })
    } catch (error) {
        res.status(500).json({ message: error.message || "Error while getting user" })
    }
}

export const createUser = async (req, res) => {
    try {
        await user.create({ username: "Paras", password: "456" })
        res.status(201).json({ message: "User created !" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Error while creating user" })
    }
}