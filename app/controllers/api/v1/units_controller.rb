class Api::V1::UnitsController < Api::ApplicationController
  before_action :set_unit, only: %i[ show update destroy ]

  def index
    @units = Unit.all
  end

  def show
  end

  def create
    @unit = Unit.new(unit_params)

    if @api.save
      render :show, status: :created, location: @unit
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  def update
    if @unit.update(unit_params)
      render :show, status: :ok, location: @unit
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @unit.destroy
  end

  private
    def set_unit
      @unit = Unit.find(params[:id])
    end

    def unit_params
      params.require(:unit).permit(:name, :address, :city, :neighborhood, :phone, :latitude, :longitude)
    end
end
