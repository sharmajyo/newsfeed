import feeds from './feedsRoutes';

export default (app, db) => {
  feeds(app, db);
};
