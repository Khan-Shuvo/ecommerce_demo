import React, { useContext, useState } from 'react'
import { UserContext } from '../contexApi/UserContext'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login() {

  const { login } = useContext(UserContext);
  const [input, setInput] = useState({ email: '', password: '' })
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const res = login(input.email, input.password)

    if (res.success) {
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate('/')
    } else {
      setError(res.message)
      toast.error(res.message)
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label>Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:border-green-500"
              value={input.email}
                onChange={(e) =>
                setInput({ ...input, email: e.target.value })
              }
            required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:border-green-500"
              value={input.password}
              onChange={e => setInput({...input, password: e.target.value})}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-2 hover:bg-green-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
