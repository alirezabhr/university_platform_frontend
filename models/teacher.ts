import User from "./user"

class Teacher {
    id: number
    position: string
    start_date: string
    is_heyatelmi: string
    department: string

    constructor(id: number, position: string, start_date: string, is_heyatelmi: string, department: string) {
        this.id = id
        this.position = position
        this.start_date = start_date
        this.is_heyatelmi = is_heyatelmi
        this.department = department
    }
}

export default Teacher