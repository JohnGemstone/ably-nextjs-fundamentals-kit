# Ably serverless WebSockets and Next.js template

## Description

This [Ably](https://ably.com?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo) and [Next.js](https://nextjs.org) template demonstrates using some of the Ably fundamentals with Next.js. You can build features and use cases upon these fundamentals such as notifications, activity streams, chat, realtime visualisations and dashboards, and collaborative multiplayer experiences.

The Ably fundamentals demonstrated within this template are:

- [Token Authentication](https://ably.com/docs/realtime/authentication?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo#token-authentication) - authenticate and establish a persistent bi-direction connection to the Ably platform.
- [Pub/Sub (Publish/Subscribe)](https://ably.com/docs/realtime/channels?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo) - publish messages on channels and subscribe to channels to receive messages.
- [Presence](https://ably.com/docs/realtime/presence?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo) - keep track of devices that are present on a channel. This is great for tracking if a device is online or offline or indicating if a user is in a chat room when using Ably for Chat.
- [History](https://ably.com/docs/realtime/history?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo) - Retrieve a history of messages that have been published to a channel.

The project uses the following components:

- [Next.js](https://nextjs.org), a flexible React framework that gives you building blocks to create fast web applications.
- [Ably](https://ably.com?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo), for realtime messaging at scale.

## Building & running locally

### Prerequisites

1. [Sign up](https://ably.com/signup?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo) or [log in](https://ably.com/login?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo) to ably.com, and [create a new app and copy the API key](https://faqs.ably.com/setting-up-and-managing-api-keys?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo).
2. To deploy to [Vercel](https://vercel.com), create a Vercel account.

### Configure the app

Create a `.env.local` file with your Ably API key:

```bash
echo "ABLY_API_KEY={YOUR_ABLY_API_KEY_HERE}" > .env.local
```

### Run the Next.js app

```bash
npm run dev
# or
yarn dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fably-labs%2Fably-nextjs-template&env=ABLY_API_KEY)

## Contributing

Want to help contributing to this project? Have a look at our [contributing guide](CONTRIBUTING.md)!

## More info

- [Join the Ably Discord server](https://discord.gg/q89gDHZcBK)
- [Follow Ably on Twitter](https://twitter.com/ablyrealtime)
- [Use the Ably SDKs](https://github.com/ably/)
- [Visit the Ably website](https://ably.com?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo)

## TODO

1. Update the description of this repo.
2. Add [topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to this repo to clarify the language, tech stack and use case.
3. ~~Update the [.gitignore](.gitignore) file with one of the [standard templates from GitHub](https://github.com/github/gitignore).~~
4. Update [dependabot.yml](.github/dependabot.yml) with the [configuration for your project](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates).
5. ~~Replace `https://github.com/ably-labs/ably-labs-template-repo/issues` with the actual link of the repo in the [CONTRIBUTING.md](CONTRIBUTING.md) file.~~
6. ~~Update this README so it provides enough information for people to understand how it works, how to run it locally and how it can be deployed to the cloud (see [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)).~~
7. ~~Update the query string in the static asset link:~~
  - ~~For the logo at the bottom of this README and~~
  - ~~Please use a custom `favicon` if you're creating a web app. The favicon should use the ably static asset endpoint `<link rel="icon" type="image/svg+xml" href="https://static.ably.dev/motif-red.svg?lorem-ipsum" />` and ensure this uses the same unique identifier as the Ably logo on the README.~~
  - ~~More info in [this repo](https://github.com/ably-labs/static-assets).~~
8. Add a GitHub workflow to build/test/deploy your application. Use the [Ably Control API GitHub action](https://github.com/ably-labs/ably-control-api-action) to avoid creating Ably apps/API keys manually (see the `create-infra.yml` workflow in this repo).
9. Add this repository to the [selected repositories in the Ably Labs org](https://github.com/organizations/ably-labs/settings/actions) that are allowed to run GitHub Actions.

---
[![Ably logo](https://static.ably.dev/badge-black.svg?ably-nextjs-template-github-repo)](https://ably.com?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-template&utm_content=ably-nextjs-template&src=GLB-2211-ably-nextjs-template-github-repo)
