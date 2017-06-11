const axios = require('axios');
const moment = require('moment');
const _ = require('lodash');
const Article = require('../models/Article.model');

async function fetchArticles (req, res){
  const {topic, startDate, endDate} = JSON.parse(req.body);
  try {
    console.log("topic is >>>>", req.body, topic, startDate, endDate);
    let response = await
    axios.get(process.env.NYT_API_BASE_URL, {
      params: {
        'api-key': process.env.NYT_ARTICLE_SEARCH_API_KEY,
        'q': topic,
        'begin_date':startDate,
        'end_date': endDate,
        'sort': 'newest',
      }
    });
    let newArticles = _.get(response, 'data.response.docs', []);
    res.json(newArticles);
  } catch(err) {
    console.log(`error fetching NYT articles ${err}`); 
    res.status(420).json('error fetching NYT articles').end();
  }
}

async function postFavArticle (req, res) {
  let articleToSave = req.body;
  console.log('article is >>>>', JSON.stringify(articleToSave, null,2));
  try {
    await Article.create(_.omit(articleToSave, '_id'));
    res.status(200).json('new article saved').end();
  } catch(err) {
    console.log(`error saving article ${err}`);
    res.status(422).json('error saving article').end();
  }
}

async function getFavArticles (req, res) {
  try {
    let favArticles = await Article.find({});
    res.status(200).json(favArticles).end();
  } catch(err) {
    console.log(`error getting all favorite articles ${err}`);
    res.status(404).json('error getting all favorite articles').end();
  }
}

async function getFavArticle (req, res) {
  console.log("here >>>", req.params.id)
  let id = req.params.id;
  try {
    let article = await Article.findOne({_id: id});
    res.status(200).json(article);
  } catch(err) {
    console.log(`error getting article ${id}`);
    res.status(404).json(`error getting article ${id}`).end();
  }
}

async function deleteFavArticle (req, res) {
  let id = req.params.id;
  try {
    await Article.find({_id: id}).remove();
    res.status(200).json(`article ${id} successfully removed`).end();
  } catch(err) {
    console.log(`error deleting article ${id}`);
    res.status(404).json(`error deleting article ${id}`).end();
  }
}

module.exports = {
  fetchArticles,
  postFavArticle,
  getFavArticles,
  getFavArticle,
  deleteFavArticle,
}
