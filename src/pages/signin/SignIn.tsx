import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { loginUser } from "../../redux/features/user/userSlice";
interface LoginFormInputs {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const dispatch = useAppDispatch();
  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };
  return (
    <div className="bg-emerald-500 h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" rounded-md flex flex-col gap-y-3 justify-between items-center">
          <p className="text-4xl text-amber-300">Sign In</p>
          <div>
            <div className="text-amber-300">
              <label htmlFor="email">Email: </label>
            </div>
            <input
              type="email"
              className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <div className="text-amber-300">
              <label htmlFor="">Password: </label>
            </div>
            <input
              type="password"
              className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>
        <button className="p-2 mt-3 bg-amber-300 rounded-lg">
          Login Account
        </button>
      </form>
    </div>
  );
}
