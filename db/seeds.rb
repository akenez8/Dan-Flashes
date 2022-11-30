# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating Users..."

U1= User.create(name:"Peet", password:"admin")
U2= User.create(name:"Paul", password:"poopy")
U3= User.create(name:"Chloe", password:"booty")
U4= User.create(name:"GianDeca", password:"temp")

puts "Creating Shirts..."

S1= Shirt.create(name:"The Classic", image:"https://m.media-amazon.com/images/I/61dv9kAGhGL._AC_UX679_.jpg", price: 500)
S2= Shirt.create(name:"Super Intricate Pattern", image:"https://i.etsystatic.com/27918564/r/il/bfcff6/3604168594/il_794xN.3604168594_rt8q.jpg", price: 800)
S3= Shirt.create(name:"Affordable, Yet Intricate", image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTUdvg1nUMzxtqE-7WZlqEvPsN_ZVDl3dQ75sOtC9QQkHovT_CsGkZXY2oXClOZQY-YhBPmykUXA&usqp=CAc", price: 250)
S4= Shirt.create(name:"That's What I Call Intricate", image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbFs7cMgwJ8mFIzooG4-TDDc9ID-G8PHtbC1GvSPMBC3GEpI0gFuBdPIiSEFCgIADUlxyM7pjYWw&usqp=CAc", price: 600)
S5= Shirt.create(name:"Intricate Tee", image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAd2xBWfaWJ61s65En0tjBZMJszxZv2dmfTgxcbvaelFuX-I2BbMwqc51cbwy9S2D6KOLEeXOwQgSBaSkf5Ga5fdyuGsBlV2ZApiFD4N8", price: 175)
S6= Shirt.create(name:"The Super Intricate Shirtnado", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiH5xK7YTlJv2gt85n0p4L2skoN9aIyhdg8Y3ARvv8kpZ9pYv5vONt62u31zH5F3ACKMM&usqp=CAU", price: 900)
S7= Shirt.create(name:"The Insanely Intricate Special Edition", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW05NtZBX2Df27tW2K_7tJ1KMkUL98in13Iw&usqp=CAU", price: 1500)
S8= Shirt.create(name:"Idyllic Intricacy", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsUYWGT7vTlnb5E26meTAmuqyAwng3VX3Gw&usqp=CAU", price: 400)
S9= Shirt.create(name:"Intricate Illustrator's Masterpiece", image:"", price: 375)


puts "Creating Purchases..."

P1= Purchase.create(user_id: U1.id,shirt_id: S1.id, price: 500)
P2= Purchase.create(user_id: U1.id, shirt_id:S2.id, price:800)
P3= Purchase.create(user_id: U1.id, shirt_id:S3.id, price: 250)
P4= Purchase.create(user_id: U2.id, shirt_id:S4.id, price: 600)

puts "Seeding completed successfully"