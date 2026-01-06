# Cloudflare Pages Deployment Guide

Cloudflare Pages is an excellent choice for hosting your portfolio. It's fast, secure, and free.

## Prerequisites
1.  **GitHub Account**: You need your code in a GitHub repository.
2.  **Cloudflare Account**: Sign up at [dash.cloudflare.com](https://dash.cloudflare.com).

## Step 1: Push Your Code to GitHub
(If you haven't done this yet)
1.  Create a **new repository** on GitHub (e.g., `my-portfolio`).
2.  Open your project folder in the terminal/VS Code.
3.  Run these commands:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

## Step 2: Connect Cloudflare Pages
1.  Log in to your **Cloudflare Dashboard**.
2.  On the sidebar, go to **Workers & Pages**.
3.  Click **Create Application** (or "Create").
4.  Tab over to **Pages**.
5.  Click **Connect to Git**.
6.  Select your **GitHub** account and pick the `my-portfolio` repository we just made.

## Step 3: Configure Build Settings
Cloudflare needs to know how to build your React/Vite app.
1.  **Project Name**: (Leave as is, e.g., `my-portfolio`).
2.  **Production Branch**: `main`.
3.  **Framework Preset**: Select **Vite** (Important!).
    *   This usually auto-fills the *Build command* to `npm run build`.
    *   And *Build output directory* to `dist`.
    *   *If it doesn't auto-fill:*
        *   **Build command**: `npm run build`
        *   **Build output directory**: `dist`
4.  Click **Save and Deploy**.

## Step 4: Add Your Custom Domain (.my)
Once the deployment finishes (it takes about a minute):
1.  Go to the **Custom Domains** tab in your Pages project.
2.  Click **Set up a custom domain**.
3.  Enter your domain (e.g., `andriannazriel.my`).
4.  Follow the instructions.
    *   **If your domain is ALREADY on Cloudflare (DNS)**: It will be automatic.
    *   **If your domain is elsewhere**: It will ask you to update your DNS records (CNAME) at your registrar, similar to Vercel/Netlify.

## Why Cloudflare?
- **Global CDN**: Your site loads instantly from servers all over the world.
- **Security**: Basic automated DDoS protection.
- **Price**: Generous free tier.

**Done!** Your portfolio is now live on the Edge.
