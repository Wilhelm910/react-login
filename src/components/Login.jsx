import React, { useRef, useEffect, useState } from 'react'

const Login = () => {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)


    useEffect(() => {
        userRef.current.focus()
    }, [])


    useEffect(() => {
        setErrMsg('')
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        console.log(user, pwd)
        setUser('')
        setPwd('')
        setSuccess(true)
    }



    return (

        <>
            {
                success ? (
                    <section>
                        <h1>You are logged in!</h1>
                    </section>
                ) :
                    (
                        <section>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                                aria-live="assertive">{errMsg}</p>
                            <h1>Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete='off'
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    autoComplete='off'
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                                <button type='submit'>Sign In</button>
                            </form>
                            <div>
                                <p>Need an Account?</p>
                                <a href=''>Sign up</a>
                            </div>
                        </section>
                    )
            }
        </>

    )
}

export default Login
