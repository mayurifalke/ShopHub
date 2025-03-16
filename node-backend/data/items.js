const fs = require('node:fs/promises');
const path = require('path');  // Import the 'path' module

async function getStoredItems() {
  const rawFileContent = await fs.readFile(path.join(__dirname, 'items.json'), { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return fs.writeFile(path.join(__dirname, 'items.json'), JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
