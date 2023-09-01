import { AxiosRequestConfig } from 'axios';

import { restApi } from '@/api';
import { ListResponse, User } from '@/types';

const userApi = restApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<ListResponse<User>, AxiosRequestConfig<User>>({
      query: (config) => ({ url: '/user', ...config }),
      providesTags: ['Users'],
    }),

    getMe: builder.query<User, AxiosRequestConfig<User>>({
      query: (config) => ({ url: '/user/profile', ...config }),
    }),

    createUser: builder.mutation<User, User>({
      query: (user) => ({ url: '/user', method: 'POST', data: user }),
      invalidatesTags: ['Users'],
    }),

    updateUser: builder.mutation<User, User>({
      query: (user) => ({ url: '/user/' + user.id, method: 'PUT', data: user }),
      invalidatesTags: ['Users'],
    }),

    deleteUser: builder.mutation<unknown, User>({
      query: (user) => ({ url: '/user/' + user.id, method: 'DELETE' }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export default userApi;
