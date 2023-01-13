import { getScreenWidth } from "./helper";
import { BubbleSort } from "../sortFunctions/BubbleSort";
import { SelectionSort } from "../sortFunctions/SelectionSort";
import { InsertionSort } from "../sortFunctions/InsertionSort";
import { QuickSort } from "../sortFunctions/QuickSort";
import { HeapSort } from "../sortFunctions/HeapSort.js";
import { MergeSort } from "../sortFunctions/MergeSort";

// colors setting
export const comparisionColor = "red";
export const swapColor = "orange";
export const sortedColor = "green";
export const pivotColor = "yellow";

// time setting
export let swapTime = 1000;
export let compareTime = 500;
export let complexity=0;
// init array
export let sortingArray = initArrayForScreenSize();

export const sortingAlgorithms = [
  { component: BubbleSort, title: "Bubble", name: "BubbleSort" },
  { component: SelectionSort, title: "Selection", name: "SelectionSort" },
  { component: InsertionSort, title: "Insertion", name: "InsertionSort" },
  { component: HeapSort, title: "Heap", name: "HeapSort" },
  { component: MergeSort, title: "Merge", name: "MergeSort" },
  { component: QuickSort, title: "Quick", name: "QuickSort" },
];

function initArrayForScreenSize() {
  const screenSize = getScreenWidth();
  if (screenSize < 460) return [19,2,5,4];
  else if (screenSize < 720) return [8,6,11,9,14,1,3,15];
  return [19,2,5,4,8,6,11,9,14,1,3,15];
}
