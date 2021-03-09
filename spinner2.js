for (let i = 0; i < 8; i++) {
  let result = "";
  if (i === 0 || i === 4) {
    result = "|";
  } else if (i === 1 || i === 5) {
    result = "/";
  } else if (i === 2 || i === 6) {
    result = "-";
  } else if (i === 3 || i === 7) {
    result = "\\";
  };
  setTimeout(() => {
    process.stdout.write(`\r${result}   `);
  }, 200 * i);

}

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1700);

