// import module npm mongodb
const { error } = require("console");
const { MongoClient, ObjectId } = require("mongodb");

// conection url
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url)

// Database name
const dbName = "toko_makanan";


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    // connect database
    const db = client.db(dbName);

    // Menambahkan hanya 1 data
    // const collections = db.collection('makanan').insertOne({
    //     nama : "indomie",
    //     variant : "normal",
    //     harga : 5000,
    // }, (error, result) => {
    //     if(error) {
    //       return console.log('gagal ditambahkan');
    //     }

    //     console.log(result)
    // });
  
    // menambahkan banyak data 
    // const collections = db.collection('makanan').insertMany(
    //     [
    //         {
    //             nama : "nasi goreng",
    //             variant : "Hot",
    //             harga : 15000
    //         },
    //         {
    //             nama : "pisang goreng",
    //             variant : "keju",
    //             harga : 15000
    //         }
    //     ]
    // )


    // menampilkan semua data semua data yang ada di makanan
    // const collection = db.collection('makanan').find().toArray((error, result) => {
    //     console.log(result)
    // })

    // menampilkan data berdasarkan kriteria
    // const collection = db.collection('makanan').find( { harga : 15000} ).toArray((error, result) => {
    //     console.log(result)
    // })

    // Update data berdasarkan ID
    // const collection = db.collection('makanan').updateOne(
    //     {
    //         _id: new ObjectId('66e0f9e8c0730b20ec76384c')
    //     },
    //     {
    //         $set : {
    //             nama : "pisang keju special"
    //         }
    //     }
    // )

    // Update banyak data berdasarkan kriteria
    // const collection = db.collection('makanan').updateMany(
    //     {
    //          nama : "Sepageti"
    //     },
    //     {
    //         $set : {
    //             variant : "extra spicy"
    //         },
    //     },
      
    // )

    // Delete one data berdarkan kriteria
    // const collection = db.collection('makanan').deleteOne(
    //     {
    //         nama : "Sepageti"
    //     }
    // )

    // Delete many data berdasarkan kriteria
    const collection = db.collection('makanan').deleteMany(
        {
            harga : 15000
        }
    )

    
    return collection;
  }

  main()
  .then(console.log)
  .catch(console.error)
 

