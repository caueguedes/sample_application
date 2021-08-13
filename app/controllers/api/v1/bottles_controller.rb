class Api::V1::BottlesController < Api::ApplicationController
  include Api::Pagination

  skip_before_action :doorkeeper_authorize!, only: :index

  def index
    authorize! :read, Bottle
    bottles = Bottle.accessible_by(current_ability)
    paginated_bottles, options = paginate(bottles)

    render json: serialize(BottleSerializer, paginated_bottles, options: options)
  end

  private
    def current_ability
      @current_ability ||= BottlesAbility.new current_user
    end
end
