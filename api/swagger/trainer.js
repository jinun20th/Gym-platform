const trainer = {
    "/api/trainer/": {
        get: {
            tags: ["Trainer"],
            description: "Get all trainer",
            operationId: "get all trainer",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Trainer",
                        },
                    },
                },
            },
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
    "/api/trainer/{id}": {
        put: {
            tags: ["Trainer"],
            description: "Update trainer",
            operationId: "Update trainer",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Trainer",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Trainer",
                },
                required: true,
                description: "Trainer ID",
            }], responses: {
                200: {
                    description: "Update successfully",
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
            tags: ["Trainer"],
            description: "Delete Trainer",
            operationId: "Delete Trainer",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Trainer",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Trainer",
                },
                required: true,
                description: "Trainer Id",
            }],
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
        },
        get: {
            tags: ["Trainer"],
            description: "Get Trainer by id",
            operationId: "Get Trainer by id",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Trainer",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Trainer",
                },
                required: true,
                description: "Trainer iD",
            }],
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
    "/api/trainer/profile/{id}": {
        post: {
            tags: ["Trainer"],
            description: "Get profile from Trainer",
            operationId: "Get profile from Trainer",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Trainer",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Trainer",
                },
                required: true,
                description: "Trainer iD",
            }],
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
    }
}

export default trainer