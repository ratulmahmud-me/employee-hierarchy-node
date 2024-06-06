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
        // console.log(position);
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
        for (let i = 0; i < 10; i++) {
            employee.push({
                name: faker.person.fullName(),
                positionId: faker.helpers.arrayElement(positions).id,
                parentId: i > 0 ? faker.helpers.rangeToNumber({ min: 1, max: i }) : null
            });
        }
        console.log(employee);
        const employeeCreated = await prisma.employee.createMany({
            data: employee
        });
    } catch (error) {
        console.log("Error generating dummy data:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}

// await generateEmployeePosition();

await generateEmployeeHeirarchy();