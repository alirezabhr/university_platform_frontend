import userPositionTypes from '~/models/enums/user_position_types'

abstract class UserPosition {
    id: number
    title: string
    positionType: userPositionTypes
    department: string

    constructor(id: number, title: string, positionType: userPositionTypes, department: string) {
        this.id = id
        this.title = title
        this.positionType = positionType
        this.department = department
    }
}

export default UserPosition
