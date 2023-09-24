import { todoColumnCards, inProgressColumnCards, doneColumnCards } from "../store/ColumnStore"
import type { writable } from "svelte/store";
import { dragItem, prevColumn, nextColumn } from "../store/DragStore";
import type { CardData } from "./Card";

const storeMap: Record<string, ReturnType<typeof writable<CardData[]>>> = {
    "Todo": todoColumnCards,
    "In": inProgressColumnCards,
    "Done": doneColumnCards
}

export function handleDragStart(event: any, card: CardData) {
    // starting a drag operation
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectAllowed = "move";
    dragItem.set(card);
    //set previous column
    const targetParentClass = event.target.parentElement.className;
    //find the column card is in
    todoColumnCards
    prevColumn.set(targetParentClass.split(" ")[2]);

};
export function handleDragOver(event: any) {
    // drag over a valid drop target
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    const targetClass = event.target.className;
    const targetParentClass = event.target.parentElement.className;
    console.log("Child: " + targetClass, "Parent:" + targetParentClass)
    //Set the next column for the card to go
    if (targetParentClass.includes("column") || targetClass.includes("column")) {
        let columnName = targetParentClass.split(" ")[2];
        nextColumn.set(columnName);
    }
}
export function handleDrop (event: any, data: CardData){
    // drop on a valid drop target
    event.preventDefault();
    const targetParentClass = event.target.parentElement.className;
    const targetClass = event.target.className;
    if (targetParentClass.includes("column") || targetClass.includes("column")) {
        let columnName: string = "";
        nextColumn.subscribe(col => columnName = col);
        //Add card to column
        storeMap[columnName].update(cards => {
            //push card if card doesn't exist in column
            if (!cards.includes(data)) {
                cards = [...cards, data];
                return cards;
            }
            return cards;
        })
        //Remove card from previous column
        let prevCol = ""
        prevColumn.subscribe(col => prevCol = col);
        if(prevCol === columnName) return;
        storeMap[prevCol].update(cards => {
            if (cards.includes(data)) {
                cards = cards.filter(card => card !== data);
                return cards;
            }
            return cards;
        })
    }
};