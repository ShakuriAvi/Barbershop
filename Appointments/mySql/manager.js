const command = require("./commands.js")
const getAll = async() => {
    response = {}
    const data = await command.getAll()
    return data
}
const insertOne = async(item) => {
    const response = await command.insertOne(item);
    return response;
}
const deleteOne = async(item) => {
    const response = await command.deleteOne(item);
    return response;
}
const getBestHairStyleByDate = async(item) => {
    const response = await command.getBestHairStyleByDate(item);
    console.log("manager " + response);

    return response;
}
module.exports = {
    getAll,
    insertOne,
    deleteOne,
    getBestHairStyleByDate

};