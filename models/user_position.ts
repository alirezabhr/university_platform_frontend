import User from "./user";

abstract class UserPosition {
    user: User
    username: string

    constructor(user: User, username: string) {
        this.user = user
        this.username = username
    }
}

export default UserPosition
