# GitHub-Chat-GPT-Bot-Automate-Responses-in-GitHub-Issues
A ChatGPT bot to respond to your GitHub Issues

flows.network Discord flows.network Twitter Create a flow

Deploy this function on flows.network, and you will get a GitHub bot that uses ChatGPT to respond to every comment in your GitHub issues automatically. It enables developers to use GitHub Issues as the conversational UI for ChatGPT!

See a live demo here | Powered by gpt4, Rust and WasmEdge.

IMPORTANT NOTICE: If you have deployed this function on flows.network before 7 AM 24/03/2023(UTC), please refer to this issue to fix your GitHub App.

Prerequisites
You will need to bring your own OpenAI API key. If you do not already have one, sign up here.

Deploy ChatGPT GitHub App on your GitHub repo
To install the ChatGPT GitHub App, we will use flows.network, a serverless platform that makes deploying your own app quick and easy in just three steps.

Fork this repo
Fork this repo and go to flows.network to deploy your function.

Deploy the code on flow.network
Log into flows.network from your GitHub account. It's free.

Click on the "Create a Flow" button to start deploying the ChatGPT bot

Authenticate flows.network to access the chatgpt-github-app repo you just forked. 
![image](https://github.com/user-attachments/assets/6af62da6-48dd-4421-8569-2e1ac1a6227f)


Click on the Advanced text and you will see more settings. we can fill in the required Environment Variables here. In this example, we have four variables.

login: Fill in your personal GitHub id here. The GitHub app will act as you when responding to questions.
owner: Fill in the GitHub org you want to deploy the bot on.
repo : Fill in the GitHub repo you want to deploy the bot on.
openai_key_name : Fill in the name you want for your OpenAI key. You can put any name here, and we will connect it to the actual key later.
![image](https://github.com/user-attachments/assets/85c4ebcf-88b7-4ac8-bb25-9921b61ce140)


Click on the Deploy button to deploy your function.
Configure SaaS integrations
After that, flows.network will direct you to configure the SaaS integration required by your flow.

![image](https://github.com/user-attachments/assets/eaa33063-8637-4593-bf36-a5ac88791f90)


Here we can see, we need to configure two SaaS integrations.

Click on the "Connect" or "+ Add new authentication" button to authenticate your OpenAI account. On the next page, copy and paste your OpenAI API key and then name the key. Note the name you enter here should be the same as the name in the environment variables.
![image](https://github.com/user-attachments/assets/5013c3de-a4af-4b55-80e5-0691ebf89009)


Click on the "Connect" or "+ Add new authentication" button to authenticate your GitHub account to deploy the bot. You'll be redirected to a GitHub page where you must grant flows.network permission to install the flows-network-integration bot on an owner/repo. This repo is the one you entered into the environment variables above.
Click on the Check button to see your flow details. As soon as the flow function's status becomes ready and the flow's status became running, the ChatGPT GitHub App goes live. Go ahead and chat with ChatGPT by creating an issue!

![image](https://github.com/user-attachments/assets/abd67076-e7f9-4ff3-9f39-daf90cb4da09)
