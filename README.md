# Hu Tao

![Banner](https://media.discordapp.net/attachments/946013429200723989/1132633493608865843/bannerr.png)

Hu Tao from character.ai in the form of Discord bot

## 💭 Usage

Try it now in my Discord server: https://discord.gg/8sSfCNCXHW.

-   `!ping`
    = Check bot connection
-   `!chat`
    = Create new conversation

## 🖼️ Preview

![Chat](https://cdn.discordapp.com/attachments/946013429200723989/1132626123579211796/image.png)

## 🔥 Setup

If you want your own bot and use another character

### ⚙️ Env Variables

-   How to get CAI_TOKEN: https://github.com/realcoloride/node_characterai#using-an-access-token
-   How to get CAI_CHARACTER_ID: https://github.com/realcoloride/node_characterai#finding-the-character-id

### 🖥️ Run Locally

> Requirements: Nodejs v18

```
$ git clone https://github.com/BayuDC/hu-tao.git
$ pnpm install
$ pnpm start
```

### 🐋 Docker Usage

```
$ docker pull ghcr.io/bayudc/hu-tao
$ docker run --env-file .env --name hu-tao ghcr.io/bayudc/hu-tao
```
