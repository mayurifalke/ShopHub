const express = require('express');
const cors = require('cors');
const path = require('path');

const { getStoredItems, storeItems } = require('./data/items');

const app = express();

app.use(cors());  // Enable CORS for all routes
app.use(express.json()); // Replace bodyParser with express.json()

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to get all items
app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ items: storedItems });
});

// Route to get an item by ID
app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  
  if (item) {
    res.json({ item });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Route to create a new item
app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
