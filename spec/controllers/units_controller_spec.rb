require 'rails_helper'

# `rails-controller-testing` gem.

RSpec.describe UnitsController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # Unit. As you add validations to Unit, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # UnitsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      Unit.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      unit = Unit.create! valid_attributes
      get :show, params: {id: unit.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #new" do
    it "returns a success response" do
      get :new, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #edit" do
    it "returns a success response" do
      unit = Unit.create! valid_attributes
      get :edit, params: {id: unit.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Unit" do
        expect {
          post :create, params: {unit: valid_attributes}, session: valid_session
        }.to change(Unit, :count).by(1)
      end

      it "redirects to the created unit" do
        post :create, params: {unit: valid_attributes}, session: valid_session
        expect(response).to redirect_to(Unit.last)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'new' template)" do
        post :create, params: {unit: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested unit" do
        unit = Unit.create! valid_attributes
        put :update, params: {id: unit.to_param, unit: new_attributes}, session: valid_session
        unit.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the unit" do
        unit = Unit.create! valid_attributes
        put :update, params: {id: unit.to_param, unit: valid_attributes}, session: valid_session
        expect(response).to redirect_to(unit)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'edit' template)" do
        unit = Unit.create! valid_attributes
        put :update, params: {id: unit.to_param, unit: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested unit" do
      unit = Unit.create! valid_attributes
      expect {
        delete :destroy, params: {id: unit.to_param}, session: valid_session
      }.to change(Unit, :count).by(-1)
    end

    it "redirects to the units list" do
      unit = Unit.create! valid_attributes
      delete :destroy, params: {id: unit.to_param}, session: valid_session
      expect(response).to redirect_to(units_url)
    end
  end

end
