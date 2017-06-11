export async function fetchNewArticles(query) {
  try {
    console.log("query is >>>>", query);
    let newArticles = await fetch('api/fetcharticles', {
      method: 'POST',
      body: JSON.stringify(query)
    })
    .then(response=>response.json());
    return newArticles;
  } catch(err) {
    throw new Error(`Unable to fetch new articles, ${err}`);
  }
}

export async function favAnArticle(article) {
  try {
    let response = await fetch('api/favarticles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(article)
    })
    .then(response=>response.json())
    return;
  } catch(err) {
    throw new Error(`Unable to favorite an article, ${err}`)
  }
}

export async function getFavArticles() {
  try {
    let response = await fetch('api/favarticles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
      }
    })
    .then(response => response.json())
    return response;
  } catch(err) {
    throw new Error(`Unable to get all favorite articles, ${err}`)
  }
}

export async function getArticleDetail(article_id) {
  try {
    let response = await fetch(`/api/favarticle/${article_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
      }
    })
    .then(response => response.json())
    console.log("response in api is >>>", response);
    return response;
  } catch(err) {
    console.log("error is api is >>>", err);
    throw new Error(`Unable to get favorite article ${article_id}, ${err}`)
  }
}
