const knapsackAdvanced = (items, weightAvailable) => {
    const table = [];
    for (let itemIndex = 0; itemIndex <= items.length; itemIndex += 1) {
      table.push([]);
      for (let capacity = 0; capacity <= weightAvailable; capacity += 1) {
        if (itemIndex === 0) {
          table[itemIndex].push(0); // initialize the first row to 0
          continue;
        }
        //should we take an item, or should we not?
        //taking an item ----> we must look up one row and weight columns back, then add curr value
        //leavingh an item ----> look up one row
        table[itemIndex][capacity] = decideToTakeOrNot(table[itemIndex - 1], items[itemIndex - 1], capacity);
      }
    }
    return table[items.length][weightAvailable]; // maximum value for given items and capacity
  };


  // previous row
  const decideToTakeOrNot = (decisionsSoFar, item, capacity) => {
    let take = 0;
    let not = decisionsSoFar[capacity]; // value without including the current item
    if (item.weight <= capacity) {
      let remainingCapacity = capacity - item.weight;
      take = item.value + decisionsSoFar[remainingCapacity]; // value including the current item
    }
    return Math.max(take, not); // max value by including or not including the item
  };


  const items = [
{ weight: 1, value: 3},
{ weight: 2, value: 4},
{ weight: 3, value: 5}
  ]


  console.log(knapsackAdvanced(items, 3))
  console.log(knapsackAdvanced(items, 5))