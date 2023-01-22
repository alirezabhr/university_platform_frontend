class SectionTime {
    id: number
    weekday: string
    startTime: string
    endTime: string

    constructor(id: number, weekday: string, startTime: string, endTime: string) {
        this.id = id
        this.weekday = weekday
        this.startTime = startTime
        this.endTime = endTime
    }
}

export default SectionTime
