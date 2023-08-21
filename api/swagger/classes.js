const classes = {
    "/api/classes/": {
        post: {
            tags: ["Classes"],
            description: "Create new class",
            operationId: "create class",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Classes",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Post successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        get: {
            tags: ["Classes"],
            description: "Get all class.",
            parameters: [],
            responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/api/classes/{id}": {
        put: {
            tags: ["Classes"],
            description: "Update info class",
            operationId: "Update info class",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Classes",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Classes",
                },
                required: true,
                description: "Classes ID",
            }
            ],
            responses: {
                200: {
                    description: "Post successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        get: {
            tags: ["Classes"],
            description: "Get class by id",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Classes",
                },
                required: true,
                description: "Classes ID",
            }
            ],
            responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        delete: {
            tags: ["Classes"],
            description: "Delete class by id",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Classes",
                },
                required: true,
                description: "Classes ID",
            }
            ],
            responses: {
                200: {
                    description: "Delete successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/api/classes/booking/": {
        post: {
            tags: ["Classes"],
            description: "Enrollment to class",
            operationId: "enrollment to class",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Classes",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Post successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/api/classes/person/": {
        post: {
            tags: ["Classes"],
            description: "Enrollment to class personal by day",
            operationId: "enrollment to class personal by day",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Classes",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Post successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/api/classes/trainer/{id}": {
        get: {
            tags: ["Classes"],
            description: "Get all class by trainer id",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Classes",
                },
                required: true,
                description: "Classes ID",
            }
            ],
            responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/api/classes/trainer/class/{id}": {
        get: {
            tags: ["Classes"],
            description: "Get all class not personal of trainer by trainer id",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Classes",
                },
                required: true,
                description: "Classes ID",
            }
            ], responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/api/classes/trainer/person/{id}": {
        get: {
            tags: ["Classes"],
            description: "Get all class personal of trainer by trainer id",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Classes",
                },
                required: true,
                description: "Classes ID",
            }
            ], responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/api/classes/user/{id}": {
        get: {
            tags: ["Classes"],
            description: "Get all enrollment of user by user id",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Classes",
                },
                required: true,
                description: "Classes ID",
            }
            ], responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/api/classes/teacher/{id}": {
        get: {
            tags: ["Classes"],
            description: "Get all trainer of class that user enrollment by user id",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Classes",
                },
                required: true,
                description: "Classes ID",
            }
            ], responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    }
}

export default classes