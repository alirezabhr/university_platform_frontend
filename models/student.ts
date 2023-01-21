import UserPosition from "./user_position"
import userPositionTypes from "~/models/enums/user_position_types"

class Student extends UserPosition {
    degree: string
    start_date: string
    membership_type: string
    advisor_id: number
    department: string

    constructor(sid: number, degree: string, start_date: string, membership_type: string, advisor_id: number, department: string) {
        super(sid, `Student ${degree} ${start_date}`, userPositionTypes.STUDENT)
        this.degree = degree
        this.start_date = start_date
        this.membership_type = membership_type
        this.advisor_id = advisor_id
        this.department = department
    }
}

export default Student