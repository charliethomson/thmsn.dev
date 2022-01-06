import axios from "../axios";

import { ApiResponse } from ".";
import { BlogUser } from "./blog-user";

export interface PostGetResult {
    id: number;
    attributes: PostGetResultAttributes;
}

export interface PostGetResultAttributes {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: {
        data: BlogUser;
    };
}

export type PostGetResults = PostGetResult[];

export type GetApiPostsSingle = ApiResponse<PostGetResult>;
export type GetApiPostsAll = ApiResponse<PostGetResults>;

export const getPost = async (id: number): Promise<GetApiPostsSingle> =>
    axios.get(`/posts/${id}?populate=author`).then(res => res.data)

export const getPosts = async (): Promise<GetApiPostsAll> =>
    axios.get(`/posts?populate=author`).then(res => res.data)