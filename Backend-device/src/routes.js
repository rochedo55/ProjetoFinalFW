// Import dependence express for use Router Method 
const express = require('express')
const route = express.Router()
// Import Controller for use functions
const DeviceController = require('./Controllers/DeviceController')
// Using route api/device in methods [GET,POST,DELETE] 
route.get('/api/device',DeviceController.index)
route.post('/api/device',DeviceController.store)
route.get('/api/device/:id',DeviceController.show)
route.delete('/api/device/:id',DeviceController.delete)
// Export module route for app.js method 
module.exports=route