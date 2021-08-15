module Validations
  module Unit
    extend ActiveSupport::Concern

    included do
      validates_presence_of :name
      validates_presence_of :address
      validates_presence_of :city
      validates_presence_of :neighborhood
      validates :latitude, presence: true, numericality: {only_float: true}
      validates :longitude, presence: true, numericality: {only_float: true}
      validates :phone, format: {
        with: /\A[0-9]{3}-[0-9]{3}-[0-9]{4}\z/, :message => "Format not allowed"
      }
    end

  end
end
