module Validations
  module Bottle
    extend ActiveSupport::Concern

    included do
      validates_presence_of :unit
      validates_presence_of :name
      validates_presence_of :brand
      validates_presence_of :country
      validates :bottled, numericality: {greater_than: 1500, less_than_or_equal_to: DateTime.now.year}
      # validates :type, presence: true, inclusion: %w[red white rose sparkling fortified]
      validates :description, presence: true, length: {maximum: 240}
    end

  end
end
