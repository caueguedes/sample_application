class Api::V1::UnitsController < Api::ApplicationController
  skip_before_action :doorkeeper_authorize!, only: :index


  def index
    authorize! :read, Unit
    @units = Unit.accessible_by(current_ability)

    render json: serialize(UnitSerializer, @units)
  end

  private
    def current_ability
      @current_ability ||= UnitsAbility.new current_user
    end
end
