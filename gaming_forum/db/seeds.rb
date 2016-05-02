# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.delete_all
Post.create!([
  {id: 1, author: "ty", title: "First Post!", body: "First post, wat do??", like_count: 0},
  {id: 2, author: "tyy", title: "Second Pooost", body: "sup, second post yall", like_count: 0},
  {id: 3, author: "tyty", title: "suh dude", body: "hey.. video games roolz lol", like_count: 0}
  ])
