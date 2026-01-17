# 🚀 BilusTech LLC - Quick Start Guide

## Get Your Website Live in 5 Minutes

### ✅ Step 1: Test Locally (2 minutes)
```bash
cd /Users/matrixusman/Images/bilustech.org
npm run dev
```
Then open: [http://localhost:3000](http://localhost:3000)

**What to check:**
- ✓ Website loads
- ✓ All pages work (click menu items)
- ✓ Mobile looks good (resize browser or F12)
- ✓ Contact form appears

### ✅ Step 2: Push to GitHub (2 minutes)

**If you don't have Git set up:**
```bash
cd /Users/matrixusman/Images/bilustech.org
git init
git add .
git commit -m "BilusTech LLC Website - Ready for Launch"
```

**Then push to your GitHub:**
1. Go to [github.com/new](https://github.com/new)
2. Create new repository: `bilustech.org`
3. Copy the commands GitHub shows
4. Paste them in your terminal

### ✅ Step 3: Deploy to Vercel (1 minute)

1. Go to [vercel.com](https://vercel.com)
2. Sign up (free) or log in
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. **Wait 2-3 minutes** ⏳

**You now have a live website!** 🎉

### ✅ Step 4: Add Your Domain (Optional - 30 seconds)

After deployment:
1. Go to Vercel project settings
2. Click "Domains"
3. Add: `bilustech.com`
4. Follow DNS instructions
5. Update your domain registrar

---

## 📧 Email Setup (CRITICAL!)

Contact form won't send emails yet. Fix this:

### Option A: Use Resend (FREE - Easiest)

1. Go to [resend.com](https://resend.com)
2. Sign up (takes 2 minutes)
3. Get your API key
4. In Vercel project:
   - Settings → Environment Variables
   - Name: `RESEND_API_KEY`
   - Value: Paste your API key
   - Click "Add"
   - Click "Redeploy"

Done! Quotes now email to: **ceo@bilustech.com**

### Option B: Use Gmail (DIY Solution)
1. Create app-specific password in Google Account
2. Add to Vercel environment
3. Update API route code
4. Redeploy

---

## ✅ Verify Everything Works

After deployment, check:

- [ ] Website loads at vercel.com link
- [ ] Menu items work
- [ ] Mobile menu works (on phone)
- [ ] Contact form appears
- [ ] Click "Send Quote Request"
- [ ] See success message

---

## 🎯 Before Applying to PlanHub

Make sure:
- ✅ Website is live (not localhost)
- ✅ All pages accessible
- ✅ Contact form working
- ✅ Email service configured
- ✅ Company info visible
- ✅ No errors in console
- ✅ Mobile responsive

---

## 🔧 Quick Customization

### Change Phone Number
1. Open `components/Footer.tsx`
2. Find: `(738) 966-6630`
3. Replace with your number
4. Save
5. Commit to GitHub
6. Vercel auto-redeploys

### Update Email Address
1. Open `components/Footer.tsx`
2. Find: `ceo@bilustech.com`
3. Replace with your email
4. Also update in `app/api/contact/route.ts`
5. Save & commit

### Change Logo
1. Open `components/Logo.tsx`
2. Edit the SVG code
3. Save
4. Commit to GitHub

### Add Products
1. Open `app/products/page.tsx`
2. Edit the product arrays
3. Save
4. Commit

---

## ⚠️ Common Issues & Fixes

**Website not loading:**
- Wait 2-3 minutes for deployment
- Refresh page (Ctrl+Shift+R)
- Check Vercel logs for errors

**Contact form not sending emails:**
- Check Vercel environment variables
- Verify API key is set correctly
- Check email service account is verified
- Check console for error messages (F12)

**Styles look wrong:**
- Hard refresh: Ctrl+Shift+R
- Clear browser cache
- Check Vercel deployment completed

**Domain not working:**
- DNS takes 1-48 hours to propagate
- Use dnschecker.org to verify
- Check DNS records are correct

---

## 📞 Need Help?

**For Deployment Issues:**
- Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- Check Vercel logs
- Google the error message

**For Content Updates:**
- Edit files in your code editor
- Push to GitHub
- Vercel auto-redeploys

**For Questions:**
- Email: ceo@bilustech.com
- Phone: (738) 966-6630

---

## 📚 Full Documentation

- **README.md** - Complete project docs
- **DEPLOYMENT_GUIDE.md** - Detailed deployment steps
- **WEBSITE_NOTES.md** - Features & customization
- **PROJECT_SUMMARY.md** - Full project summary

---

## 🎉 That's It!

Your professional website is ready. You've got this! 

Next: Deploy → Configure Email → Apply to PlanHub

Questions? Check the docs or email ceo@bilustech.com

---

**Version:** 1.0.0  
**Updated:** January 18, 2026  
**Status:** Production Ready
