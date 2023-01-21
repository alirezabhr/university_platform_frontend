import userPositionTypes from '~/models/enums/user_position_types'

abstract class UserPosition {
    id: number
    title: string
    positionType: userPositionTypes

    constructor(id: number, title: string, positionType: userPositionTypes) {
        this.id = id
        this.title = title
        this.positionType = positionType
    }
}

export default UserPosition
