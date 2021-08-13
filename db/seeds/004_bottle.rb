Unit.all.each do |unit|
  FactoryBot.create_list(:bottle, rand(2..30), unit: unit)
end
