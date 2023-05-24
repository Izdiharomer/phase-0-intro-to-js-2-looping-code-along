function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
  
  // Example usage
  const names = ['Guadalupe', 'Ollie', 'Aki'];
  const messages = writeCards(names);
  console.log(messages);
  

  const gifts = ["teddy bear", "drone", "doll"];

//while loop
  function wrapGifts(gifts) {
    let i = 0; // the initialization moves OUTSIDE the body of the loop!
    while (i < gifts.length) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      i++; // the iteration moves INSIDE the body of the loop!
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);
  // LOG: Wrapped teddy bear and added a bow!
  // LOG: Wrapped drone and added a bow!
  // LOG: Wrapped doll and added a bow!
  // => ["teddy bear", "drone", "doll"]

  //while loop 
 
  function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

let count = 5;
countDown(count);


 