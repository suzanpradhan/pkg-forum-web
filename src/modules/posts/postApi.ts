import { apiPaths } from "@/core/api/apiConstants";
import { baseApi } from "@/core/api/apiQuery";
import { PaginatedResponseType } from "@/core/types/responseTypes";
import { PostFormInputs, PostType } from "./postType";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<PostType, PostFormInputs>({
      query: (payload) => {
        return {
          url: apiPaths.postsUrl + "/",
          method: "POST",
          body: {
            title: payload.title,
            content: payload.content,
            tags: payload.tags,
            author: payload.author,
            package: payload.author,
          },
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    //updatepost
    updatePost: builder.mutation<PostType, PostFormInputs>({
      query: (payload) => ({
        url: `${apiPaths.postsUrl}/${payload.id}/`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Posts", id: id ?? 0 },
      ],
    }),

    // Query to get all posts with pagination
    getAllPosts: builder.query<PaginatedResponseType<PostType>, number>({
      query: (pageNumber) => `${apiPaths.postsUrl}/?page=${pageNumber}`,
      providesTags: (response) =>
        response
          ? [
              ...response.results.map(() => ({ type: "Posts" } as const)),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      transformResponse: (response: PaginatedResponseType<PostType>) => {
        return response;
      },
    }),

    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `${apiPaths.postsUrl}/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Posts", id }, // Invalidate the deleted post from the cache
        { type: "Posts", id: "LIST" }, // Optionally invalidate the post list
      ],
    }),

    // Get each post by id
    getPostById: builder.query<PostFormInputs, string>({
      query: (id) => `${apiPaths.postsUrl}/${id}`,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs}`;
      },
      providesTags: (result, error, id) => [{ type: "Posts", id }],
      transformResponse: (response) => {
        console.log("response", response);
        return response as PostFormInputs;
      },
    }),
  }),
  overrideExisting: true,
});

export default postApi;
