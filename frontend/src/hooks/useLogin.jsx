import { useState } from "react"

export function useLogin() {
    const [pending, setPending] = useState(null)
    const [error, setError] = useState(null)
    const Login = async (email, password, setIsAuthenticated) => {

        setPending(true)
        const res = await fetch('/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        })
        const user = await res.json()

        if (res.ok) {
            sessionStorage.setItem('user', JSON.stringify(user))
            setIsAuthenticated(true)
            setPending(false)
        } else {
            setPending(false)
            setError(user.message)
        }

    }

    return { Login, error, pending }
}

