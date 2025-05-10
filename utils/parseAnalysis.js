function parseAnalysis(analysisText) {
  console.log(analysisText)
    // const title = analysisText.match(/# (.+)/)?.[1] || '500 Error';
    // const description = analysisText.split('## Possible Solutions')[0].trim();
    // const solutionsRaw = analysisText.split('## Possible Solutions')[1] || '';
    // const solutions = solutionsRaw
    //   .split('-')
    //   .map(s => s.trim())
    //   .filter(Boolean);
    // return { title, description, solutions };
  }
  
  module.exports = { parseAnalysis };
  