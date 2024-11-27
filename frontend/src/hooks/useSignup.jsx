import { useState } from "react"

export function useSignup() {
    const [pending, setPending] = useState(false)
    const Signup = async (email, password, setIsAuthenticated) => {

        setPending(true)
        const res = await fetch('/api/users/signup', {
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
        }

    }

    return { Signup, pending }
}

