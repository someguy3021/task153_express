var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todoController')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/todos', todoController.all)
router.post('/', todoController.store)
router.get('/:id', todoController.show)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.destroy)

module.exports = router;
