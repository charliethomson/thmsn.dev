import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { Pagination } from '~/util/blog';
import { BlogUser } from '~/util/blog/blog-user';
import { getPosts, PostGetResult, PostGetResults } from '~/util/blog/posts';

export const state = (): IState => ({
    posts: [],
    pagination: undefined,
    authors: [],
    initialGetCompleted: false,
})

export interface IState {

    posts: PostGetResult[],
    pagination?: Pagination,
    authors: BlogUser[],
    initialGetCompleted: boolean,
}

export type RootState = ReturnType<typeof state>;

export const actions: ActionTree<RootState, RootState> = {
    async getPosts({ commit }) {
        const { posts, pagination } = await getPosts().then((data) => ({
            posts: data.data,
            pagination: data.meta.pagination,
        }));
        commit("addPosts", posts);
        commit("setPagination", pagination);
        commit("setInitialGetCompleted", true);
    },
}

export const mutations: MutationTree<RootState> = {
    addPosts(state, payload: PostGetResult[]) {
        state.posts = [...state.posts, ...payload.filter((post: PostGetResult) =>
            state.posts.find((p: PostGetResult) => p.id === post.id) === undefined)
        ];
    },
    setPagination(state, payload: Pagination) {
        state.pagination = payload;
    },
    setInitialGetCompleted(state, payload: boolean) {
        state.initialGetCompleted = payload;
    },
}