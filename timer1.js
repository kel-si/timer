const args = process.argv.slice(2).filter(number => {
  return number > 0;
});
for (const arg of args) {
  if (arg === "") {
    process.exit(); //works!
  }
  setTimeout(() => {
    process.stdout.write("<3");
  }, arg * 1000);
}