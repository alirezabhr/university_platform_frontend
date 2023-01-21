class Course {
    id: number
    name: string
    suggestedTerm: number
    credit: number
    department: string

    constructor(id: number, name: string, suggestedTerm: number, credit: number, department: string) {
        this.id = id
        this.name = name
        this.suggestedTerm = suggestedTerm
        this.credit = credit
        this.department = department
    }
}

export default Course
