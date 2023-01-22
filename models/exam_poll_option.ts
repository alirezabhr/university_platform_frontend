class ExamPollOption {
    id: number
    date: Date
    startAt: string
    endAt: string
    isAnswered: boolean

    constructor(id: number, date: Date, startAt: string, endAt: string, isAnswered: boolean) {
        this.id = id
        this.date = date
        this.startAt = startAt
        this.endAt = endAt
        this.isAnswered = isAnswered
    }
}

export default ExamPollOption