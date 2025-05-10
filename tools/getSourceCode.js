const {GITHUB} = require('static_values');
const axios = require('axios');

async function getSourceCode(filePath) {
    try {
        const response = await axios.get(`https://api.github.com/repos/${GITHUB.USERNAME}/${GITHUB.REPO}/contents/${filePath}?ref=main`, {
            headers: {
                'Authorization': `Bearer ${GITHUB.TOKEN}`
            }
        });
        return decodeBase64Browser(response.data.content)
    } catch (error) {
        console.trace(error);
    }
}


function decodeBase64Browser(base64) {
    const binaryString = atob(base64);
    const utf8String = decodeURIComponent(
        binaryString
            .split('')
            .map(char => '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return utf8String;
}
module.exports = getSourceCode;