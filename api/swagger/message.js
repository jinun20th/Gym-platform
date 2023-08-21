const message = {
    "/api/message/": {
        post: {
            tags: ["Message"],
            description: "Create new message",
            operationId: "create message",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Message",
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
    "/api/message/{id}": {
        post: {
            tags: ["Message"],
            description: "Get message by id",
            operationId: "get message by id",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Message",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/Message",
                },
                required: true,
                description: "Message ID",
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

export default message