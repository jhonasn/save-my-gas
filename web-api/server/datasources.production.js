var fs = require('fs')

if (!fs.existsSync(process.env.FILESYSTEM_STORAGE_PATH)) {
	fs.mkdirSync(process.env.FILESYSTEM_STORAGE_PATH)
}

if (fs.existsSync(process.env.FILESYSTEM_STORAGE_PATH)) {
	var vehicleContainerPath = process.env.FILESYSTEM_STORAGE_PATH + "/vehicle-container"
	var gasStationContainerPath = process.env.FILESYSTEM_STORAGE_PATH + "/gas-station-container"
	if (!fs.existsSync(vehicleContainerPath)) {
		fs.mkdirSync(vehicleContainerPath)
	}
	if (!fs.existsSync(gasStationContainerPath)) {
		fs.mkdirSync(gasStationContainerPath)
	}
}

module.exports = {
	"db": {
		"name": "db",
		"connector": "memory"
	},
	"mongodb": {
		"name": "mongodb",
		"connector": "mongodb",
		"hostname": process.env.DB_HOST || "localhost",
		"port": process.env.DB_PORT || 27017,
		"database": process.env.DB_NAME || "savemygas",
		"user": process.env.DB_USER,
		"password": process.env.DB_PASSWORD,
		"connectTimeoutMS": 3600000,
		"socketTimeoutMS": 600000
	},
	"vehicleContainer": {
		"name": "vehicleContainer",
		"connector": "loopback-component-storage",
		"provider": "filesystem",
		"root": process.env.FILESYSTEM_STORAGE_PATH + "/vehicle-container"
	},
	"gasStationContainer": {
		"name": "gasStationContainer",
		"connector": "loopback-component-storage",
		"provider": "filesystem",
		"root": process.env.FILESYSTEM_STORAGE_PATH + "/gas-station-container"
	}
}
