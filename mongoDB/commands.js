const dbName = "appointment_2022"
const settings = require("../settings.json")
async function createOneListing(client, nameTBL, newListing) {
    const result = await client.db(dbName).collection(nameTBL).insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleListings(client, nameTBL, newListings) {
    const result = await client.db(dbName).collection(nameTBL).insertMany(newListings);
    console.log(`New listing created with the following id: ${result.insertedIds}`);
}

async function findOneListingByName(client, nameTBL, nameOfListing) {
    const result = await client.db(dbName).collection(nameTBL).findOne({ name_customer: nameOfListing })
    if (result) {
        console.log(`Found a listing in thr collection with the name ${nameOfListing}`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}`);
    }
}
async function findAllListing(client) {
    const months = settings.Months
    let appointmentsByMonths = {}
    for (const month of months) {
        appointmentsByMonths[month] = []
        const result = await client.db(dbName).collection(month).find({}).forEach(element => {
            appointmentsByMonths[month].push(element)
        });
    }
    return appointmentsByMonths
}
async function updateListingByName(client, nameTBL, nameOfListing, updateListing) {
    const result = await client.db(dbName).collection(nameTBL).updateOne({ name_customer: nameOfListing }, { $set: updateListing })
}

async function upsertListingByName(client, nameTBL, nameOfListing, updateListing) {
    const result = await client.db(dbName).collection(nameTBL).updateOne({ name_customer: nameOfListing }, { $set: updateListing }, { upsert: true })
    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    if (result.matchedCount > 0) {
        console.log(`One documents was inserted with the id ${result.upsertedId}`);
    } else {
        console.log(`${result.modifiedCount} document(s) was/were updated`);

    }
}

async function deleteListing(client, nameTBL, appointment) {
    console.log(appointment, appointment["date"], appointment["hour"], appointment["until"]);
    const result = await client.db(dbName).collection(nameTBL).deleteOne({ "date": appointment["date"], "hour": appointment["hour"], "until": appointment["until"] })
    console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function deleteMultipleListings(client, nameTBL, deleteListings) {
    const result = await client.db(dbName).collection(nameTBL).deleteMany({ "name_customer": deleteListings });
    console.log(`${result.deletedCount} document(s) was/were deleted`);

}

module.exports = {
    createOneListing,
    createMultipleListings,
    findOneListingByName,
    findAllListing,
    updateListingByName,
    updateListingByName,
    upsertListingByName,
    deleteListing,
    deleteMultipleListings
};