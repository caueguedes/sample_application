class Unit < ApplicationRecord
  include Validations::Unit

  has_many :bottles
end
