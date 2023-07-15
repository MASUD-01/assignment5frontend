import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDeleteBookMutation } from "../newbook/newBookEndpoints";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../redux/hooks";
export default function BookDetails() {
  let { state } = useLocation();
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteBook, { isSuccess, isError }] = useDeleteBookMutation();
  useEffect(() => {
    if (isSuccess) {
      toast("Book HasBeen Deleted");
    } else if (isError) {
      toast("something went wrong");
    }
  }, [isSuccess, isError]);
  return (
    <div>
      <ToastContainer />
      <div className="my-5 flex justify-center gap-2">
        <Link
          to={`/editbook/${state.book._id}`}
          state={{ state }}
          className="bg-green-400 p-2 rounded-md shadow-md"
        >
          Edit Book
        </Link>
        <button
          onClick={async () => {
            if (user.email) {
              alert("confirm to delete");
              await deleteBook(id as string);
              setTimeout(() => {
                navigate("/allbooks");
              }, 1000);
            } else {
              navigate("/login");
            }
          }}
          className="bg-red-400 p-2 rounded-md shadow-md"
        >
          Delete Book
        </button>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-3 border p-2 shadow-lg w-64 h-auto rounded-md">
          <div>
            <div className="bg-red-200 w-full h-28"></div>
          </div>
          <p>
            {" "}
            <span className="text-2xl">Title:</span> {state.book.Title}
          </p>
          <p>
            Author: <span>{state.book.Author}</span>
          </p>
          <p>
            Genre: <span>{state.book.Genre}</span>
          </p>
          <p>
            Publication Date: <span>{state.book.PublicationDate}</span>
          </p>
          <p>
            Review:
            <div className="border"></div>
          </p>
          <div>
            {state?.book?.reviews?.map((review: string) => (
              <>
                <p>
                  <span>{review}</span>
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
