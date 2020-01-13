import User from "../Types/User"


export const hasEmptyAttribute = (user: User) => {
    //user.picture.size
    if (user.picture.name === 'filename')
        return true
    if (!user.name)
        return true
    if (!user.email)
        return true
    if (!user.phone)
        return true
    if (!user.birthdate)
        return true
    return false
}