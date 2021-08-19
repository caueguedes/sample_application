class PlansController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource except: :index

  def index
    authorize! :read, Plan
    @plans = Plan.accessible_by(current_ability)
  end

  def show
    render 'plans/show'
  end

  def new
    render 'plans/show'
  end

  def create
    if @plan.save
      redirect_to @plan, notice: "Plan was successfully created."
    else
      render 'plans/show', status: :unprocessable_entity
    end
  end

  def update
    if @plan.update(plan_params)
      redirect_to @plan, notice: "Plan was successfully updated."
    else
      render 'plans/show', status: :unprocessable_entity
    end
  end

  def destroy
    @plan.destroy

    redirect_to plans_url, notice: "Plan was successfully destroyed."
  end

  private
    def plan_params
      params.require(:plan).permit(:title, :subtitle, :price, :description)
    end

    def current_ability
      @current_ability ||= PlansAbility.new(current_user)
    end
end
