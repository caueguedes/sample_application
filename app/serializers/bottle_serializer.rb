class BottleSerializer
  include JSONAPI::Serializer

  attributes :name, :brand, :country, :bottled, :type, :coloring, :description
end
