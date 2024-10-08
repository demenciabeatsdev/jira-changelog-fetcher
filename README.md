# Jira Changelog Fetcher

This project fetches the complete changelog of a Jira issue using the Jira REST API.

## How to run

1. **Configure the `.env` file** with your Jira credentials and project details. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```plaintext
   JIRA_DOMAIN=https://your-jira-instance.atlassian.net
   JIRA_API_TOKEN=your_api_token
   JIRA_EMAIL=your_email@example.com
   PORT=3000
   ```

   Replace `https://your-jira-instance.atlassian.net`, `your_api_token`, and `your_email@example.com` with your actual Jira domain, API token, and email.

2. **Ensure you are in the root directory of your project (`jira-changelog-fetcher`)**, and then run the following commands to install the necessary dependencies:

   ```bash
   cd /path/to/your/project/jira-changelog-fetcher
   npm install
   ```

3. **Run the project in development mode** using:

   ```bash
   npm run dev
   ```

4. **Consume the API**: Open your web browser or a tool like Postman, and access the following URL to get the changelog for the Jira issue `TR-62`:

   ```plaintext
   http://localhost:3000/changelog/TR-62
   ```

5. **View the Output**: The output will be a JSON object containing the changelog history for the specified Jira issue.
