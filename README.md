# Legal Portfolio Pro

A professional portfolio website for Parul Kumar, specializing in Cyber Law, AI Governance, and Legal Policy Analysis.

## 🚀 Quick Deploy to Vercel

### Method 1: Deploy with Vercel CLI (Recommended)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Set up database** (Choose one):
   - **Vercel Postgres**: Add via Vercel Dashboard → Storage → Create Database
   - **Neon** (Free): https://neon.tech
   - **Supabase** (Free): https://supabase.com

5. **Add environment variable**:
   ```bash
   vercel env add DATABASE_URL
   ```
   Paste your PostgreSQL connection string.

6. **Run database migrations**:
   ```bash
   npm run db:push
   ```

7. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects the configuration
5. Add `DATABASE_URL` environment variable
6. Click "Deploy"
7. Run migrations using Vercel CLI or your database console

## 📋 Environment Variables

Required environment variables for Vercel:

```env
DATABASE_URL=postgresql://username:password@host:5432/database?sslmode=require
NODE_ENV=production
```

## 🏗️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4
- **Backend**: Vercel Serverless Functions
- **Database**: PostgreSQL with Drizzle ORM
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Radix UI primitives

## 📁 Project Structure

```
Legal-Portfolio-Pro/
├── api/                  # Vercel serverless functions
│   ├── contact.ts       # Contact form endpoint
│   └── contact/
│       └── inquiries.ts # Get inquiries endpoint
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── shared/              # Shared TypeScript types/schemas
├── dist/                # Build output (auto-generated)
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   # Create .env file
   DATABASE_URL=postgresql://user:password@localhost:5432/legal_portfolio
   PORT=5000
   NODE_ENV=development
   ```

3. **Set up local PostgreSQL** (optional for full functionality):
   ```bash
   # Install PostgreSQL
   sudo apt-get install postgresql

   # Create database
   createdb legal_portfolio

   # Run migrations
   npm run db:push
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   ```
   http://localhost:5000
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (Vercel uses this)
- `npm run build:server` - Build server bundle (for non-Vercel deployments)
- `npm run start` - Start production server (local only)
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🎨 Features

- **Responsive Design**: Mobile-first, works on all devices
- **Smooth Animations**: Framer Motion for professional animations
- **Contact Form**: Fully functional with backend validation
- **Practice Areas**: Showcase legal expertise
- **Professional Experience**: Timeline of career highlights
- **Notable Work**: Portfolio of key projects
- **Philosophy Section**: Personal legal philosophy
- **Privacy Policy**: GDPR-compliant privacy page
- **SEO Optimized**: Meta tags and OpenGraph images

## 🗄️ Database Schema

### Contact Inquiries Table

```sql
CREATE TABLE contact_inquiries (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

## 🔧 Troubleshooting

### Issue: Blank page on Vercel
**Fixed**: This was resolved by:
- Creating proper `vercel.json` configuration
- Setting up serverless functions in `/api` folder
- Configuring SPA routing fallbacks

### Issue: API errors
- Verify `DATABASE_URL` is set in Vercel environment variables
- Check database migrations are run
- Review Vercel function logs

### Issue: Build fails
- Run `npm run build` locally first
- Ensure Node.js version is 20+
- Check all dependencies are installed

## 📚 Documentation

- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md) - Detailed deployment instructions
- [Vercel Documentation](https://vercel.com/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team)

## 🚨 Important Notes

- **Database Required**: The contact form requires a PostgreSQL database
- **Serverless Architecture**: API routes are serverless functions on Vercel
- **No Server Needed**: Vercel handles all infrastructure
- **Auto-Scaling**: Scales automatically with traffic
- **Zero Config**: `vercel.json` handles all configuration

## 📝 License

MIT License - feel free to use this as a template for your own portfolio.

## 🤝 Support

For issues or questions:
1. Check the [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)
2. Review Vercel deployment logs
3. Verify environment variables are set correctly

---

**Built with ❤️ using React, TypeScript, and Vercel**
