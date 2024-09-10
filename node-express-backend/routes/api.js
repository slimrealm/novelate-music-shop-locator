import express from 'express';
import shopData from '../shopData.json' assert { type: 'json' };
import { calculateDistance, validateInput } from '../helpers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json("Sanity check.  Working!");
});


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

// GET shop details
router.get('/shop', (req, res) => {
    const { shopId } = req.query;

    if (!shopId || isNaN(shopId) || shopId < 1 || shopId > 100000) {
        return res.status(400).json({ success: false, message: "Invalid shopId parameter" });
    }

    // Find matching data for shopId
    const shop = shopData.response.matches.find(s => s.novelateId === shopId);
    if (!shop) {
        return res.status(404).json({ success: false, message: "Shop not found" });
    }

    res.json(shop);
});

export default router;