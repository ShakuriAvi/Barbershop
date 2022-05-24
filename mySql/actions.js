const { query } = require("express")
const res = require("express/lib/response")
const { connection } = require("mongoose")
const command = require("./commands.js")
const getHairStyles = async() => {
    response = {}
    const data = await command.getAll()
    return data
}

module.exports = {
    getHairStyles,

};