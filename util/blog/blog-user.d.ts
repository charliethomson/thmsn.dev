import { ApiResponse } from ".";

export interface BlogUser {
    id: number;
    attributes: BlogUserAttributes;
}

export interface BlogUserAttributes {
    name: string;
    username: string;
    createdAt: string;
    updatedAt: string;
}

export const getUser: (id: number) => ApiResponse<BlogUser>;