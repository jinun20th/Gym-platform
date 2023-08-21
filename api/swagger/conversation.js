const conversation = {
    "/api/conversation/": {
        post: {
            tags: ["Conversation"],
            description: "Create new conversation",
            operationId: "create conversation",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Conversation",
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
    "/api/conversation/{id}": {
        post: {
            tags: ["Conversation"],
            description: "Get conversation by id",
            operationId: "get conversation by id",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Conversation",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Conversation",
                },
                required: true,
                description: "Conversation ID",
            }], responses: {
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

export default conversation