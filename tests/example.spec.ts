import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe("Home page",()=>{
  test("should have correct title and metaData",async({page})=>{
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle("Home Page");
    await expect(page.locator('h1')).toHaveText("Home Page");
    // const description = await page.locator('meta[name="description"]').getAttribute('content');
    // expect(description).toBe("This is the home page of the application.");
  })
})