export class EmployeeViewModel {
    constructor(employee) {
        this.id = employee.id;
        this.name = employee.name;
        this.positionId = employee.positionId;
        this.positionName = employee.positionName;
        this.children = employee.children
    }
}