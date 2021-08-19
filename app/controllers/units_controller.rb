class UnitsController < ApplicationController
  include Pagination
  before_action :authenticate_user!
  load_and_authorize_resource except: :index

  def index
    @units = paginate(Unit.accessible_by(current_ability))
  end

  def show
    binding.pry
    render 'units/show'
  end

  def new
    render 'units/show'
  end

  def create
    if @unit.save
      redirect_to @unit, notice: "Unit was successfully created."
    else
      render 'units/show', status: :unprocessable_entity
    end
  end

  def update
    if @unit.update(unit_params)
      redirect_to @unit, notice: "Unit was successfully updated."
    else
      render 'units/show', status: :unprocessable_entity
    end
  end

  def destroy
    @unit.destroy
    redirect_to units_url, notice: "Unit was successfully destroyed."
  end

  private
    def unit_params
      params.require(:unit).permit(:name, :address, :city, :neighborhood, :phone, :latitude, :longitude)
    end

    def current_ability
      @current_ability ||= UnitsAbility.new current_user
    end
end
