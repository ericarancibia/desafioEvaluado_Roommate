import { addRoommateQuery, getRoommatesQuery } from "../models/roommate.model.js"


export const getRoommates = async (req, res) => {
    try {
        const roommates = await getRoommatesQuery();
        return res.status(200).json({ roommates });
    } catch (error) {
        console.error("Error al procesar los archivos:", error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
}

export const addRoommate = async (req, res) => {
    try {
        const roommate = await addRoommateQuery()
        return res.status(201).json(roommate)
    } catch (error) {
        console.error("Error al procesar los archivos:", error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

