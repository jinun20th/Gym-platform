import swaggerJSDoc from 'swagger-jsdoc';
import auth from './swagger/auth.js';
import user from './swagger/user.js';
import trainer from './swagger/trainer.js';
import classes from './swagger/classes.js';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "Nodejs api project for mongoDB",
        version: '1.0.0'
    },
    servers: [
        {
            url: "http://localhost:5000/"
        }
    ], paths: {
        ...auth,
        ...user,
        ...trainer,
        ...classes,
    }, components: {
        schemas: {
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        format: "integer",
                        example: 1,
                    },
                    name: {
                        type: "string",
                        description: "",
                        example: "Nguyen Van A",
                    },
                    username: {
                        type: "string",
                        description: "",
                        example: "Username123",
                    },
                    email: {
                        type: "string",
                        description: "",
                        example: "nguyenvana@gmail.com",
                    },
                    password: {
                        type: "string",
                        description: "",
                        example: "",
                    },
                    gender: {
                        type: "string",
                        description: "",
                        example: "Nam",
                    },
                    phone: {
                        type: "string",
                        description: "",
                        example: "0123456789",
                    },
                    address: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    age: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 18,
                    },
                    img: {
                        type: "string",
                        description: "",
                        example: "https://chuvoiconabondon",
                    },
                    isTrainer: {
                        type: "boolean",
                        description: "",
                        example: false,
                    },
                    isAdmin: {
                        type: "boolean",
                        description: "",
                        example: false,
                    },
                    coins: {
                        type: "integer",
                        description: "",
                        format: "int64",
                        example: 1,
                    },
                }
            },
            Trainer: {
                type: "object",
                properties: {
                    user: {
                        $ref: "#/components/schemas/User"
                    },
                    description: {
                        type: "string",
                        description: "",
                        example: "Lorem asasas",
                    },
                    specialize: {
                        type: "string",
                        description: "",
                        example: "Yoga",
                    },
                },
            },
            Classes: {
                type: "object",
                properties: {
                    trainerId: {
                        type: "string",
                        description: "",
                        example: "1",
                    },
                    name: {
                        type: "string",
                        description: "",
                        example: "Lop day the hinh",
                    },
                    startTime: {
                        type: "string",
                        description: "",
                        example: "23/07/2023",
                    },
                    endTime: {
                        type: "string",
                        description: "",
                        example: "30/07/2023",
                    },
                    days: {
                        type: "array",
                        description: "",
                        example: ["T2", "T4", "T6"],
                    },
                    capacity: {
                        type: "integer",
                        description: "",
                        format: "int64",
                        example: 10,
                    },
                    personal: {
                        type: "boolean",
                        description: "",
                        example: false,
                    },
                    price: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 180,
                    },
                    specialize: {
                        type: "array",
                        description: "",
                        example: ["Yoga", "Finess"],
                    },
                }
            },
            Conversation: {
                type: "object",
                properties: {
                    members: {
                        type: "array",
                        example: [1, 2, 3],
                    }
                }
            },
            Message: {
                type: "object",
                properties: {
                    conversationId:{
                        type:"integer",
                        example: 10,
                    },
                    sender:{
                        type: "integer",
                        example: 1,
                    },
                    recipients:{
                        type: "integer",
                        example: 2,
                    },
                    content:{
                        type:"string",
                        example: "Lorem adasb sdsdsd"
                    }
                },
            },
            Enrollments:{
                type: "object",
                properties: {
                    classId:{
                        type: "integer",
                        example: 1,
                    },
                    userId: {
                        type: "integer",
                        example: 2,  
                    }
                }
            }
        }
    }
}

const options = {
    swaggerDefinition,
    apis: ["./index.js"]
}

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;