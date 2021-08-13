FactoryBot.define do
  factory :user do
    email {}
    password {}

    trait :staff do
      staff { true }
    end

    trait :admin do
      admin { true }
    end
  end
end
