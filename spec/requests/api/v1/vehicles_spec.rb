require 'rails_helper'

RSpec.describe "Api::V1::Vehicles", type: :request do
  describe "GET /api/v1/vehicles" do
    it "works! (now write some real specs)" do
      get api_v1_vehicles_path
      expect(response).to have_http_status(200)
    end
  end
end
