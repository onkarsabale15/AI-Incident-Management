const axios = require('axios');


async function getErroredTraces(startTime, endTime, limit = 5) {
    const response = await axios.request({
        method: "GET",
        url: `${SRE.GRAFANA.BASEURL}/api/datasources/proxy/uid/tempo/api/search`,
        params: {
            q: '{span.http.status_code=500}',
            limit,
            spss: 3,
            start: startTime?.toString(),
            end: endTime?.toString()
        }
    })
    return response?.data?.traces || [];
}

module.exports = getErroredTraces;
