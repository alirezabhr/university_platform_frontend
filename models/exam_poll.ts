import ExamPollOption from '~/models/exam_poll_option'

class ExamPoll {
    id: number
    startAt: Date
    endAt: Date
    options: ExamPollOption[]

    constructor(id: number, startAt: Date, endAt: Date, options: ExamPollOption[]) {
        this.id = id
        this.startAt = startAt
        this.endAt = endAt
        this.options = options
    }
}

export default ExamPoll