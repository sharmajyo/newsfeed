import { get, add, update, remove } from '../models/pgClient';

export default (app, db) => {

  app.get('/api/feeds', (req, res, next) => {

    get('feeds', (err, data) => {

      if( err) {
        return res.status(500).json({success: false, data: err});
      }

      res.json(data.rows);
    })
  });

  app.post('/api/feed', (req, res, next) => {
    const data = [req.body.name, req.body.url ];

    add('feeds', ['name', 'url'], data, (err, data) => {

      if( err) {
        return res.status(500).json({success: false, data: err});
      }

      res.json(data.rows);
    })
  });

  app.put('/api/feed/:feed_id', (req, res, next) => {
    const id = req.params.feed_id;
    const data = [req.body.name, req.body.url ];

    update('feeds', id, ['name', 'url'], data, (err, data) => {

      if( err) {
        return res.status(500).json({success: false, data: err});
      }

      res.json(data.rows);
    })
  });

  app.delete('/api/feed/:feed_id', (req, res, next) => {
    const id = req.params.feed_id;

    remove('feeds', id, (err, data) => {

      if( err) {
        return res.status(500).json({success: false, data: err});
      }

      res.json(data.rows);
    })
  });

};
