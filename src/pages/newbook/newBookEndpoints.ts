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
      invalidatesTags: ["Book"],
    }),
    editBook: builder.query<IBooks, string>({
      query: (id) => ({
        url: `/book/${id}`,
      }),
      providesTags: ["Book"],
    }),
    updateBook: builder.mutation<void, { body: Partial<IBooks>; id: string }>({
      query: ({ body, id }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});
export const {
  useCreateBookMutation,
  useEditBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = createBooksApi;
