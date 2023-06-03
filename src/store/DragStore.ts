import { writable } from "svelte/store";

export const dragItem = writable({
    title: "",
    description: "",
    type: "",
    id: 0
});

export const prevColumn = writable("");

export const nextColumn = writable("");