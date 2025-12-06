# 🚀 Deploy to Vercel NOW - Quick Guide

## Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

## Step 2: Deploy
```bash
vercel
```

Answer the prompts:
- Set up and deploy? **Y**
- Which scope? (select your account)
- Link to existing project? **N**
- Project name? **legal-portfolio-pro** (or your choice)
- In which directory is your code? **./**
- Override settings? **N**

## Step 3: Add Database (Choose ONE)

### Option A: Vercel Postgres (Easiest)
1. Go to your Vercel dashboard
2. Click on your project
3. Go to **Storage** tab
4. Click **Create Database**
5. Select **Postgres**
6. Done! DATABASE_URL is automatically added

### Option B: Neon (Free Forever)
1. Go to https://neon.tech
2. Sign up (free)
3. Create new project
4. Copy connection string
5. Run: `vercel env add DATABASE_URL`
6. Paste the connection string

### Option C: Supabase (Free)
1. Go to https://supabase.com
2. Create new project
3. Go to Settings → Database
4. Copy connection string (use "Transaction" pooler mode)
5. Run: `vercel env add DATABASE_URL`
6. Paste the connection string

## Step 4: Run Database Migrations
```bash
npm run db:push
```

## Step 5: Deploy to Production
```bash
vercel --prod
```

## ✅ Done!
Your site is now live! Vercel will show you the URL.

## 🔍 Verify Deployment
1. Open the URL Vercel provides
2. Check that the site loads properly
3. Test the contact form
4. Verify all sections display correctly

## ⚠️ Troubleshooting
- **Blank page?** Check build logs in Vercel dashboard
- **API errors?** Verify DATABASE_URL is set
- **Contact form fails?** Run `npm run db:push` again

---

**Need detailed help?** See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
