// Helper function to calculate distance between 2 geographical points using flat earth calculation
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 3963; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

// Input validation middleware
export const validateInput = (req, res, next) => {
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
};