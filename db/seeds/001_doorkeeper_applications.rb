if Doorkeeper::Application.count.zero?
  Doorkeeper::Application.create(name: "Api clients", redirect_uri: "", scopes: "",
     uid: "f8R9N0AAkYtOfnVM_W9ZnLFa85uJjgbuPztMSP2mU4E", secret: "nYpmUxwythHSzB-7RXnamJ6ZSNirderMVI2AABn86m4")
end
