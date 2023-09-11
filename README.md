<div align='center'>
    <h1><b>🐢 Creative Olympics 🔥</b></h1>
    <img src='./website/src/lib/assets/logo/full.gif' width='250' height='250' />
    <p>This is the repository for the Creative Olympics website and Admin App</p>

![Website version](https://badgen.net/badge/Website%20version/Alpha/red?) ![App version](https://badgen.net/badge/App%20version/Alpha/red?)

</div>

---

Repo
====

[![Issue board](https://media.discordapp.net/attachments/346737406591893506/1146859978813087925/co.rahmouni.dev__7.png)](https://url.creative-olympics.org/board)&nbsp; [![Current Sprint](https://media.discordapp.net/attachments/346737406591893506/1146859651242143825/co.rahmouni.dev__6.png)](https://url.creative-olympics.org/sprint)

<br/>

Issues / tasks are all categorized using the following labels:

- **Priorities:** ~P0 ~P1 ~P2 ~P3 ~P4 
- **Progress:** ~Planned ~Doing ~"A/B" ~Clean
- **A/B progress:** ~Pending ~"25%" ~"50%" ~"75%"
- **Main features:** ~Feature
- **Type (Issue):** ~accessibility ~enhancement ~performance ~SEO
- **Type (Meta):** ~discussion ~documentation ~refactor
- **Bugs:** ~bug (+~confirmed if replicable)

Progress labels are used as categories on the [issue board](https://url.creative-olympics.org/board).

Priorities follow the [Google Issue Tracker issue priorities](https://developers.google.com/issue-tracker/concepts/issues#priority) guidelines:

| Priority | Description |
| ------ | ------ |
| ~P0 | An issue that needs to be addressed immediately and with as many resources as is required. Such an issue causes a full outage or makes a critical function of the product to be unavailable for everyone, without any known workaround. |
| ~P1 | An issue that needs to be addressed quickly. Such an issue significantly impacts a large percentage of users; if there is a workaround it is partial or overly painful. The impact of the issue is to a core organizational function, or fundamentally impedes another team. |
| ~P2 | An issue that needs to be addressed on a reasonable timescale. Such an issue could be any of the following: <br/>・ An issue that would be ~P0 or ~P1 but has a reasonable workaround<br/>・ An issue that is important to a large percentage of users and is connected to core organizational functions<br/>・ An issue that is an impediment to the work of other teams and has no reasonable workaround.|
| ~P3 | An issue that should be addressed when able. Such an issue is relevant to core organizational functions or the work of other teams, but does not impede progress or else has a reasonable workaround. |
| ~P4 | An issue that should be addressed eventually. Such an issue is not relevant to core organizational functions or the work of other teams, or else it relates only to the attractiveness or pleasantness of the system. |

Admin App
====

[![Download](https://media.discordapp.net/attachments/346737406591893506/1146859320429006928/co.rahmouni.dev__5.png)](http://url.creative-olympics.org/admin-app)&nbsp; [![Explore files](https://media.discordapp.net/attachments/346737406591893506/1146854635550822430/co.rahmouni.dev__2.png)](./android-admin/)

<br/>

- **Technologies:** Koltin, Jetpack Compose

Website
====

[![Visit website](https://media.discordapp.net/attachments/346737406591893506/1146855771057963008/co.rahmouni.dev__4.png)](https://co.rahmouni.dev)&nbsp; [![Explore files](https://media.discordapp.net/attachments/346737406591893506/1146854635550822430/co.rahmouni.dev__2.png)](./website/)

<br/>

- **Technologies:** Svelte, Vite, Tailwind CSS
- **Hosting:** Firebase Hosting

**Scripts:**

Run the website in dev mode:
```bash
npm run dev
# concurrently \"vite build\" \"cross-env TAILWIND_MODE=watch cross-env NODE_ENV=development postcss src/app.css -o src/app-output.css -w\"
```

Build a production version of the website:
```bash
npm run build
# npm run cross-env TAILWIND_MODE=build cross-env NODE_ENV=production postcss src/app.css -o src/app-output.css && vite build
```

Preview the production version of the website:
```bash
npm run preview
# vite preview
```

<br/>

<details>
<summary><a><img src="https://media.discordapp.net/attachments/346737406591893506/1146877882354897036/co.rahmouni.dev__8.png"/></a></summary>
<br/>

ONLY Run the website in dev mode (without Tailwind):
```bash
npm run dev:only
# vite build
```

ONLY Build a production version of the website (without Tailwind):
```bash
npm run build:only
# vite build
```

Tailwind watch:
```bash
npm run tailwind:watch
# cross-env TAILWIND_MODE=watch cross-env NODE_ENV=development postcss src/app.css -o src/app-output.css -w
```

ONLY Build a production version of Tailwind (without the website):
```bash
npm run tailwind:build
# cross-env TAILWIND_MODE=build cross-env NODE_ENV=production postcss src/app.css -o src/app-output.css
```

Run the website in dev mode and make it available to the local network (or the whole internet if you open the ports in your router):
```bash
npm run devhost
# concurrently \"npm run dev:only -- --host\" \"npm run tailwind:watch\"
```

Lint:
```bash
npm run lint
# prettier --plugin-search-dir . --check . && eslint .
```

Format:
```bash
npm run format
# prettier --plugin-search-dir . --write .
```
</details>

Back-end
====
- **Technologies:** Firebase Remote Config, Firestore Database, Firebase Realtime Database, Firebase Cloud Functions, Firebase Cloud Messaging

Docs
====
 - [Giveaways](./docs/giveaways/doc.md)
