# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    adm = User.create({name: "Diego Barbosa", email: "admin@petgato.com.br", is_admin: true, password:"admin123", password_confirmation:"admin123"})
    adm2 = User.create({name: "Valentin Paes", email: "admin2@petgato.com.br", is_admin: true, password:"admin123", password_confirmation:"admin123"})