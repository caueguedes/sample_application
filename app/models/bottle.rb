class Bottle < ApplicationRecord
  belongs_to :unit

  include Validations::Bottle
end
