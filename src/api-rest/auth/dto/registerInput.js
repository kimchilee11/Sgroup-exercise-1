export function registerInput(body) {
    return {
        username: body.username,
        email: body.email,
        password: body.password
    };
}
