import Base from './components/Base.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import NewArticlesPage from './containers/NewArticlesPage.jsx';
import FavArticlesPage from './containers/FavArticlesPage.jsx';
import FavArticleDetailPage from './containers/FavArticleDetailPage.jsx';

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: DashboardPage,
    },
    {
      path: '/new_articles',
      component: NewArticlesPage,
    },
    {
      path: '/fav_articles',
      component: FavArticlesPage,
    },
    {
      path: '/article_detail',
      component: FavArticleDetailPage,
    }

  ]
};

export default routes;
