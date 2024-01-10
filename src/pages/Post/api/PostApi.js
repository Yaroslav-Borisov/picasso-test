import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchOnePost: build.query({
            query: (id) => ({
                url: `/posts/${id}`
            })
        })
    })
})