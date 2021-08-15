class BottlesController < ApplicationController
  include Pagination
  before_action :authenticate_user!
  load_and_authorize_resource except: :index

  def index
    @bottles = paginate(Bottle.accessible_by(current_ability))
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
    if @bottle.save
      redirect_to @bottle, notice: "Bottle was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @bottle.update(bottle_params)
      redirect_to @bottle, notice: "Bottle was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @bottle.destroy

    redirect_to bottles_url, notice: "Bottle was successfully destroyed."
  end

  private
    def bottle_params
      params.require(:bottle).permit(:name, :brand, :model_year, :gear, :doors, :fuel, :color, :air, :sound_system, :airbags, :mileage)
    end

    def current_ability
      @current_ability ||= BottlesAbility.new current_user
    end
end
