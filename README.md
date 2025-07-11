### Habit_Tracker

baseurl = http://localhost:3000/api

## habit

## 📘 Habit API Endpoints

| Method | Endpoint               | Description                     | Body Parameters                                                                  |
| ------ | ---------------------- | ------------------------------- | -------------------------------------------------------------------------------- |
| GET    | `/habits`              | Get all habits                  | –                                                                                |
| POST   | `/habits`              | Create a new habit              | `{ title, description, category, notes, priority, reminderDays, reminderTimes }` |
| PUT    | `/habits/:id`          | Update an existing habit        | `{ notes, priority, reminderDays, reminderTimes }`                               |
| DELETE | `/habits/:id`          | Delete a habit by ID            | –                                                                                |
| PUT    | `/habits/:id/reminder` | Toggle email reminder for habit | –                                                                                |

## habit history

## 📘 Habit history Endpoints

| Method | Endpoint               | Description            | Body Parameters               |
| ------ | ---------------------- | ---------------------- | ----------------------------- |
| GET    | `/habit-history?days=` | Get all habits history | –                             |
| POST   | `/habit-history`       | Create a new habit     | `{  habitId, status, notes }` |

## Auth

| Method | Endpoint       | Description | Body Parameters |
| ------ | -------------- | ----------- | --------------- |
| POST   | `/auth/login`  | login       | –               |
| POST   | `/auth/logout` | logout      | -               |
| POST   | `/auth/me`     | check user  | -               |
