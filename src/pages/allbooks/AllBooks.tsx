import { useState } from "react";
import { IBooks, useGetAllBooksQuery } from "./allbooksEndpoints";
import { Link } from "react-router-dom";
export default function AllBooks() {
  const [search, setSearch] = useState<string>("");
  const { data } = useGetAllBooksQuery(undefined);
  // Assuming you have a state variable to store the selected option value
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOptionByYear, setSelectedOptionByYear] = useState<string>("");

  // Event handler for the select change event

  let filteredBooks: IBooks[] | undefined = [];
  if (search || selectedOption || selectedOptionByYear) {
    const searchQuery = search?.toLowerCase().trim() as string;
    filteredBooks = data?.data?.filter((book) => {
      const genre = book.Genre?.toLowerCase().trim();
      const author = book.Author?.toLowerCase().trim();
      const title = book.Title?.toLowerCase().trim();
      const year = book.PublicationDate?.toLowerCase().trim();

      return (
        (genre.includes(searchQuery) ||
          author.includes(searchQuery) ||
          year.includes(selectedOptionByYear) ||
          title.includes(searchQuery)) &&
        (selectedOption === "" || genre === selectedOption)
      );
    });
  } else {
    filteredBooks = data?.data ?? [];
  }
  return (
    <div className=" mt-10 flex gap-3 container m-auto">
      <div className="w-[400px] p-2 gap-3 border flex items-center flex-col">
        <Link to="/newbook" className="shadow-lg bg-orange-300 p-2 rounded-md">
          Add New Book
        </Link>
        <input
          onChange={(e) =>
            setTimeout(() => {
              setSearch(e.target.value);
            }, 300)
          }
          type="text"
          placeholder="search"
          className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
        />
        <div>
          <p className="p-2">Search By Genre:</p>
          <select
            name=""
            id=""
            value={selectedOption}
            onChange={async (e) => setSelectedOption(e.target.value)}
            className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
          >
            <option value="">All Genres</option>
            <option value="fiction">Fiction</option>
            <option value="horror">Horror</option>
          </select>
        </div>

        <div>
          <p className="p-2">Searh By Year:</p>
          <select
            name=""
            id=""
            value={selectedOptionByYear}
            onChange={async (e) => setSelectedOptionByYear(e.target.value)}
            className="border h-8 w-64 border-orange-300 rounded-md focus:outline-none px-1"
          >
            <option value="">All Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      <div className=" grid grid-cols-3 justify-start gap-3">
        {filteredBooks?.map((book, index) => (
          <Link
            to={`/bookdetails/${book._id}`}
            state={{ book: book }}
            key={index}
          >
            <div className="flex justify-start">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
