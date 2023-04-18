import { writable } from 'svelte/store';
import type { CardData } from '../lib/Card';

const initTodoColumnCards: CardData[] = [
    {
        title: "Card 1",
        description: "This is a card"
    },
    {
        title: "Card 2",
        description: "This is a card"
    },
    {
        title: "Card 3",
        description: "This is a card"
    }
]
const initInProgressColumnCards: CardData[] = [];
const initDoneColumnCards: CardData[] = [];

export const todoColumnCards = writable(initTodoColumnCards);
export const inProgressColumnCards = writable(initInProgressColumnCards);
export const doneColumnCards = writable(initDoneColumnCards);