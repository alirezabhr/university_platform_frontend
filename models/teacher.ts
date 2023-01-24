import UserPosition from "./user_position"
import userPositionTypes from "~/models/enums/user_position_types"

class Teacher extends UserPosition {
    position: string
    start_date: string
    is_heyatelmi: string
    
    constructor(id: number, position: string, start_date: string, is_heyatelmi: string, department: string) {
        super(id, `Teacher ${position} ${start_date}`, userPositionTypes.TEACHER, department)
        this.position = position
        this.start_date = start_date
        this.is_heyatelmi = is_heyatelmi
        this.department = department
    }
}

export default Teacher