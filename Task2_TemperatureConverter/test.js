const { celsiusToFahrenheit, fahrenheitToCelsius } = require("./converter");

function runTests() {
  let passed = 0;
  let failed = 0;

  try {
    if (celsiusToFahrenheit(0) === 32) {
      console.log("Test Passed: 0°C → 32°F");
      passed++;
    } else throw new Error("Test Failed: 0°C");

    if (celsiusToFahrenheit(100) === 212) {
      console.log("Test Passed: 100°C → 212°F");
      passed++;
    } else throw new Error("Test Failed: 100°C");

    if (fahrenheitToCelsius(212) === 100) {
      console.log("Test Passed: 212°F → 100°C");
      passed++;
    } else throw new Error("Test Failed: 212°F");

  } catch (error) {
    console.error(error.message);
    failed++;
  }

  console.log(`\nSummary: ${passed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0); // exit with error code if any failed
}

runTests();
