import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query({
            query: (limit) => ({
                url: `/posts?`,
                params: {
                    _limit: limit,
                }
            })
        }),
        fetchOnePost: build.query({
            query: (id) => ({
                url: `/posts/${id}`
            })
        })
    })
})