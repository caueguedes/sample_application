FactoryBot.define do
  factory :unit do
    name { Faker::Lorem.sentence(word_count: 2) }
    address { Faker::Address.street_address }
    city { Faker::Address.city }
    neighborhood { Faker::Address.community }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }
    phone { "#{numbers}-#{numbers}-#{numbers(4)}" }
  end

  def numbers(n = 3)
    Faker::Number.number(digits: n)
  end
end


