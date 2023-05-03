import { writable } from "svelte/store";

export const dragItem = writable({
    title: "",
    description: "",
    type: "",
});

export const prevColumn = writable("");

export const nextColumn = writable("");