const express = require('express');
const router = express.Router();

const supplements = [
  { id: 1, name: "Multivitamin", description: "Daily multivitamin" },
  { id: 2, name: "Omega-3", description: "Fish oil supplements" }
];

router.get('/', (req, res) => {
  res.json(supplements);
});

module.exports = router;
