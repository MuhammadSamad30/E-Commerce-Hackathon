import React from 'react'

const AccountForm = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen ml-[10%]">
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Log In</h2>
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">Username or email address</label>
                <input
                  id="username"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a href="#" className="text-sm text-[#000000] hover:underline">Lost Your Password?</a>
              </div>
              <button className="w-[40%] text-[#000000] border-2 border-[#222] py-2 my-5 rounded-lg">
                Log In
              </button>
            </form>
          </div>
    
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Register</h2>
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  A link to set a new password will be sent to your email address.
                </p>
                <p className="text-sm text-gray-700">
                  Your personal data will be used to support your experience throughout this website. to manage access to your account and for other purposes described in our <br /><strong>Privacy Policy</strong>
                </p>
              </div>
              <button type="submit" className="w-[40%] text-[#000000] border-2 border-[#222] py-2 my-5 rounded-lg">
                Register
              </button>
            </form>
          </div>
        </div>
      );
}

export default AccountForm