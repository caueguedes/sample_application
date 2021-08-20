class PlanSerializer
  include JSONAPI::Serializer

  attributes :title, :subtitle, :price, :description
end
