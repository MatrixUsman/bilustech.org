# BilusTech LLC - Deployment & Setup Guide

## 🚀 Quick Deployment to Vercel

This website is fully optimized and ready to deploy to Vercel. Follow these steps:

### Step 1: Initialize Git (if not done)
```bash
cd /Users/matrixusman/Images/bilustech.org
git init
git add .
git commit -m "Initial commit: BilusTech LLC website"
```

### Step 2: Push to GitHub
1. Create a new repository on GitHub: `https://github.com/yourusername/bilustech.org`
2. Push your code:
```bash
git remote add origin https://github.com/yourusername/bilustech.org.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to **[vercel.com](https://vercel.com)**
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Choose your GitHub repository
5. Click **"Deploy"**
6. Wait for deployment to complete (usually 2-3 minutes)

### Step 4: Connect Custom Domain
1. Go to your Vercel project settings
2. Click **"Domains"**
3. Add custom domain: `bilustech.com`
4. Follow DNS configuration instructions
5. Update your domain registrar with provided DNS records

## 📧 Email Configuration (IMPORTANT for Quotes)

### Option A: Using Resend (FREE - Recommended)

1. **Sign up:** Go to [resend.com](https://resend.com) and create free account
2. **Get API Key:** Copy your API key from dashboard
3. **Add to Vercel:**
   - Go to your Vercel project
   - Settings → Environment Variables
   - Add new variable:
     - Name: `RESEND_API_KEY`
     - Value: `your_api_key_here`
   - Click "Add"
4. **Redeploy:** Click "Redeploy" button to apply changes
5. **Enable in Code:**
   - Open `app/api/contact/route.ts`
   - Uncomment the Resend section
   - Commit and push to GitHub
   - Vercel will automatically redeploy

### Option B: Using Your Own Email Service

For SendGrid, Mailgun, or other services:
1. Sign up and get API key
2. Add to Vercel environment variables
3. Implement in `app/api/contact/route.ts`
4. Test before going live

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] Website loads at bilustech.com
- [ ] All pages accessible (Home, About, Products, Contact, Privacy, Terms)
- [ ] Navigation menu works
- [ ] Mobile responsive (test on phone)
- [ ] Contact form appears
- [ ] Contact form accepts submissions
- [ ] Logo displays correctly
- [ ] Colors match design
- [ ] Footer shows correct contact info
- [ ] Links work correctly

## 🔍 SEO Verification

- [ ] Google can crawl site: `site:bilustech.com` in Google
- [ ] Sitemap accessible: `bilustech.com/sitemap.xml`
- [ ] Robots.txt accessible: `bilustech.com/robots.txt`
- [ ] Meta tags present (inspect page source)
- [ ] Structured data present (inspect page source)

## 📝 Important: PlanHub Application Requirements

When applying to PlanHub subscription, make sure:

✅ Website is fully functional and public
✅ Business address visible on site
✅ Phone number prominently displayed
✅ Working contact/quote form
✅ Professional design and layout
✅ Legal pages (Privacy, Terms) included
✅ No prohibited products
✅ HTTPS enabled (automatic on Vercel)
✅ Email notifications working
✅ Company legitimacy documented

## 🔧 Customization After Deployment

### Update Contact Information
Edit `components/Footer.tsx` and all pages with your actual:
- Phone number
- Email address
- Physical address
- Business hours (if applicable)

### Add More Products
Edit `app/products/page.tsx` and add to the product arrays

### Change Branding
Edit `tailwind.config.ts` for colors
Edit `components/Logo.tsx` for logo design

### Modify Copy
Edit page content directly in the page files

## 🆘 Troubleshooting

### Contact form not sending emails
1. Check Vercel logs: Project → Deployments → Click latest → Function logs
2. Verify RESEND_API_KEY is set in environment variables
3. Ensure Resend account is verified
4. Check email is correct in `ceo@bilustech.com`

### Website not visible
1. Check DNS propagation: [dnschecker.org](https://dnschecker.org)
2. Wait up to 48 hours for DNS to propagate
3. Check domain is pointed to Vercel nameservers

### Build failed on Vercel
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are installed locally
3. Run `npm install` locally first
4. Check for TypeScript errors

### Styles not loading
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Check network tab in DevTools
4. Rebuild if needed

## 📞 Next Steps

1. Deploy to Vercel (follow steps above)
2. Connect bilustech.com domain
3. Set up email service (Resend)
4. Test contact form
5. Apply to PlanHub with live URL
6. Monitor website for uptime

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

## ❓ Questions?

Contact: ceo@bilustech.com | Phone: (738) 966-6630

---

**Website Version:** 1.0.0
**Last Updated:** January 18, 2026
