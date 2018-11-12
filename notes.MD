steps

-set up database
-adjust everything and make new steps to build out app
-
- user
    username
    email
    has many 
      schedules
      categories
      activities through schedules

, schedule
    date
    hours default 24
    belongs to
      user
    has many
      categories
      activities

, category
    name
      belongs to
        user
        schedule
      has many
        ativities

, activity,
    name
    duration
    belongs to
      schedule
      category default other
