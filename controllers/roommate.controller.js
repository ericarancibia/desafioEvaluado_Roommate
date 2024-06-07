import { modelRoommate } from "../models/roommate.model.js"

const getRoommates = async (req, res) => {
    try {
        const roommates = await modelRoommate.getRoommatesQuery()
        return res.status(200).json({ roommates })
    } catch (error) {
        console.error("Error al procesar los archivos:", error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

const addRoommate = async (req, res) => {
    try {
        const roommate = await modelRoommate.addRoommateQuery()
        return res.status(201).json(roommate)
    } catch (error) {
        console.error("Error al procesar los archivos:", error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

export const controllerRoommate = {
    getRoommates,
    addRoommate
}