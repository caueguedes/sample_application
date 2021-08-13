class Api::ApplicationController < ActionController::API
  include ::Api::ErrorHandler

  before_action :doorkeeper_authorize!


  private
    def current_user
      @current_user ||=
        if @doorkeeper_token
          User.find_by(id: doorkeeper_token[:resource_owner_id])
        else
          User.new
        end
    end

    def serialize(serializer, collection, options: {})
      serializer.new(collection, options).serializable_hash.to_json
    end
end
