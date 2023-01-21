import User from "./user"

class Employee {
    id: number
    position: string
    start_date: string
    department: string

    constructor(id: number, position: string, start_date: string, department: string) {
        this.id = id
        this.position = position
        this.start_date = start_date
        this.department = department
    }
}

export default Employee