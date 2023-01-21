import Course from "./course"

class Section {
    id: number
    termId: number
    classRoom: string
    course: Course

    constructor(id: number, termId: number, classRoom: string, course: Course) {
        this.id = id
        this.termId = termId
        this.classRoom = classRoom
        this.course = course
    }
}

export default Section