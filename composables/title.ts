import { useMeta } from "@nuxtjs/composition-api";
import { ComputedRef, ref, watch } from "@vue/composition-api";
import { getNextTitle } from "~/util/title";

const TITLE_PREFIX = "charlie thomson - "

export const title = ref('');

export const setTitle = (newTitle: string) => {
    title.value = newTitle;
}


export const bindTitle = (route: ComputedRef<{ path: string }>) => {
    const meta = useMeta();

    const handleNewRoute = (nextRoute: { path: string }) => setNewTitle(getNextTitle(nextRoute.path))
    const setNewTitle = (title: string) => meta.title.value = `${TITLE_PREFIX}${title}`

    handleNewRoute(route.value)

    watch(route, handleNewRoute);
    watch(title, setNewTitle)
}