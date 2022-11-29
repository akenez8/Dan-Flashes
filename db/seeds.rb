# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating Users..."

User.create(name:"Peet", password:"admin")
User.create(name:"Paul", password:"poopy")
User.create(name:"Chloe", password:"booty")
User.create(name:"GianDeca", password:"temp")

puts "Creating Shirts..."

Shirt.create(name:"Swayzine Longsleeve", image:"https://m.media-amazon.com/images/I/61dv9kAGhGL._AC_UX679_.jpg" price: 500)


