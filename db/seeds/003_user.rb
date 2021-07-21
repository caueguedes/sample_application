User.create(email: 'admin@gmail.com', password: '123456', admin: true)
User.create(email: 'staff@gmail.com', password: '123456', staff: true)#, unit_id: Unit.first.id)
User.create(email: 'user@gmail.com', password: '123456')