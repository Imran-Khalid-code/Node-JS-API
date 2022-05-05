const findAll = {
	tags: ["Students"],
	description: "Get all students - receive a list of all the students",
	operationId: "findAll",
	responses: {
		200: {
			description: "The students were received",
			content: "application/json",
		},
	},
};

const find = {
	tags: ["Students"],
	description: "Get all students - receive particular student using thier id",
	operationId: "find",
	responses: {
		200: {
			description: "The students were received",
			content: "application/json",
		},
	},
};

const create = {
	tags: ["Students"],
	description: "Post a student - add a student to the list of students",
	operationId: "create",
	responses: {
		201: {
			description: "The students were received",
			content: "application/json",
		},
	},
};

const destroy = {
	tags: ["Students"],
	description:
		"Delete one student - remove a student from the list of students using its ID",
	operationId: "destroy",
	responses: {
		202: {
			description: "The students were successfully destroyed",
			content: "application/json",
		},
	},
};

module.exports = { findAll, find, create, destroy };
