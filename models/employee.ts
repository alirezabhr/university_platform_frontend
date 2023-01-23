import UserPosition from "./user_position"
import userPositionTypes from "~/models/enums/user_position_types"

class Employee extends UserPosition{
    position: string
    start_date: string
    department: string

    constructor(id: number, position: string, start_date: string, department: string) {
        super(id, `Employee ${position} ${start_date}`, userPositionTypes.EMPLOYEE)
        this.position = position
        this.start_date = start_date
        this.department = department
    }
}

export default Employee