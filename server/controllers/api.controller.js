const axios = require('axios');
const moment = require('moment');
const _ = require('lodash');
const Article = require('../models/Article.model');

async function fetchArticles (req, res){
  const topic = req.body.topic;
  const startDate = moment(req.body.startDate).format('YYYYMMDD');
  const endDate = moment(req.body.endDate).format('YYYYMMDD');
  try {
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
    await Article.create(articleToSave);
    res.status(200).json('new article saved').end();
  } catch(err) {
    console.log(`error saving article ${err}`);
    res.status(422).json('error saving article').end();
  }
}

async function getFavArticle (req, res) {
  let id = req.params.id;
  try {
    let article = await Article.findOne({_id: id});
  } catch(err) {
    console.log(`error getting article ${id}`);
    res.status(404).json(`error getting article ${id}`).end();
  }
}

async function deleteFavArticle (req, res) {
  let id = req.params.id;
  try {
    await Article.find({_id: id}).remove();
  } catch(err) {
    console.log(`error deleting article ${id}`);
    res.status(404).json(`error deleting article ${id}`).end();
  }
}

module.exports = {
  fetchArticles,
  postFavArticle,
  getFavArticle,
  deleteFavArticle,
}
