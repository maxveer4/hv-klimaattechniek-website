const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('file:///c:/Users/maxve/OneDrive/Gowebbo/websiteclaude/hv-klimaattechniek/index.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'shots/section2-desktop.png' });
  await browser.close();
})();
