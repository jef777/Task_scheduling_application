const { task } = require("../models");
const db = require("../models");
const Task = db.task;
const Personnel = db.personnel;
const Customer = db.customer;
const Agent = db.agent;

class TaskController {

    async getAssignedTasks(page, limit, order, orderMethod) {

      let offset = 0 + (page - 1) * limit;

      try {
        const tasks = await Task.findAndCountAll({
          offset: offset,
          limit: limit,
          order: [
              [ `${order}`, `${orderMethod}` ]
          ],
          raw: true,
          nest: true,
          attributes: {exclude: [ 'personnel_id', 'customer_id', 'createdAt', 'updatedAt']},
          include: [
            {
                model: Personnel,
                attributes: [['firstname', 'personnel_firstname'], ['othername', 'personnel_othername'],],
                required: false,
            },
            {
                model: Customer,
                attributes: [['firstname', 'customer_firstname'], ['lastname', 'customer_lastname'], ['phone', 'customer_phone']],
                required: false,
            },
            {
              model: Agent,
              attributes: ['age', 'gender', 'access_code', 'registration'],
              required: false,
          },
        ],
        })

      const flattenedObjects = tasks.rows.reduce((a, task) => {
        Object.entries(task).forEach(val => {
          if(typeof val[1] === 'object') {
            task = {...task,...val[1]}
            if (val[1]) {
              if (Object.values(val[1]).length) {
                delete task[val[0]];
                  console.log('task[val[0]]', task[val[0]])
              }
            }
          }
        });
        a.push(task)
          return a
      },[])

        return {totalTasks: tasks.count, page, perPage: limit, tasks: flattenedObjects}

      } catch (error) {
        console.log('error', error)
      }
    }
}
module.exports = new TaskController();

