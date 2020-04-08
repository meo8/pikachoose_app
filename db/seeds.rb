# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
histories = [
  {
    decision: 'the butterfly effect',
    kind: "movie",
    link: "https://www.imdb.com/title/tt0289879/ ",
    is_favorite: true ,
    comment: "this movie changed my life.",
    user_id: 1
  },
  {
    decision: 'be kind rewind',
    kind: "movie",
    link: "https://www.imdb.com/title/tt0799934/",
    is_favorite: true ,
    comment: "this movie is so wholesum & stupid.",
    user_id: 1
  },
  {
    decision: 'homemade lucky charms cereal',
    kind: "recipe",
    link: "https://www.brit.co/homemade-cereal/",
    is_favorite: false ,
    comment: "this cereal is trash.",
    user_id: 1
  }
]

histories.each do |attributes|
  History.create attributes
end