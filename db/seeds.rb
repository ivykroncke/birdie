# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all
Bird.destroy_all

ivy = User.create(
  username: "Ivycakes",
  emailaddress: "ivy@meowcat.com"
)

fritz = User.create(
  username: "Fritzle",
  emailaddress: "fritzy@gsu.edu"
)

birdie = Bird.create(
  name: "Crested Beakface",
  description: "Great plumage.",
  image: "https://content.presspage.com/uploads/1763/1920_year-of-the-bird-george-grall.jpg?10000"
)

some_bird_post = Post.create(
    title: "Let me tell you about this bird...",
    content: "This bird chirps too much.",
    user_id: ivy.id,
    bird_id: birdie.id
  )

another_bird_post = Post.create(
  title: "For the Birds",
  content: "This site is great and all but you know what I think of birds, really? They squeal!",
  user_id: ivy.id,
  bird_id: birdie.id
)