/*
 * @title App
 * @description Application entry point
 */

// Modules
import header from '../modules/header/header';
import flickity from '../modules/flickity/flickity';
import products from '../modules/products/products';
import formNewsletter from '../modules/form-newsletter/form-newsletter';

document.addEventListener('DOMContentLoaded', function() {
  header();
  flickity();
  products();
  formNewsletter();
});
