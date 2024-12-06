import { getAOCInput } from "./inputRetriever.js";

const input = await getAOCInput(2024, 1);

const parsed = input.split('\n');

const left = [];
const right = [];


parsed.map(x => {
    if (x) {
        let [l, r] = x.split("   ");
        left.push(Number(l))
        right.push(Number(r))
    } 
})

left.sort();
right.sort();

let total = 0;
let total2 = 0;
for (let i = 0; i < left.length; i++) {
    //part 1
    total += Math.abs( left[i] - right[i] );

    //part 2
    let currentNum = left[i];
    let numDuplicates = right.filter(x => x === currentNum).length;

    total2 += currentNum * numDuplicates;
}

console.log({
    part1: total, 
    part2: total2
});