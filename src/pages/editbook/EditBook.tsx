import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

import {
  useEditBookQuery,
  useUpdateBookMutation,
} from "../newbook/newBookEndpoints";
import { IBooks } from "../allbooks/allbooksEndpoints";
import { useEffect } from "react";

export default function EditBook() {
  const { id } = useParams();
  const { data } = useEditBookQuery(id as string);
  const [updateBook, { isSuccess, isError }] = useUpdateBookMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IBooks>();

  const onSubmit = async (data: IBooks) => {
    if (id) {
      await updateBook({ body: data, id: id });
    }
  };
  useEffect(() => {
    setValue("Author", data?.Author as string);
    setValue("Title", data?.Title as string);
    setValue("Genre", data?.Genre as string);
    setValue("PublicationDate", data?.PublicationDate as string);
  }, [data]);
  useEffect(() => {
    if (isSuccess) {
      toast("Book HasBeen Updated");
    } else if (isError) {
      toast("something went wrong");
    }
  }, [isSuccess, isError]);

  return (
    <div className="bg-emerald-500 h-screen flex items-center justify-center">
      <ToastContainer />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" rounded-md flex flex-col gap-y-3 justify-between items-center">
          <p className="text-4xl text-amber-300">Update The Book</p>
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
          Update The Book
        </button>
      </form>
    </div>
  );
}
