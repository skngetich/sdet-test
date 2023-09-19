# sdet-test

## Question 2

### total number of tasks in the database

```sql
SELECT COUNT(*) AS total_tasks FROM task;

```

-check how many task were added during crud application (unit)

### The number of completed tasks

```sql
SELECT COUNT(*) AS completed_tasks
FROM task
WHERE task_completed = 1;

```

- check updating of task  

### The number of tasks assigned to each unique user

```sql
SELECT task_assignee, COUNT(*) AS tasks_assigned
FROM task
GROUP BY task_assignee;

```

- check of CRUD functionality
- check if it can assign task and mark task as completed
-check of it aligns with apps functionaliuty
- check if there are calculation errors
- check the perfomance of the query
- sanitizin user input
  