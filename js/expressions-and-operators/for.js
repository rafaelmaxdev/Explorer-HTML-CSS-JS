for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  if (i === 2) {
    break;
  }

  console.log(i); // 10 9 8 7 6 4 3
}
