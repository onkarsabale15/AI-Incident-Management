const {SRE} = require('static_values');
const axios = require('axios');

async function getLogsForTraceId(traceId, from, to) {
    // Prepare the data for the request
    let data = JSON.stringify({
        queries: [
            {
                expr: `{level="ERROR"} | json | traceid="${traceId}"`,
                datasource: {
                    type: "loki"
                },
                legendFormat: "",
                datasourceId: 3
            }
        ],
        from: (from*1000).toString(),
        to: (to*1000).toString()
    });

    // Make the API request
    const response = await axios.request({
        url: `${SRE.GRAFANA.BASEURL}/api/ds/query`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data
    });

    // Process and return the logs
    const logs = []
    response.data.results?.A?.frames?.forEach(frame => {
        logs.push(frame?.data?.values?.forEach(value => {
          value?.forEach(valueItem => {
              if(typeof valueItem =="object"){
                logs.push(valueItem)
            }
          });  
        }))
    });
    
    return logs;
}

module.exports = getLogsForTraceId;
