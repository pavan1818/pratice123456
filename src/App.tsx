export default function App() {
  return (
    <>
      {/* <div className="w-80 bg-gray p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-600">This is a simple card using Tailwind CSS.</p>
      </div>

      <nav className="flex justify-between items-center px-6 py-4 bg-blue-800 text-white">
        <h1 className="text-lg font-bold">MySite</h1>
        <div className="space-x-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav> */}

      <body className="h-screen flex justify-center items-center bg-gray-500">
        <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Login</button>
        </div>
      </body>
    </>
  )
}
