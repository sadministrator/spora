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
    let userStack = getUsers();
    if (userStack) {
        userStack.push(user);
        localStorage.setItem('userStack', JSON.stringify(userStack))
    }
}

export const popUser = () => {
    let userStack = getUsers();
    if (userStack) {
        return userStack.pop();
    }
}