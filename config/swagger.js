const students = require("../docs/student.swagger.js");

const swaggerDocument = {
	openapi: "3.0.1",
	info: {
		version: "1.0.0",
		title: "Imran Node Api",
		description: "The documentation for Node API",
		contact: {
			name: "Imran",
			email: "ikhalidf7@gmail.com",
		},
	},
	// servers: {
	// 	url: "https://localhost:3000/",
	// 	description: "Local Server",
	// },
	tags: {
		name: "Students",
	},
	paths: {
		"/api/students": {
			get: students.findAll,
			post: students.create,
		},
		"/api/students/:id": {
			get: students.find,
			delete: students.destroy,
		},
	},
};

module.exports = swaggerDocument;
