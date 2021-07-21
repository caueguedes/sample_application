Unit.all.each do |unit|
  rand(2..10).times do
    Vehicle.create!(
      name: Faker::Vehicle.model,
      brand: Faker::Vehicle.manufacture,
      model_year: Faker::Vehicle.year,
      gear: Faker::Vehicle.engine,
      doors: Faker::Vehicle.doors,
      fuel: Faker::Vehicle.fuel_type,
      color: Faker::Vehicle.color,
      air: Faker::Boolean.boolean,
      sound_system: Faker::Boolean.boolean,
      airbags: Faker::Boolean.boolean,
      mileage: Faker::Vehicle.mileage(min:20_000, max:250_000),
      unit_id: unit.id
    )
  end
end
