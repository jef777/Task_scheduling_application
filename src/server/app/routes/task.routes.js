const { authJwt } = require("../middleware");
const taskController = require("../controllers/task.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/tasks/assigned/',
  [authJwt.verifyToken],
  function(req, res) {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const order = req.query.order ? req.query.order : 'createdAt';
    const orderMethod = req.query.orderMethod ? req.query.orderMethod : 'DESC';

    taskController.getAssignedTasks(page, limit, order, orderMethod).then(data => res.json(data));
  });

};
