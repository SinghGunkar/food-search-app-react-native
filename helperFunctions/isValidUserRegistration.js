const isValidUserRegistration = (userInfo, setErrorMsg) => {
    const { userName, email, password1, password2 } = userInfo

    // if field is missing
    if (!userName || !email || !password1 || !password2) {
        setErrorMsg("Please fill out all fields")
        return false
    }

    // username must be longer than 6 characters
    if (userName.length < 6) {
        setErrorMsg("Username must be at least 6 characters long")
        return false
    }

    // validate email
    const regex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

    if (!regex.test(email)) {
        setErrorMsg("Invalid email format")
        return false
    }

    // password must be the same
    if (password1 != password2) {
        setErrorMsg("Passwords are not equal")
        return false
    }

    // password must be at least 6 characters long
    if (password1.length < 6) {
        setErrorMsg("Password must be at least 6 characters long")
        false
    }

    // no issues => clear error message
    setErrorMsg("")
    return true
}

export default isValidUserRegistration
