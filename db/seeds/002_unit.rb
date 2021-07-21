5.times do
  Unit.create(
    name: Faker::Company.name,
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    neighborhood: Faker::Address.community,
    phone: Faker::PhoneNumber.phone_number_with_country_code,
    latitude: Faker::Address.latitude,
    longitude: Faker::Address::longitude
  )
end
