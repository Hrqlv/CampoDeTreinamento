import { test, expect } from "@playwright/test";
import { Form } from "../pageObjects/CampoDeTreinamento";

test.describe("Campo de treinamento - Form", () => {
  let form: Form;
  const dados = require("../Data/dados.json");

  test.beforeEach(async ({ page }) => {
    form = new Form(page);
    await form.visit();
  });

  test("Form Tests", async ({ page }) => {
    const message = await page.locator("h3");
    await expect(message).toContainText("Campo de Treinamento");

    await form.PutTheData(dados.firstName, dados.lastName);
    await form.ClickOnSexo();
    await form.ClickOnFavoriteFood();
    const dropdown = await page.locator('select[id="formEscolaridade"]');
    await dropdown.selectOption({ value: "2graucomp" });
    await form.ClickOnFavoriteSports();
    await form.GiveSomeSuggestions(dados.suggestions);
    await form.ClickOnAccess();
    await form.ClickOnConfirm();
  });
});
