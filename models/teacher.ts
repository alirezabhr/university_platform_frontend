import UserPosition from "./user_position"
import User from "./user"

class Teacher extends UserPosition {
    id: number
    position: string
    start_date: string
    is_heyatelmi: string
    department: string

    constructor(user: User, username: string, id: number, position: string, start_date: string, is_heyatelmi: string, department: string) {
        super(user, username)
        this.id = id
        this.position = position
        this.start_date = start_date
        this.is_heyatelmi = is_heyatelmi
        this.department = department
    }
}

export default Teacher