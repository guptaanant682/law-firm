# Vercel Deployment Guide for Legal Portfolio Pro

## Overview
This project has been configured to deploy seamlessly on Vercel with serverless functions.

## Pre-Deployment Checklist

### 1. Database Setup (Required)
You need a PostgreSQL database. Recommended options:

**Option A: Vercel Postgres (Recommended)**
1. Go to your Vercel project dashboard
2. Navigate to Storage tab
3. Create a Postgres database
4. Vercel will automatically inject `DATABASE_URL` environment variable

**Option B: External Database (Neon, Supabase, Railway)**
1. Create a free PostgreSQL database at:
   - Neon: https://neon.tech (Recommended - serverless)
   - Supabase: https://supabase.com
   - Railway: https://railway.app
2. Copy the connection string
3. Add to Vercel environment variables

### 2. Environment Variables
Add these to your Vercel project settings:

```
DATABASE_URL=postgresql://username:password@host:5432/database?sslmode=require
NODE_ENV=production
```

## Deployment Steps

### First Time Deployment

1. **Install Vercel CLI** (optional but recommended):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy? Y
   - Which scope? (select your account)
   - Link to existing project? N
   - Project name? legal-portfolio-pro
   - In which directory is your code? ./
   - Override settings? N

3. **Or Deploy via GitHub**:
   - Push code to GitHub
   - Go to https://vercel.com/new
   - Import your repository
   - Vercel auto-detects settings
   - Add environment variables
   - Click Deploy

### Database Migration

After first deployment, run database migrations:

1. **Using Vercel CLI**:
   ```bash
   # Set environment variable locally
   export DATABASE_URL="your_production_database_url"

   # Push database schema
   npm run db:push
   ```

2. **Or use your database provider's console**:
   - Execute the SQL schema from `shared/schema.ts`

## Project Structure for Vercel

```
Legal-Portfolio-Pro/
├── api/                      # Serverless functions
│   ├── contact.ts           # POST /api/contact
│   └── contact/
│       └── inquiries.ts     # GET /api/contact/inquiries
├── client/                  # Frontend source
├── dist/public/            # Build output (auto-generated)
├── vercel.json             # Vercel configuration
└── .vercelignore           # Files to ignore
```

## How It Works

### Frontend
- Built with Vite
- Outputs to `dist/public/`
- Served as static files
- All routes fallback to `index.html` (SPA routing)

### Backend
- Serverless functions in `/api` folder
- Auto-deployed as Vercel Functions
- Each file = separate endpoint
- Database connections handled per request

## Troubleshooting

### Issue: Blank page or file download
**Solution**: This was the original issue. Now fixed with:
- Proper `vercel.json` configuration
- Frontend builds to `dist/public`
- Rewrites configured for SPA routing

### Issue: API returns 500 errors
**Solution**:
- Check DATABASE_URL is set in Vercel environment variables
- Ensure database migrations are run
- Check Vercel function logs

### Issue: Database connection errors
**Solution**:
- Verify DATABASE_URL format includes `?sslmode=require` for production
- Check database is accessible from external connections
- Verify database credentials are correct

### Issue: Build fails
**Solution**:
- Run `npm run build` locally first
- Check all dependencies are in `package.json`
- Ensure Node.js version is compatible (v20+)

## Vercel Configuration Explained

### vercel.json
```json
{
  "buildCommand": "npm run build",      // Build frontend
  "outputDirectory": "dist/public",     // Serve from here
  "rewrites": [
    {
      "source": "/api/:path*",          // API routes
      "destination": "/api/:path*"
    },
    {
      "source": "/(.*)",                // All other routes
      "destination": "/index.html"      // SPA fallback
    }
  ]
}
```

## Performance Optimizations

1. **Serverless Functions**: Auto-scaling, pay per use
2. **Edge Network**: Global CDN for static assets
3. **Database Connection Pooling**: Built into serverless functions
4. **Build Optimization**: Minified assets, code splitting

## Monitoring

After deployment:
1. Check Vercel Dashboard → Functions → Logs
2. Monitor API response times
3. Check database connection pool usage
4. Review error logs if issues occur

## Updating Your Deployment

1. Push to main branch (if using GitHub integration)
2. Or run `vercel --prod` (if using CLI)
3. Vercel automatically builds and deploys
4. Zero downtime deployments

## Testing Production Build Locally

```bash
# Build the project
npm run build

# Install serve globally
npm i -g serve

# Serve the built files
serve dist/public
```

Note: API functions won't work with `serve` - they require Vercel's serverless environment.

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check function logs in Vercel dashboard
3. Verify environment variables are set
4. Test database connection separately

## Success Indicators

✅ Build completes without errors
✅ Website loads and displays correctly
✅ Navigation works (Hero, About, Contact, etc.)
✅ Contact form submits successfully
✅ No console errors in browser
✅ API endpoints return proper responses

Your site is now live and ready for production use!
