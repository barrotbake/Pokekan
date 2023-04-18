import { writable } from "svelte/store";

export const dragItem = writable({
    title: "",
    description: "",
});

export const prevColumn = writable("");

export const nextColumn = writable("");