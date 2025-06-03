document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");
  output.innerText = ""; // Clear previous output

  const delay = (value, time) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(value), time);
    });

  // Start the promise chain
  delay(Number(input), 2000)
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delay(result * 2, 1000);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delay(result - 3, 1000);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delay(result / 2, 1000);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delay(result + 10, 1000);
    })
    .then((result) => {
      output.innerText = `Final Result: ${result}`;
    })
    .catch((err) => {
      output.innerText = `Error: ${err.message}`;
    });
});
