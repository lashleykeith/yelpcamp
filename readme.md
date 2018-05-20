# Our First Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update
* remove

#comnads we have used

1. use demo
2. show dbs
3. db.dogs.insert({name: "Rusty", breed: "Mutt"})
4. show collections
5. system.indexes
6. db.dogs.find()
7. db.dogs.find({name: "Rusty"})
8. db.dogs.find()
9. db.dogs.find({breed: "Mutt"})
10.  db.dogs.update({name: "Lulu"}, {breed: "Labradoodle"})
11. db.dogs.find()
13. db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})
14. db.dogs.find()
15. db.dogs.remove({breed: "Labradoodle"})
16. db.dogs.remove({breed: "Mutt"}).limit(1)
17. db.dogs.remove({breed: "Mutt"})

#Show page



RESTFUL ROUTES

name        url       verb      desc.
===============================================================
INDEX       /dogs      GET      Display a list of all dog
NEW         /dogs/new  GET      Display form to make a new dog
CREATE      /dogs      POST     Add new dog to DB
SHOW        /dogs/:id  GET      Shows info about one dog

INDEX     /campground
NEW       /campground/new
CREATE    /campground
SHOW      /campground/:id

NEW       /campground/:id/comments/new   GET
CREATE    /campground/:id/comments       POST

db.campgrounds.drop()