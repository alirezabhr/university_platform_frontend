import Course from "./course"
import SectionTime from "./section_time"

class SectionDetail {
    id: number
    termId: number
    classRoom: string
    course: Course
    teachers: string[]
    times: SectionTime[]

    constructor(id: number, termId: number, classRoom: string, course: Course, teachers: string[], times: SectionTime[]) {
        this.id = id
        this.termId = termId
        this.classRoom = classRoom
        this.course = course
        this.teachers = teachers
        this.times = times
    }
}

export default SectionDetail