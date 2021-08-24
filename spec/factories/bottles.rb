FactoryBot.define do
  factory :bottle do
    name { Faker::Lorem.word }
    brand { Faker::Lorem.word }
    country { Faker::Address.country }
    bottled { Faker::Number.between(from: 1501, to: DateTime.now.year) }
    image { Faker::LoremFlickr.image }
    # sequence :type, %w[red white rose sparkling fortified].cycle
    # sequence :coloring, %w[red white rose].cycle
    description { Faker::Lorem.paragraph }

    association :unit, factory: :unit
  end
end
