import { api } from "../../redux/api/apiSlice";
export interface IBooks {
  _id: string;
  id: number;
  Genre: string;
  PublicationDate: string;
  Title: string;
  Author: string;
}
const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query<{ data: IBooks[]; status: boolean }, void>({
      query: () => "/books",
      providesTags: ["Book"],
    }),
  }),
});
export const { useGetAllBooksQuery } = booksApi;
