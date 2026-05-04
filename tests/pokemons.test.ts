import { test } from '@playwright/test';

test('search pokemon', async ({ page }) => {
  await page.goto('https://www.pokemon.com/us');
  await page.waitForTimeout(3000);

  // click menu pokedex
  await page.locator('li.explore').hover();
  await page.waitForTimeout(2000);

  // search pikachu
  await page.locator('#searchInput').click();
  await page.waitForTimeout(1000);

  await page.fill('#searchInput', 'pikachu');
  await page.waitForTimeout(1500);

  await page.keyboard.press('Enter');
  await page.waitForTimeout(4000);

  // click detail pikachu
  await page.locator('a[href*="pikachu"]').first().click();
  await page.waitForTimeout(4000);

  // scroll ke tombol Explore
  const exploreBtn = page.locator('text=Explore More Pokémon');
  await exploreBtn.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  // klik Explore More
  await exploreBtn.click();
  await page.waitForTimeout(5000);

  // scroll sekali ke bawah
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });

  await page.waitForTimeout(2000);
});