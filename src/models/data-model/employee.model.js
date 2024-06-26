import prisma from "../../../db/db.config";

export const getEmployeeHierarchy = async (id) => {
    const employeeHierarchy = await prisma.$queryRaw`
      WITH RECURSIVE employee_cte AS (
        SELECT id, name, "positionId", "parentId"
        FROM "Employee"
        WHERE id = ${parseInt(id)}
        UNION
        SELECT e.id, e.name, e."positionId", e."parentId"
        FROM "Employee" e
        INNER JOIN employee_cte a ON a.id = e."parentId"
      )
      SELECT e.id, e.name, e."positionId", p.name as "positionName", e."parentId"
      FROM employee_cte e
      JOIN "Position" p ON e."positionId" = p.id;
    `;
    // console.log(employeeHierarchy);
    const employeeMap = new Map();
    employeeHierarchy.forEach(employee => {
        employee.children = [];
        employeeMap.set(employee.id, employee);
    });
    // console.log(employeeMap);

    let root;
    employeeHierarchy.forEach(employee => {
        if (employee.parentId) {
            const parent = employeeMap.get(employee.parentId);
            if (parent) {
                parent.children.push(employee);
            }
            else {
                root = employee;
            }
        } else {
            root = employee;
        }
    });
    return root.children ?? [];
}

export const getEmployeeHierarchyBatch = async (data) => {
    const offset = data.batchSize * (data.currentPage - 1);
    const employeeHierarchy = await prisma.$queryRaw`
      WITH RECURSIVE employee_cte AS (
        SELECT id, name, "positionId", "parentId"
        FROM "Employee"
        WHERE id = ${parseInt(data.id)}
        UNION
        SELECT e.id, e.name, e."positionId", e."parentId"
        FROM "Employee" e
        INNER JOIN employee_cte a ON a.id = e."parentId"
      )
      SELECT e.id, e.name, e."positionId", p.name as "positionName", e."parentId"
      FROM employee_cte e
      JOIN "Position" p ON e."positionId" = p.id
      OFFSET ${parseInt(offset)}
      LIMIT ${parseInt(data.batchSize)};
    `;
    
    const employeeMap = new Map();
    employeeHierarchy.forEach(employee => {
        employee.children = [];
        employeeMap.set(employee.id, employee);
    });

    let root;
    employeeHierarchy.forEach(employee => {
        if (employee.parentId) {
            const parent = employeeMap.get(employee.parentId);
            if (parent) {
                parent.children.push(employee);
            }
            else {
                root = employee;
            }
        } else {
            root = employee;
        }
    });
    return {
        root: root.children ?? [],
        total: employeeHierarchy.length
    };
}