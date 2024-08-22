const express = require('express');
const axios = require('axios');
require('dotenv').config();
console.log('JIRA_DOMAIN:', process.env.JIRA_DOMAIN);
console.log('JIRA_API_TOKEN:', process.env.JIRA_API_TOKEN);
console.log('JIRA_EMAIL:', process.env.JIRA_EMAIL);
console.log('ISSUE_ID:', process.env.ISSUE_ID);

const app = express();
const port = process.env.PORT || 3000;

const jiraDomain = process.env.JIRA_DOMAIN;
const apiToken = process.env.JIRA_API_TOKEN;
const email = process.env.JIRA_EMAIL;

const config = {
  method: 'get',
  url: '',
  headers: { 
    'Authorization': `Basic ${Buffer.from(`${email}:${apiToken}`).toString('base64')}`,
    'Content-Type': 'application/json'
  }
};

async function fetchChangelog(issueIdOrKey) {
  let startAt = 0;
  const maxResults = 100;
  let allChangelogs = [];

  while (true) {
    config.url = `${jiraDomain}/rest/api/3/issue/${issueIdOrKey}?expand=changelog&startAt=${startAt}&maxResults=${maxResults}`;
    
    try {
      const response = await axios(config);
      const changelog = response.data.changelog;

      allChangelogs = allChangelogs.concat(changelog.histories);

      if (changelog.total <= startAt + maxResults) {
        break;
      }

      startAt += maxResults;

    } catch (error) {
      console.error('Error fetching changelog:', error);
      break;
    }
  }

  return allChangelogs;
}

app.get('/changelog/:issueId', async (req, res) => {
  const issueIdOrKey = req.params.issueId;

  try {
    const changelog = await fetchChangelog(issueIdOrKey);
    res.json(changelog);
  } catch (error) {
    res.status(500).send('Error retrieving changelog');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
