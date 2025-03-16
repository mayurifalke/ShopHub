// const express = require('express');
// const cors = require('cors');
// const app = express();
// const path = require('path');

// // Enable CORS for all routes
// app.use(cors());

// // Serve static files from the "images" directory
// app.use('/images', express.static(path.join(__dirname, 'images')));

// // Route to get image URL by ID
// app.get('/image/:id', (req, res) => {
//   const id = req.params.id;

//   // Simulate getting the image path from a package.json-like object
//   const imageData = {
//     "1": "/images/1.jpg",
//     "2": "/images/2.jpg"
//   };

//   const imageUrl = imageData[id];
//   if (imageUrl) {
//     res.json({ id, imageUrl });
//   } else {
//     res.status(404).json({ error: 'Image not found' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });