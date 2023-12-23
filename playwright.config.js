import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['src/features/**/*.feature'],
  require: ['src/step-definition/**/*.js'],

});
export default defineConfig({
  testDir,
  reporter: 'html',
  channnel: "chrome",
  use:{
    screenshot:'on'
  }
});