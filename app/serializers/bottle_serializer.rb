class BottleSerializer
  include JSONAPI::Serializer

  attributes :name, :brand, :country, :bottled, :bottle_type, :coloring, :description
end
