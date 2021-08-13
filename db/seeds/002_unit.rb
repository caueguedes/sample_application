5.times do
  Unit.create!(
    name: Faker::Company.name,
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    neighborhood: Faker::Address.community,
    phone: Faker::Base.numerify('###-###-####'),
    latitude: Faker::Number.between(from: 34.60, to: 39.60),
    longitude: Faker::Number::between(from: 85.66, to: 105.66)
  )
end
