#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  const studentData = JSON.parse(body);

  const taskCompleted = studentData.filter((state) => state.completed == true);

  const ret = {};
  taskCompleted.forEach(task => {
    if (ret[task.userId]) {
      ret[task.userId]++;
    } else {
      ret[task.userId] = 1;
    }
  });
  console.log(ret);
});
