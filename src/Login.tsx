const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Welcome Back</h1>
          <p className="text-slate-500 text-sm mt-2">Please sign in to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-slate-300" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-slate-300" />
          <span className="mx-4 text-slate-400 text-sm">OR</span>
          <div className="flex-grow border-t border-slate-300" />
        </div>

        {/* Social login */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-slate-300 py-2 rounded-md hover:bg-slate-100 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-slate-300 py-2 rounded-md hover:bg-slate-100 transition">
            <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" className="h-5" />
            Continue with Meta
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Don’t have an account?
          <a href="#" className="text-blue-600 ml-1 hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
