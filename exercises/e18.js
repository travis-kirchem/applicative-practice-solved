/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const frequency = {};

  for (let asteroid of data.asteroids) {
    const year = asteroid.discoveryYear;
    frequency[year] = (frequency[year] || 0) + 1;
  }

  let maxCount = 0;
  for (let year in frequency) {
    if (frequency[year] > maxCount) {
      maxCount = frequency[year];
    }
  }

  const mostFrequentYears = [];
  for (let year in frequency) {
    if (frequency[year] === maxCount) {
      mostFrequentYears.push(Number(year));
    }
  }

  return mostFrequentYears[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
