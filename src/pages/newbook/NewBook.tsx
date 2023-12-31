import { useForm } from "react-hook-form";
import { IBooks } from "../allbooks/allbooksEndpoints";
import { useCreateBookMutation } from "./newBookEndpoints";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function NewBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBooks>();
  const [createBook, { isSuccess, isError }] = useCreateBookMutation();
  const onSubmit = async (data: IBooks) => {
    await createBook(data);

    reset();
  };
  useEffect(() => {
    if (isSuccess) {
      toast("Book HasBeen Created");
    } else if (isError) {
      toast("something went wrong");
    }
  }, [isSuccess, isError]);
  return (
    <div className="bg-emerald-500 h-screen flex items-center justify-center">
      <ToastContainer />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" rounded-md flex flex-col gap-y-3 justify-between items-center">
          <p className="text-4xl text-amber-300">Create New Book</p>
          <div>
            <div className="text-amber-300">
              <label htmlFor="Title">Title: </label>
            </div>
            <input
              type="text"
              className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
              {...register("Title", { required: "Title is required" })}
            />
            {errors.Title && <p>{errors.Title.message}</p>}
          </div>
          <div>
            <div className="text-amber-300">
              <label htmlFor="Author">Author: </label>
            </div>
            <input
              type="text"
              className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
              {...register("Author", { required: "Author is required" })}
            />
            {errors.Author && <p>{errors.Author.message}</p>}
          </div>
          <div>
            <div className="text-amber-300">
              <label htmlFor="Genre">Genre: </label>
            </div>
            <input
              type="text"
              className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
              {...register("Genre", { required: "Genre is required" })}
            />
            {errors.Genre && <p>{errors.Genre.message}</p>}
          </div>
          <div>
            <div className="text-amber-300">
              <label htmlFor="PublicationDate">PublicationDate: </label>
            </div>
            <input
              type="date"
              className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
              {...register("PublicationDate", {
                required: "PublicationDate is required",
              })}
            />
            {errors.PublicationDate && <p>{errors.PublicationDate.message}</p>}
          </div>
        </div>
        <button className="p-2 mt-3 ml-2 bg-amber-300 rounded-lg">
          Create New Book
        </button>
      </form>
    </div>
  );
}
