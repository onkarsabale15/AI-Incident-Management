function logSuccess(message) {
    console.log(`✅ ${message}`);
  }
  
  function logError(message) {
    console.error(`❌ ${message}`);
  }
  
  function logInfo(message) {
    console.info(`ℹ️ ${message}`);
  }
  
  module.exports = { logSuccess, logError, logInfo };
  