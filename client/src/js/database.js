import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the JATE database");
  const jateDb = await openDB("jate", 1); // Open the 'jate' database
  const tx = jateDb.transaction("jate", "readwrite"); // Start a new transaction in 'readwrite' mode
  const store = tx.objectStore("jate"); // Access the object store named 'jate'
  const result = await store.put({ id: 1, jate: content }); // Use the put method to add or update a record in the object store with a fixed ID of 1
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET data from the JATE database");
  const jateDb = await openDB("jate", 1); // Open the 'jate' database
  const tx = jateDb.transaction("jate", "readonly"); // Start a transaction in 'readonly' mode
  const store = tx.objectStore("jate"); // Access the object store named 'jate'
  const result = store.getAll(); // Retrieve all records from the object store
  console.log("Data retrieved from the database", result);
  return result;
};

initdb();
