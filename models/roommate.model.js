import axios from 'axios'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { v4 as uuidv4 } from "uuid"

const _dirname = import.meta.dirname

const filePathRoommates = path.join(_dirname, "../data/roommates.json")

const urlApi = "https://randomuser.me/api"

export const addRoommateQuery = async (req, res) => {
    try {
        const data = await axios.get(urlApi)
        const userData = data.data.results[0]
        const usuario = {
            id: uuidv4().slice(0, 5),
            nombre: `${userData.name.first} ${userData.name.last}`,
            email: `${userData.email}`,
            debe: 0,
            recibe: 0
        }
        const preview = await readFile(filePathRoommates, "utf8")
        const roommates = preview.trim() ? JSON.parse(preview) : []
        roommates.push(usuario)

        await writeFile(filePathRoommates, JSON.stringify(roommates))
        return usuario

    } catch (error) {
        console.error("Error al procesar los archivos:", error)
    }
}

export const getRoommatesQuery = async () => {
    try {
        const preview = await readFile(filePathRoommates, "utf8")
        const roommates = preview.trim() ? JSON.parse(preview) : []
        return roommates
    } catch (error) {
        console.error("Error al procesar los archivos:", error)
    }
}

