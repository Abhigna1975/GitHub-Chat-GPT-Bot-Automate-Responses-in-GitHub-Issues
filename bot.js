const { Octokit } = require("@octokit/rest");
const { Configuration, OpenAIApi } = require("openai");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

async function run() {
  const { owner, repo, issue_number } = getIssueDetails(); // Fetch issue details

  const issue = await octokit.issues.get({
    owner,
    repo,
    issue_number,
  });

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Respond to this GitHub issue: ${issue.data.body}`,
    max_tokens: 100,
  });

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number,
    body: response.data.choices[0].text,
  });
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

function getIssueDetails() {
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  const issue_number = process.env.ISSUE_NUMBER;
  return { owner, repo, issue_number };
}
