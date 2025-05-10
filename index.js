const { runAgent } = require('./agentExecutor');

(async () => {
  try {
    console.log('🚀 Starting SRE AI Agent...');
    await runAgent();
    console.log('🏁 Agent completed.');
  } catch (error) {
    console.error('❌ Agent crashed:', error);
  }
})();
