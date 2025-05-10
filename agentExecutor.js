const {createClickUpTicket, fetchLastErrorTimestamp, getCurrentDateTime, getErroredTraces, getLogsForTraceId, getSourceCode} = require('./tools');
const { chat } = require('./llm');
const { logInfo, logSuccess, logError } = require('./utils/logger');
const { SYSTEM_PROMPT } = require('./prompts/systemPromptJson');

const MESSAGES = [{ role: 'system', content: SYSTEM_PROMPT }];

async function runAgent() {
    logInfo('Starting SRE AI Agent...');
    while (true) {
        const response = await chat(MESSAGES);
        MESSAGES.push({ role: 'assistant', content: JSON.stringify(response) });
        const { type, action, output, ...args }= response;
        if (type === 'output') {
            break;
        }
        else if (type === 'action') {
            const tool_response = await toolManager({action, args});
            if (tool_response) {
                MESSAGES.push({ role: 'assistant', content: JSON.stringify(tool_response) });
            }
        }
    }
    return
}

async function toolManager({action, args}){
    console.log(action)
    switch (action) {
        case "getCurrentDateTime":
            return getCurrentDateTime();
        case "getErroredTraces":
            return getErroredTraces(args.startTime, args.endTime, args.limit);
        case "getLogByTraceId":
            return getLogsForTraceId(args.traceId, args.startTime, args.endTime, args.limit);
        case "getSourceCode":
            return getSourceCode(args.filePath);
        default:
            break;
    }
}

module.exports = { runAgent };