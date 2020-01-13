import User from '../Types/User'

export const getUsers = () => {
    let userStack = localStorage.getItem('userStack');
    if (userStack) {
        return JSON.parse(userStack)
    } else {
        return null;
    }
}

export const pushUser = (user: User) => {
    let userStack: User[] = []
    if (getUsers()) {
        userStack = userStack.concat(getUsers())
    }
    if (userStack) {
        userStack.push(user);
        localStorage.setItem('userStack', JSON.stringify(userStack))
    } else {
        localStorage.setItem('userStack', JSON.stringify(user))
    }
}

export const popUser = () => {
    let userStack: User[] = getUsers();
    if (userStack) {
        return userStack.pop();
    } else {
        return null;
    }
}