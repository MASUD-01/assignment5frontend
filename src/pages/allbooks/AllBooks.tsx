import { useState } from "react";
import { useGetAllBooksQuery } from "./allbooksEndpoints";

export default function AllBooks() {
  const [search, setSearch] = useState<string>();
  const { data } = useGetAllBooksQuery(undefined);
  console.log(data);
  let filteredBooks = data?.data?.filter((book) => {
    if (search) {
      return book.Title.toLowerCase() === search?.toLowerCase();
    } else {
      return data?.data;
    }
  });
  console.log(filteredBooks);
  return (
    <div className=" mt-10 flex gap-3 container m-auto">
      <div className="w-[400px] p-2 border flex items-center flex-col">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
        />
      </div>
      <div className=" flex justify-start gap-3">
        {filteredBooks?.map((book, index) => (
          <div key={index} className="flex justify-start">
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
