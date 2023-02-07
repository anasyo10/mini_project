# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


User.create(role: :student, first_name: 'Student', last_name: 'Name', email: 'student@email.com', password: '123123', password_confirmation: '123123')
User.create(role: :admin, first_name: 'Admin', last_name: 'Name', email: 'admin@email.com', password: '123123', password_confirmation: '123123')
Question.create(active: true, data: [
  {
    title: 'What is your name',
    required: true
  },
  {
    title: 'How long did it take you to code this?',
    required: true
  },
  {
    title: 'When did you first start coding?',
    required: true
  },
])
