module Validations
  module Plan
    extend ActiveSupport::Concern

    included do
      validates :title, length: {maximum: 50}
      validates :price, presence: true,  numericality: {greater_than: 0}
      validate :description_type

      def description_type
        errors.add(:description, "Description receives a Array Type") unless description.is_a? Array
        errors.add(:description, "Description have to be text") unless description.all? String
      end
    end
  end
end
