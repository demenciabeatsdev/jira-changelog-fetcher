
# Jira Changelog Fetcher

This project fetches the complete changelog of a Jira issue using the Jira REST API.

## How to run

1. Configure the `.env` file with your Jira credentials and project details.
2. Run the project in development mode using:

   ```bash
   npm run dev

3.Make sure you are in the root directory of your project (jira-changelog-fetcher), and then run the following:

   ```bash
   cd /path/to/your/project/jira-changelog-fetcher
   ```bash
   npm install axios dotenv express nodemon --save-dev

4.Consume the API:

Open your web browser or a tool like Postman, and access the following URL to get the changelog for the Jira issue TR-62:

    http://localhost:3000/changelog/TR-62
    
View the Output:

The output will be a JSON object containing the changelog history for the specified Jira issue.