import { apiPaths } from "@/core/api/apiConstants";
import { baseApi } from "@/core/api/apiQuery";
import { PaginatedResponseType } from "@/core/types/responseTypes";
import { PostFormInputs, PostType } from "./postType";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<PostType, Omit<PostType, "id">>({
      query: (payload) => {
        const { title, author, content, package: packageType } = payload;

        const data = {
          title,
          author,
          content,
          package: packageType,

        };

        return {
          url: apiPaths.postsUrl + "/",
          method: "POST",
          body: data,
        };
      },
    }),

    // Query to get all posts with pagination
    getAllPosts: builder.query<PaginatedResponseType<PostFormInputs>, number>({
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
      transformResponse: (response: PaginatedResponseType<PostFormInputs>) => {
        return response;
      },
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
