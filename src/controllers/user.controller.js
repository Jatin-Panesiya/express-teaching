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
        const data = req.body;
        if (!data.username || !data.password) {
            return res.status(400).json({ message: "username and password are required!" })
        }
        await user.create(data)
        res.status(201).json({ message: "User created !" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Error while creating user" })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            res.status(400).json({ message: "User not found! please provide user id" })
            return
        }
        // await user.deleteMany()
        await user.deleteOne({ _id: userId })
        res.status(201).json({ message: "User deleted !" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Error while creating user" })
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;

        if (!data) {
            res.status(400).json({ message: "No data to update" })
            return
        }

        if (!userId) {
            res.status(400).json({ message: "User not found!" })
            return
        }

        await user.updateOne({ _id: userId }, data)
        res.status(201).json({ message: "User updated !" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Error while creating user" })
    }
}

