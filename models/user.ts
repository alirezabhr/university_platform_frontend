import Employee from "./employee"
import Student from "./student"
import Teacher from "./teacher"

class User {
    id: number
    username: string
    firstName: string
    lastName: string
    phone: string
    address: string
    wallet: number
    student_infos: Student[]
    teacher_infos: Teacher[]
    employee_infos: Employee[]


    constructor(
        id: number,
        username: string,
        firstName: string,
        lastName: string,
        phone: string,
        address: string,
        wallet: number,
        student_infos: Student[],
        teacher_infos: Teacher[],
        employee_infos: Employee[]
    ) {
        this.id = id
        this.username = username
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.address = address
        this.wallet = wallet
        this.student_infos = student_infos
        this.teacher_infos = teacher_infos
        this.employee_infos = employee_infos
    }
}

export default User