export interface Meta {
    meta: {
        pagination?: Pagination;
    },
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface Data<T> {
    data: T,
}


export type ApiResponse<T> = Data<T> & Meta;
