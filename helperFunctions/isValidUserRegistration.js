import { setErrorMessage } from "../redux/slices/authSlice"

const isValidUserRegistration = (userInfo, dispatch) => {
    const { userName, email, password1, password2 } = userInfo

    // if field is missing
    if (!userName || !email || !password1 || !password2) {
        dispatch(setErrorMessage("Please fill out all fields"))
        return false
    }

    // username must be longer than 6 characters
    if (userName.length < 6) {
        dispatch(
            setErrorMessage(
                "Username must be at least 6 characters long"
            )
        )
        return false
    }

    // validate email
    const regex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

    if (!regex.test(email)) {
        dispatch(setErrorMessage("Invalid email format"))
        return false
    }

    // password must be the same
    if (password1 != password2) {
        dispatch(setErrorMessage("Passwords are not equal"))
        return false
    }

    // password must be at least 6 characters long
    if (password1.length < 6) {
        dispatch(
            setErrorMessage(
                "Password must be at least 6 characters long"
            )
        )
        false
    }

    // no issues => clear error message
    dispatch(setErrorMessage(""))
    return true
}

export default isValidUserRegistration
