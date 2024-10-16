import { apiPaths } from "@/core/api/apiConstants";
import { baseApi } from "@/core/api/apiQuery";
import { RegisterFormInputs } from "./registerType";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<any, RegisterFormInputs>({
      query: (payload) => {
        const data = {
          email: payload.email,
          profile: {
            full_name: payload.fullName,
            phone: payload.phone,
          },
          password: payload.password,
        };
        return {
          url: apiPaths.registerUrl,
          body: data,
          method: "POST",
        };
      },
    }),
  }),
  overrideExisting: true,
});
export default authApi;
