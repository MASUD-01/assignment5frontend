export default function SignIn() {
  return (
    <div className="bg-emerald-500 h-screen flex items-center justify-center">
      <div className=" rounded-md flex flex-col gap-y-3 justify-between items-center">
        <p className="text-4xl text-amber-300">Sign In</p>
        <div>
          <div className="text-amber-300">
            <label htmlFor="email">Email: </label>
          </div>
          <input
            type="email"
            className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
          />
        </div>
        <div>
          <div className="text-amber-300">
            <label htmlFor="">Password: </label>
          </div>
          <input
            type="password"
            className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
          />
        </div>
      </div>
    </div>
  );
}
