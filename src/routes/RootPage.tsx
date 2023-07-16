import { useGetAllBooksQuery } from "../pages/allbooks/allbooksEndpoints";

export default function RootPage() {
  const { data } = useGetAllBooksQuery(undefined);
  return (
    <div className="h-auto p-4">
      <div className=" grid grid-cols-4 gap-2">
        {data?.data?.map((book, index) => (
          <div className="flex justify-start" key={index}>
            <div className="flex flex-col gap-y-3 border p-2 shadow-lg w-64 h-auto rounded-md">
              <div>
                <div className="bg-red-200 w-full h-28"></div>
              </div>
              <p>
                {" "}
                <span className="text-2xl">Title:</span> {book.Title}
              </p>
              <p>
                Author: <span>{book.Author}</span>
              </p>
              <p>
                Genre: <span>{book.Genre}</span>
              </p>
              <p>
                Publication Date: <span>{book.PublicationDate}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
