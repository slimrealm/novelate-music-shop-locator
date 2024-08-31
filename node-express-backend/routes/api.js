const express = require('express');
const router = express.Router();
const shopData = require('../shopData.json');

// Helper function to calculate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3963; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Input validation middleware
function validateInput(req, res, next) {
    const { latitude, longitude, maxRadius, topNumRows } = req.query;

    if (latitude && (isNaN(latitude) || latitude < -90 || latitude > 90)) {
        return res.status(400).json({ success: false, message: "Invalid latitude parameter" });
    }
    if (longitude && (isNaN(longitude) || longitude < -180 || longitude > 180)) {
        return res.status(400).json({ success: false, message: "Invalid longitude parameter" });
    }
    if (maxRadius && (isNaN(maxRadius) || maxRadius <= 0 || maxRadius > 1000)) {
        return res.status(400).json({ success: false, message: "Invalid maxRadius parameter" });
    }
    if (topNumRows && (isNaN(topNumRows) || topNumRows <= 0 || topNumRows > 300)) {
        return res.status(400).json({ success: false, message: "Invalid topNumRows parameter" });
    }

    next();
}

// GET shops
router.get('/shops', validateInput, (req, res) => {
    let { latitude, longitude, maxRadius, topNumRows } = req.query;

    latitude = parseFloat(latitude);
    longitude = parseFloat(longitude);
    maxRadius = parseFloat(maxRadius) || 1000;
    topNumRows = parseInt(topNumRows) || 20;

    const filteredShops = shopData.response.matches
        .map(shop => {
            const shopLat = shop.locations[0].address.latitude;
            const shopLon = shop.locations[0].address.longitude;
            const distance = calculateDistance(latitude, longitude, shopLat, shopLon);
            return { ...shop, distance };
        })
        .filter(shop => shop.distance <= maxRadius)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, topNumRows);

    res.json({ response: { matches: filteredShops } });
});

// Temporary!!!!
router.get('/', (req, res) => {
    res.json("Sanity check.  Working!!");
});

// GET shop details
router.get('/shop', (req, res) => {
    const { shopId } = req.query;

    if (!shopId || isNaN(shopId) || shopId < 1 || shopId > 100000) {
        return res.status(400).json({ success: false, message: "Invalid shopId parameter" });
    }

    const shop = shopData.response.matches.find(s => s.novelateId === shopId);

    if (!shop) {
        return res.status(404).json({ success: false, message: "Shop not found" });
    }

    res.json(shop);
});

module.exports = router;