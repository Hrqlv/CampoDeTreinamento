import { Locator, Page } from "@playwright/test";

export class Form {
  readonly page: Page;
  readonly FirstName: Locator;
  readonly LastName: Locator;
  readonly Sexo: Locator;
  readonly FoodChicken: Locator;
  readonly FoodMeat: Locator;
  readonly Soccer: Locator; 
  readonly Run: Locator;
  readonly Suggestions: Locator;
  readonly Register: Locator;
  readonly Confirm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.FirstName = page.locator("#formNome");
    this.LastName = page.locator("#formSobrenome");
    this.Sexo = page.locator("#formSexoMasc");
    this.FoodMeat = page.locator("#formComidaCarne");
    this.FoodChicken = page.locator("#formComidaFrango");
    this.Run = page.locator('option[value="Corrida"]');
    this.Soccer = page.locator('option[value="futebol"]');
    this.Suggestions = page.locator('textarea[id="elementosForm:sugestoes"]');
    this.Register = page.locator('input[id="formCadastrar"]');
    this.Confirm = page.locator('input[id="confirm"]');
  }

  async visit() {
    await this.page.goto("https://wcaquino.me/cypress/componentes.html");
  }

  async PutTheData(FirstName: string, LastName: string) {
    await this.FirstName.type(FirstName);
    await this.LastName.type(LastName); 
  }

  async ClickOnSexo() {
    await this.Sexo.click();
  }

  async ClickOnFavoriteFood() {
    await this.FoodChicken.click();
    await this.FoodMeat.click();
  }

  async ClickOnFavoriteSports() {
    await this.Soccer.click();
    await this.Run.click();
  }

  async GiveSomeSuggestions(Suggestions: string) {
    await this.Suggestions.type(Suggestions);
  }

  async ClickOnAccess() {
    await this.Register.click();
  }

  async ClickOnConfirm() {
    await this.Confirm.click();
  }
}
