# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.delete_all

Post.create!([
  {id: 1, title: "first", author: "tyman420", body: "first post. wassup?", like_count: 0},
  {id: 2, title: "second", author: "tyty", body: "what video game we talking about", like_count: 0}
  ])
