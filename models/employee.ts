import UserPosition from "./user_position"
import User from "./user"

class Employee extends UserPosition {
    id: number
    position: string
    start_date: string
    department: string

    constructor(user: User, username: string, id: number, position: string, start_date: string, department: string) {
        super(user, username)
        this.id = id
        this.position = position
        this.start_date = start_date
        this.department = department
    }
}

export default Employee