<h3>Novelate music shop locator</h3>

- Finds music shops based on lat/long coordinates - displays a list of services each shop provides - sell gear, teach lessons, instrument repair, etc.

- **Demonstrates full stack engineering & dev skills.  Built from scratch with React + TypeScript + Redux Toolkit + NodeJS + ExpressJS**

- Rest API: FE makes API calls to BE

- BE provides relevant shops within given radius of location, then provides details when an individual shop is clicked

- Provides details, including (AI-generated) photo of music shop owner

- Responsive design, looks good at all sizes down to 390px wide

- BE does query param validation and returns appropriate message + status if there's an invalid param.

- Deployment:  BE currently deploying to Render, FE to be deployed soon

- Database TBD.  Temp data currently stored in Node app: node-express-backend/shopData.json
