class User {
    id: number
    firstName: string
    lastName: string
    phone: string
    address: string
    wallet: number

    constructor(id: number, firstName: string, lastName: string, phone: string, address: string, wallet: number) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.address = address
        this.wallet = wallet
    }
}

export default User