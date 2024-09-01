Novelate music shop finder

Finds music shops based on coordinates - displays a list of services each shop provides - sell gear, teach lessons, instrument repair, etc.

Demonstrates full stack development skills: React + TypeScript + Redux Toolkit + NodeJS + ExpressJS

Rest API: FE makes API calls to BE

BE provides relevant shops within given radius of location, then provides details when individual shop clicked

Provides details, including photo of (AI-generated) music shop owner

Responsive design, looks good at all sizes down to 370px wide

BE does query param validation and returns appropriate message + status if there's an invalid param.

Deployment:  BE currently deploying to Render, FE to be deployed soon

No DB integrated yet.  Temp data currently stored in Node app: node-express-backend/shopData.json
