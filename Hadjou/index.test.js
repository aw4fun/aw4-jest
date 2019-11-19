import puppeteer from 'puppeteer';

test('FirstName tests', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const app = 'file://C:/Users/Admin/WebstormProjects/classsed-jest/index.html';
  await page.goto(app);

  await page.click('input#firstName');
  await page.type('input#firstName', ' ');
  await page.click('input#lastName');
  let firstNameInputClass = await page.$eval('input#firstName', (input) => input.className);
  expect(firstNameInputClass).toBe('invalid');

  await page.click('input#firstName');
  await page.type('input#firstName' ,'John');
  await page.click('input#email');
  firstNameInputClass = await page.$eval('input#firstName', (input) => input.className);
  expect(firstNameInputClass).toBe('valid');

  await browser.close();
});
