class UnitSerializer
  include JSONAPI::Serializer

  attributes :name, :address, :city, :neighborhood, :phone, :latitude, :longitude
end
