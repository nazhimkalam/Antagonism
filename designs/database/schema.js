// Entities 
// 1. Users table
// 2. Detection table

// schema structure for the users table
var usersSchema = {
    id: { type: 'increments', nullable: false, primary: true },
    fullName: { type: 'string', nullable: false },
    username: { type: 'string', nullable: false, unique: true },
    password: { type: 'string', nullable: false },
    createdAt: { type: 'dateTime', nullable: false },
    updatedAt: { type: 'dateTime', nullable: false }
}

// schema structure for the detection table
var detectionSchema = {
    id: { type: 'increments', nullable: false, primary: true },
    userId: { type: 'integer', nullable: false },
    result: { type: 'string', nullable: false },
    detectedText: { type: 'string', nullable: false },
    createdAt: { type: 'dateTime', nullable: false },
    updatedAt: { type: 'dateTime', nullable: false },
}