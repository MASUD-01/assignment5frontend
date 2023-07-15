import { api } from "../../redux/api/apiSlice";

export interface IBooks {
  _id: string;
  id: number;
  Genre: string;
  PublicationDate: string;
  Title: string;
  Author: string;
}
const createBooksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<void, IBooks>({
      query: (body) => ({
        url: "/book",
        method: "POST",
        body: body,
      }),
    }),
    editBook: builder.query<IBooks, string>({
      query: (id) => ({
        url: `/book/${id}`,
      }),
    }),
  }),
});
export const { useCreateBookMutation, useEditBookQuery } = createBooksApi;
