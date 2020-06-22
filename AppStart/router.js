module.exports = function(app) {
    var trialController = require('../controllers/trialController');
  
    // todoList Routes
    app.route('/Index')
      .get(trialController.Index)
  
  
    // app.route('/tasks/:taskId')
    //   .get(todoList.read_a_task)
    //   .put(todoList.update_a_task)
    //   .delete(todoList.delete_a_task);
  };