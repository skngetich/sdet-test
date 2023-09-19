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

The SQl queries help in the following way:

- Helps to check of CRUD operations work correctly. if one task is added the number of task in the database should increment by one.
- Helps to check if if the API is properly intergrated by assign task to a user and marking task as completed.
- Helps to check of it aligns with apps functionality on the UI.
- The numbers of task asssigned to a unique user can be used to check if there are calculation errors.
- helps to check the perfomance of the SQL query that use the aggregation function.
- Helps to text if there is proper sanitizing user input

## Question 3

I would pass a list product from to the function and check of it return the product according to the sorting order specified
for ascending I would check if it the first item in the list has the less price compared to the second and third.
for decending I would chekc if the the first item on the list has a higher price compared to the second and third item.
