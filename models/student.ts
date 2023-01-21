import User from "./user"

class Student {
    sid: number
    degree: string
    start_date: string
    membership_type: string
    advisor_id: number
    department: string

    constructor(sid: number, degree: string, start_date: string, membership_type: string, advisor_id: number, department: string) {
        this.sid = sid
        this.degree = degree
        this.start_date = start_date
        this.membership_type = membership_type
        this.advisor_id = advisor_id
        this.department = department
    }
}

export default Student