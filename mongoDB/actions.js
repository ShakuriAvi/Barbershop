//db.js
const exec = require('./functions')
const { MongoClient } = require('mongodb')
const URL = `mongodb+srv://shakuri_avi:A123456@cluster0.sesz7.mongodb.net/?retryWrites=true&w=majority`;
const insertOne = async function(appointment) {
    const client = new MongoClient(URL);
    try {
        await client.connect();
        await exec.createOneListing(client, "May", appointment)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

const insertMany = async function() {
    const client = new MongoClient(URL);
    const arr = [{
        date: "14.5.2022",
        hour: 11.5,
        until: 12,
        name_customer: "Avi",
        name_hair_style: "David"
    }, {
        date: "16.5.2022",
        hour: 11,
        until: 11.5,
        name_customer: "ben",
        name_hair_style: "David"
    }, {
        date: "12.5.2022",
        hour: 10,
        until: 10.5,
        name_customer: "Mor",
        name_hair_style: "David"
    }]
    try {
        await client.connect();
        await exec.createMultipleListings(client, "May", arr)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

const getAppointmentByName = async() => {
    const client = new MongoClient(URL);
    try {
        await client.connect();
        await exec.findOneListingByName(client, "May", "Avi")
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
const getAllAppointment = async() => {
    const client = new MongoClient(URL);
    try {
        await client.connect();
        const response = await exec.findAllListing(client)
        return response
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}
const updateAppointment = async() => {
    const client = new MongoClient(URL);
    const updateListing = {
        date: "14.5.2022",
        hour: 11.5,
        until: 12,
        name_customer: "Sapir",
        name_hair_style: "David"

    }
    try {
        await client.connect();
        await exec.updateListingByName(client, "May", "Avi", updateListing)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


const upsertAppointment = async() => {
    const client = new MongoClient(URL);
    const updateListing = {
        date: "14.5.2022",
        hour: 12,
        until: 12.5,
        name_customer: "Sapir",
        name_hair_style: "David"

    }
    try {
        await client.connect();
        await exec.upsertListingByName(client, "May", "Avi", updateListing)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


const deleteAppointment = async(appointment) => {
    const client = new MongoClient(URL);

    try {
        await client.connect();
        await exec.deleteListing(client, "May", appointment)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


const deleteMany = async function() {
    const client = new MongoClient(URL);
    try {
        await client.connect();
        await exec.deleteMultipleListings(client, "May", "Sapir")
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



module.exports = {
    insertOne,
    insertMany,
    getAppointmentByName,
    getAllAppointment,
    updateAppointment,
    upsertAppointment,
    deleteAppointment,
    deleteMany
};