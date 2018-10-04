const Todo = require('../models/Todo')

module.exports = router => {

  router.post('/todo', (req, res) => {
    if (!req.body.title || !req.body.body || !req.body.owner) {
      res.json({
        success: false,
        message: 'Need title, body and owner'
      })
    } else {
      const todo = new Todo({
        title: req.body.title,
        body: req.body.body,
        owner: req.body.owner
      })

      todo.save(err => {
        if (err) {
          res.json({
            success: false,
            message: err
          })
        } else {
          res.json({
            success: true,
            message: 'Todo saved'
          })
        }
      })
    }
  })

  router.get('/todos', (req, res) => {
    Todo.find({}, (err, todos) => {
      if (err || !todos) {
        res.json({
          success: false,
          message: err
        })
      } else {
        res.json({
          success: true,
          todos: todos
        })
      }
    })
  })

  return router
}