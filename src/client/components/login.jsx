import React, { useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [phonenumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        const token = await loginUser({
            phonenumber,
            password
        })

        setToken(token?.accessToken);
    }

    return (
        <div className="h-screen md:flex sm:flex justify-center  bg-gradient-to-tr from-blue-800 to-purple-700 ">
            <div className="flex md:w-3/4 justify-center py-10 items-center bg-transparent">
                <form className='md:w-1/4' onSubmit={handleSubmit}>
                    <h1 className="text-white font-bold text-2xl mb-1">Login to Task scheduler!</h1>
                    <p className="text-sm font-normal text-white mb-7">Welcome Back</p>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 transition duration-500 ease-in-out active:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none"
                            viewBox="0 0 16 16" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M11 10c-1 1-1 2-2 2s-2-1-3-2s-2-2-2-3s1-1 2-2s-2-4-3-4s-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"
                                />
                        </svg>
                        <input className="pl-2 outline-none border-none bg-transparent text-white placeholder-white" type="text" name="" id="" placeholder="Phone number"
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl transition duration-500 ease-in-out active:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <input className="pl-2 outline-none border-none bg-transparent text-white placeholder-white" type="password" name="" id="" placeholder="Password"
                            onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white
                    font-semibold mb-2 transition duration-500 ease-in-out active:scale-110 hover:bg-indigo-400 transform hover:-translate-y-1 hover:scale-110">Login</button>
                </form>
            </div>

        </div>
    );

}
