//db.js
const exec = require('./commands')
const { MongoClient } = require('mongodb')
const settings = require("../../settings.json")
const dbName = "HairStyle"
const URL = settings.url_mongoDb;
const insertOne = async function(item) {
    const client = new MongoClient(URL);
    try {
        await client.connect();
        await exec.createOneListing(client, dbName, item)
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
        await exec.createMultipleListings(client, dbName, arr)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

const getByName = async(name) => {
    const client = new MongoClient(URL);
    try {
        await client.connect();
        await exec.findOneListingByName(client, dbName, name)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
const getAll = async() => {
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
const updateItem = async(nameItem, newItem) => {
    const client = new MongoClient(URL);
    // const updateListing = {
    //     date: "14.5.2022",
    //     hour: 11.5,
    //     until: 12,
    //     name_customer: "Sapir",
    //     name_hair_style: "David"

    // }
    try {
        await client.connect();
        await exec.updateListingByName(client, dbName, nameItem, newItem)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


const upsertItem = async(nameItem, item) => {
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
        await exec.upsertListingByName(client, dbName, nameItem, item)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


const deleteItem = async(item) => {
    const client = new MongoClient(URL);

    try {
        await client.connect();
        await exec.deleteListing(client, dbName, item)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


const deleteMany = async function(name) {
    const client = new MongoClient(URL);
    try {
        await client.connect();
        await exec.deleteMultipleListings(client, dbName, name)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



module.exports = {
    insertOne,
    insertMany,
    getByName,
    getAll,
    updateItem,
    upsertItem,
    deleteItem,
    deleteMany
};