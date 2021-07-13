if Doorkeeper::Application.count.zero?
  Doorkeeper::Application.create(name: "Api clients", redirect_uri: "", scopes: "")
end