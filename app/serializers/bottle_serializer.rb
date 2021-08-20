class BottleSerializer
  include JSONAPI::Serializer

  attributes :name, :brand, :country, :bottled, :bottle_type, :image, :coloring, :description
end
