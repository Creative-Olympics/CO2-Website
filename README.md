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


Admin App
====

[![Download](https://media.discordapp.net/attachments/346737406591893506/1146859320429006928/co.rahmouni.dev__5.png)](http://url.creative-olympics.org/admin-app)&nbsp; [![Explore files](https://media.discordapp.net/attachments/346737406591893506/1146854635550822430/co.rahmouni.dev__2.png)](./android-admin/)

- **Technologies:** Koltin, Jetpack Compose

Website
====

[![Visit website](https://media.discordapp.net/attachments/346737406591893506/1146855771057963008/co.rahmouni.dev__4.png)](https://co.rahmouni.dev)&nbsp; [![Explore files](https://media.discordapp.net/attachments/346737406591893506/1146854635550822430/co.rahmouni.dev__2.png)](./website/)

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

<details>
<summary>
![See more scripts](https://media.discordapp.net/attachments/346737406591893506/1146877882354897036/co.rahmouni.dev__8.png)
</summary>
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
