class Api::V1::PlansController < Api::ApplicationController
  skip_before_action :doorkeeper_authorize!, only: :index

  def index
    authorize! :read, Plan
    plans = Plan.accessible_by(current_ability)

    render json: serialize(PlanSerializer, plans)
  end

  # TODO: Subscription
  def subscribe
  end

  # TODO: ALL PLANS I'm subscribred
  def my_plans
  end

  private
    def current_ability
      @current_ability ||= PlansAbility.new(current_user)
    end
end
