FactoryBot.define do
  factory :vehicle do
    name { "MyString" }
    brand { "MyString" }
    model_year { 1 }
    gear { "9.99" }
    doors { 1 }
    fuel { 1 }
    color { "MyString" }
    air { false }
    sound_system { false }
    air { false }
    airbags { false }
  end
end
