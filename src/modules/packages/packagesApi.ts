import { baseApi } from "@/core/api/apiQuery";
import { apiPaths } from "@/core/api/apiConstants";
import { PackageType, PackageTypeValidation } from "./packagesType";
import { PaginatedResponseType } from "@/core/types/responseTypes";

const packagesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPackage: builder.mutation<PackageType, Omit<PackageType, "id">>({
      query: (payload) => {
        const { registry, socials, title, description, version } = payload;

        const data = {
          registry,
          socials,
          title,
          description,
          version,
        };
        return {
          url: apiPaths.packagesUrl,
          method: "POST",
          body: data,
        };
      },
    }),

    // Get All packages
    getPackages: builder.query<
      PaginatedResponseType<PackageTypeValidation>,
      number
    >({
      query: (pageNumber) => `${apiPaths.packagesUrl}/?page=${pageNumber}`,
      providesTags: (response) =>
        response
          ? [
              ...response?.results?.map(
                ({ id }) => ({ type: "Packages", id: id } as const)
              ),
              { type: "Packages", id: "LIST" },
            ]
          : [{ type: "Packages", id: "LIST" }],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      transformResponse: (response: any) => {
        return response as PaginatedResponseType<PackageTypeValidation>;
      },
    }),

    // Get each pakage by id
    getPackageById: builder.query<PackageTypeValidation, string>({
      query: (id) => `${apiPaths.packagesUrl}/${id}`,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs}`;
      },
      providesTags: (result, error, id) => [{ type: "Packages", id }],
      transformResponse: (response) => {
        console.log("response", response);
        return response as PackageTypeValidation;
      },
    }), 

    // Delete a package by ID
    deletePackage: builder.mutation<void, string>({
      query: (id) => ({
        url: `${apiPaths.packagesUrl}/${id}`,
        method: "DELETE",
      }),
    }),

    // Update a package by ID
    updatePackage: builder.mutation<
      PackageType,
      { id: string; data: Omit<PackageType, "id"> }
    >({
      query: ({ id, data }) => ({
        url: `${apiPaths.packagesUrl}/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export default packagesApi;
