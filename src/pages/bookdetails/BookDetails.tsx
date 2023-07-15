import { Link, useLocation } from "react-router-dom";

export default function BookDetails() {
  let { state } = useLocation();

  return (
    <div>
      <div className="my-5 flex justify-center gap-2">
        <Link
          to={`/editbook/${state.book._id}`}
          state={{ state }}
          className="bg-green-400 p-2 rounded-md shadow-md"
        >
          Edit Book
        </Link>
        <button className="bg-red-400 p-2 rounded-md shadow-md">
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
