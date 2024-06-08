import { faker } from "@faker-js/faker";
import prisma from "../db/db.config.js";

const generateEmployeePosition = async () => {
    try {
        const position = [];
        for (let i = 0; i < 10; i++) {
            position.push({
                name: faker.person.jobTitle()
            })
        }
        const positionCreated = await prisma.position.createMany({
            data: position
        });
    } catch (error) {
        console.log("Error generating dummy data:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}


const generateEmployeeHeirarchy = async () => {
    try {
        const positions = await prisma.position.findMany();
        const employee = [];
        for (let i = 0; i < 10000; i++) {
            employee.push({
                name: faker.person.fullName(),
                positionId: faker.helpers.arrayElement(positions).id,
                parentId: i > 0 ? faker.helpers.rangeToNumber({ min: 1, max: i }) : null
            });
        }
        const employeeCreated = await prisma.employee.createMany({
            data: employee
        });
        console.log("Generated dummy data successfully!");
    } catch (error) {
        console.log("Error generating dummy data:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}

// to generate the job titles dummy data enable this function
await generateEmployeePosition();

// to generate the employee dummy data enable this function.
await generateEmployeeHeirarchy();