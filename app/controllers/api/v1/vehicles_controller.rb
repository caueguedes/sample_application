class Api::V1::VehiclesController < ApplicationController
  before_action :set_api_v1_vehicle, only: %i[ show update destroy ]

  # GET /api/v1/vehicles
  # GET /api/v1/vehicles.json
  def index
    @api_v1_vehicles = Api::V1::Vehicle.all
  end

  # GET /api/v1/vehicles/1
  # GET /api/v1/vehicles/1.json
  def show
  end

  # POST /api/v1/vehicles
  # POST /api/v1/vehicles.json
  def create
    @api_v1_vehicle = Api::V1::Vehicle.new(api_v1_vehicle_params)

    if @api_v1_vehicle.save
      render :show, status: :created, location: @api_v1_vehicle
    else
      render json: @api_v1_vehicle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/vehicles/1
  # PATCH/PUT /api/v1/vehicles/1.json
  def update
    if @api_v1_vehicle.update(api_v1_vehicle_params)
      render :show, status: :ok, location: @api_v1_vehicle
    else
      render json: @api_v1_vehicle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/vehicles/1
  # DELETE /api/v1/vehicles/1.json
  def destroy
    @api_v1_vehicle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_vehicle
      @api_v1_vehicle = Api::V1::Vehicle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_v1_vehicle_params
      params.require(:api_v1_vehicle).permit(:name, :brand, :model_year, :gear, :doors, :fuel, :color, :air, :sound_system, :air, :airbags)
    end
end
