// Require dependencies
const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

// Define Article schema
const ArticleSchema = new Schema({
  web_url: {
    type: mongoose.SchemaTypes.Url,
    required: true,
    index: true,
    unique: true,
  },
  lead_paragraph: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
  },
  print_page: {
    type: Number,
  },
  blog: {
    type: Array,
  },
  source: {
    type: String,
  },
  multimedia: {
    type: Array,
  },
  headline: {
    type: Object,
    default: {},
  },
  keywords: {
    type: Array,
    default: [],
  },
  pub_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  document_type: {
    type: String,
  },
  section_name: {
    type: String,
  },
  subsection_name: {
    type: String,
  },
  byline: {
    type: Object,
    default: {},
  },
  type_of_material: {
    type: String,
  },
  word_count:{
    type: Number,
  },
  slideshow_credits: {
    type: String,
  },
  saved_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
 
 // Export the model
module.exports = mongoose.model('Article', ArticleSchema);
