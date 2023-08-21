const user = {
    "/api/user/": {
        get: {
            tags: ["User"],
            description: "Get all users",
            operationId: "get all users",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
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
    "/api/user/{id}": {
        post: {
            tags: ["User"],
            description: "User register to be trainer",
            operationId: "register trainer",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/User",
                },
                required: true,
                description: "User ID",
            }], responses: {
                200: {
                    description: "Register successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        put: {
            tags: ["User"],
            description: "Update user",
            operationId: "Update user",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/User",
                },
                required: true,
                description: "User ID",
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
            tags: ["User"],
            description: "Delete user",
            operationId: "Delete user",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/User",
                },
                required: true,
                description: "User ID",
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
            tags: ["User"],
            description: "Get user by id",
            operationId: "Get user by id",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/User",
                },
                required: true,
                description: "User ID",
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
    "/api/user/reset/{id}": {
        post: {
            tags: ["User"],
            description: "Reset password for user",
            operationId: "Reset password for user",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/User",
                },
                required: true,
                description: "User ID",
            }],
            responses: {
                200: {
                    description: "Reset successfully",
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

export default user