# BilusTech SEO Preview & Testing Links

## 🔍 Social Media Preview Testing

### Facebook & Instagram
**URL**: https://developers.facebook.com/tools/debug/
**How to Test**:
1. Paste your website URL: `https://bilustech.com`
2. Check the preview image and text
3. Verify Open Graph tags are being read correctly
4. Test individual pages: `/products`, `/contact`, `/about`

### Twitter/X Card Validator
**URL**: https://cards-dev.twitter.com/validator
**How to Test**:
1. Paste your website URL
2. Validate Twitter Card structure
3. Confirm image displays correctly
4. Check card type is "summary_large_image"

### LinkedIn Inspector
**URL**: https://www.linkedin.com/feed/
**How to Test**:
1. Paste your website URL in the feed
2. Observe preview card rendering
3. Check that title, description, and image display correctly
4. Verify company information shows accurately

---

## 🔎 Search Engine Testing

### Google Rich Results Test
**URL**: https://search.google.com/test/rich-results
**What It Checks**:
- LocalBusiness schema validation
- Organization schema validation
- Structured data errors and warnings
- Mobile rendering

**How to Test**:
1. Paste URL: `https://bilustech.com`
2. Review rich results findings
3. Check for any validation errors
4. Ensure LocalBusiness schema is recognized

### Schema.org Validator
**URL**: https://validator.schema.org/
**What It Checks**:
- JSON-LD syntax validation
- Schema completeness
- Recommended properties
- Microdata validation

**How to Test**:
1. Copy the full page source (or just the schemas)
2. Paste into validator
3. Verify no errors in @context or @type
4. Check that all required properties are present

### Bing Markup Validator
**URL**: https://www.bing.com/webmasters/markup-validator
**What It Checks**:
- Bing-specific structured data support
- Compatibility with Bing Search
- Mobile-specific markup

---

## 📱 Mobile & Performance Testing

### Google Mobile-Friendly Test
**URL**: https://search.google.com/test/mobile-friendly
**How to Test**:
1. Paste your website URL
2. Review mobile usability report
3. Check viewport configuration
4. Test interactive elements on mobile

### Google PageSpeed Insights
**URL**: https://pagespeed.web.dev/
**How to Test**:
1. Enter your website URL
2. Analyze for both mobile and desktop
3. Review Core Web Vitals:
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)
4. Get optimization recommendations

### Lighthouse (Chrome DevTools)
**How to Test**:
1. Open Chrome DevTools (F12 or right-click → Inspect)
2. Go to "Lighthouse" tab
3. Select categories: Performance, SEO, Best Practices
4. Click "Analyze page load"
5. Review reports for each page

---

## 🎨 Favicon Testing

### Browser Favicon Test
1. **Clear browser cache** (especially important for favicon changes)
   - Chrome: Cmd+Shift+Delete (Mac) / Ctrl+Shift+Delete (Windows)
   - Firefox: Cmd+Shift+Delete (Mac) / Ctrl+Shift+Delete (Windows)
2. **Refresh page** with hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
3. **Check browser tab** - favicon should appear next to page title
4. **Bookmark page** - favicon should appear in bookmark list
5. **Check address bar** - favicon may appear in URL bar

### iOS Home Screen Test (requires Apple device)
1. Open website in Safari
2. Tap Share button
3. Select "Add to Home Screen"
4. Check that icon matches your apple-touch-icon.png
5. Launch app from home screen
6. Verify it launches in full-screen mode

### Android App Installation Test (requires Android device)
1. Open website in Chrome
2. Look for "Install app" prompt (may need to wait or scroll)
3. Tap "Install" button
4. Select home screen installation
5. Launch app from home screen
6. Verify it runs in standalone mode

---

## 🌐 Progressive Web App (PWA) Testing

### Desktop Installation Test (Chrome/Edge)
1. Open website in Chrome or Edge
2. Look for "Install" button in address bar (⊕ icon)
3. Click to install as desktop app
4. Verify app launches in standalone window
5. Check that theme color applies correctly
6. Test app shortcuts by right-clicking app icon

### Service Worker Testing (Chrome DevTools)
1. Open Chrome DevTools (F12)
2. Go to "Application" tab
3. Check "Service Workers" section
4. Verify if service worker is registered and running
5. Note: This Next.js app may not have a service worker by default

### Manifest File Validation
1. Open Chrome DevTools
2. Go to "Application" → "Manifest"
3. Verify:
   - All icons display with correct paths
   - Theme colors match (#003d82)
   - App name is "BilusTech LLC"
   - Shortcuts load without errors
   - Display mode is "standalone"

---

## 📊 SEO Metrics & Monitoring

### Google Search Console Setup
**URL**: https://search.google.com/search-console
**Steps**:
1. Click "Start now"
2. Add property: `https://bilustech.com`
3. Choose verification method:
   - **Recommended**: HTML file upload or Google Analytics
   - **Alternative**: HTML meta tag or DNS record
4. Follow verification steps
5. Submit sitemap: `/sitemap.xml`
6. Monitor indexing progress in "Coverage" report
7. Review search performance in "Performance" tab

### Google Analytics 4 Setup
**URL**: https://analytics.google.com
**Purpose**: Track visitor behavior, traffic sources, conversion funnels
**Key Metrics**:
- Traffic sources (organic search, direct, referral)
- User demographics and interests
- Page performance and user engagement
- Conversion tracking

### Bing Webmaster Tools Setup
**URL**: https://www.bing.com/webmasters
**Steps**:
1. Sign in with Microsoft account
2. Add your site
3. Verify ownership
4. Submit sitemap
5. Monitor Bing search traffic separately

---

## 🔧 Manual SEO Verification Checklist

### Page Titles & Meta Descriptions
- [ ] Each page has unique, descriptive title (50-60 characters)
- [ ] Each page has unique meta description (150-160 characters)
- [ ] Titles are clickable and relevant in search results
- [ ] Descriptions include primary keyword naturally

### Keywords & Content
- [ ] Home page: targets "low voltage equipment supplier Albuquerque"
- [ ] Products page: targets "electrical panels networking CCTV"
- [ ] Contact page: targets "get quote request quote low voltage"
- [ ] About page: targets "BilusTech company information"
- [ ] Natural keyword placement (1-2% density)

### Links & Navigation
- [ ] Internal links use descriptive anchor text
- [ ] No broken links (404 errors)
- [ ] Navigation structure is logical and clear
- [ ] Mobile navigation is functional

### Technical SEO
- [ ] Sitemap.xml exists and is valid
- [ ] Robots.txt exists and allows crawling
- [ ] Canonical URLs are set
- [ ] No duplicate content
- [ ] Mobile responsive design

### Content Quality
- [ ] Content is original and unique
- [ ] No grammar or spelling errors
- [ ] Headings are properly structured (H1, H2, H3)
- [ ] Content is up-to-date and accurate
- [ ] Contact information is complete and correct

---

## 📈 SEO Optimization Tips

### Quick Wins (Easy - 1-2 hours)
1. ✅ Submit to Google Search Console (already prepared)
2. ✅ Submit to Bing Webmaster Tools (already prepared)
3. ✅ Set up Google Analytics 4
4. ✅ Enable Google Search Console notifications
5. Create business listings on Google Business Profile

### Medium-Term (1-2 weeks)
1. Monitor search console for indexing issues
2. Check for and fix any structured data errors
3. Optimize images with alt text
4. Add internal linking strategy
5. Create content calendar for blog/resources

### Long-Term (1-3 months)
1. Build quality backlinks
2. Create valuable content regularly
3. Improve time on page metrics
4. Increase user engagement signals
5. Monitor and improve Core Web Vitals

---

## 🎯 Expected SEO Results Timeline

| Timeframe | Milestone |
|-----------|-----------|
| **Week 1** | Submission to search engines |
| **Week 2-4** | Initial crawling and indexing |
| **Week 4-8** | Pages appear in search results |
| **Month 2-3** | Initial traffic and ranking improvements |
| **Month 3-6** | Significant traffic increase (with quality content) |
| **Month 6+** | Established rankings and consistent traffic |

---

## 🚨 Common SEO Issues & Fixes

### Favicon Not Showing
- **Cause**: Browser cache
- **Fix**: Hard refresh (Cmd+Shift+R), clear browser cache, or use incognito mode

### OG Image Not Displaying on Social Media
- **Cause**: Image file missing or wrong dimensions
- **Fix**: Create og-image.png (1200x630 px), ensure it's in `/public/` folder

### Schema Validation Errors
- **Cause**: Missing required fields or syntax errors
- **Fix**: Use Schema.org Validator to identify exact issues
- **Note**: All current schemas are pre-configured correctly

### Pages Not Indexing in Google
- **Cause**: Robots.txt blocking, noindex tags, or canonical issues
- **Fix**: Verify in Google Search Console, check robots.txt, review page source

### Poor Mobile Experience
- **Cause**: Unresponsive design or oversized content
- **Fix**: Test with Google Mobile-Friendly Test, fix viewport meta tag (already done)

---

## 📚 Additional Resources

### SEO Learning
- Google Search Central: https://developers.google.com/search
- Schema.org Documentation: https://schema.org/
- Tailwind CSS Dark Mode: https://tailwindcss.com/docs/dark-mode
- Next.js Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

### Tools & Utilities
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix Performance: https://gtmetrix.com/
- Screaming Frog SEO Spider: https://www.screamingfrog.co.uk/seo-spider/
- SEMrush: https://www.semrush.com/

### Competitive Analysis
- Ahrefs: https://ahrefs.com/ (backlink analysis)
- Moz: https://moz.com/ (SEO tools)
- SE Ranking: https://www.seranking.com/

---

## 📝 Next Steps

1. **Create Image Files** (if not already created):
   - `/public/og-image.png` (1200x630)
   - `/public/apple-touch-icon.png` (180x180)
   - `/public/logo.png` (512x512, optional)

2. **Submit to Search Engines**:
   - Google Search Console
   - Bing Webmaster Tools

3. **Set Up Analytics**:
   - Google Analytics 4
   - Google Tag Manager (optional)

4. **Test All Previews**:
   - Use tools listed in this document
   - Share on social media platforms
   - Verify appearance in all channels

5. **Monitor & Optimize**:
   - Check Search Console weekly
   - Track Google Analytics metrics
   - Adjust content based on performance data

---

**Last Updated**: Conversation Message 10
**Status**: SEO infrastructure complete and tested
**Recommended Action**: Create image files, then submit to search engines
