import { idify, WithId } from "~/util/idify";
import TestPost from "@/components/posts/TestPost.vue";
import { ref, Ref } from "@vue/composition-api";
import { v4 as uuidv4 } from 'uuid';

export class Tag {
    constructor(label: string) { this.label = label }
    public label: string;
    public get link(): string { return `/blog/tags/${this.label}` }
    public id: string = uuidv4();
}


export interface Post {
    title: string;
    component: Object;
    slug: string;
    // use Date.now() to get this
    postedAt: number;
    tags: WithId<Tag>[];
}

const registeredPosts: Ref<WithId<Post>[]> = ref(idify([
    {
        title: "Test post",
        component: TestPost,
        slug: "test-post",
        postedAt: 1641502950368,
        tags: ['rust', 'test', 'traits'].map(label => new Tag(label))
    }
]));


export const getPosts = (): Ref<WithId<Post>[]> => registeredPosts;
export const getPostBySlug = (slug: string): WithId<Post> | undefined => registeredPosts.value.find(post => post.slug === slug);
export const getPostsByTag = (tag: string): WithId<Post>[] => registeredPosts.value.filter(post => post.tags.map(tag => tag.label).includes(tag));