// 1. findMatching - Case insensitive match
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // 2. fuzzyMatch - Names that begin with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // 3. matchName - Match driver objects based on the name property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Export the functions for testing
  module.exports = { findMatching, fuzzyMatch, matchName };
  
