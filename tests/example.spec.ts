import { test, expect } from "@playwright/test";
import { beforeEach, describe } from "node:test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("should have correct title and metaData", async ({ page }) => {
    await expect(page).toHaveTitle("Home Page");
    await expect(
      page.getByRole("heading", { name: "end to end test" })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Go to Form" })).toBeVisible();
  });

  test("should navigate to form page on link click", async ({ page }) => {
    await page.getByRole("link", { name: "Go to Form" }).click();
    await expect(page).toHaveURL("http://localhost:3000/form");
  });
});

test.describe("Form page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/form");
  });

  test("should submit form and display data", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Form" })).toBeVisible();
    await expect(page.getByPlaceholder("username")).toBeVisible();
    await expect(page.getByPlaceholder("email")).toBeVisible();
  });

  test("should have empty list item", async ({ page }) => {
    const dataList = page.getByRole("list");
    await expect(dataList).not.toBeVisible();
  });

  test("should fill and submit the form", async ({ page }) => {
    const usernameInput = page.getByPlaceholder("username");
    const emailInput = page.getByPlaceholder("email");
    const submitButton = page.getByRole("button", { name: "Submit" });

    await usernameInput.fill("sina");
    await emailInput.fill("sina@gmail.com");
    await submitButton.click();
    const dataList = page.getByRole("list");
    dataList.locator("li").first().waitFor();
    await expect(dataList).toBeVisible();
    await expect(dataList.locator("li").nth(0)).toHaveText("Username: sina");
    await expect(dataList.locator("li").nth(1)).toHaveText("Email: sina@gmail.com");

  });
  // await page.getByPlaceholder("username").fill("testuser");
  // await page.getByPlaceholder("email").fill("sina@gmail.com");
  // await page.getByRole('button',{name:"Submit"}).click();
});
