require 'rails_helper'

RSpec.describe "vehicles/edit", type: :view do
  before(:each) do
    @vehicle = assign(:vehicle, Vehicle.create!(
      :name => "MyString",
      :brand => "MyString",
      :model_year => 1,
      :gear => "9.99",
      :doors => 1,
      :fuel => 1,
      :color => "MyString",
      :air => false,
      :sound_system => false,
      :air => false,
      :airbags => false
    ))
  end

  it "renders the edit vehicle form" do
    render

    assert_select "form[action=?][method=?]", vehicle_path(@vehicle), "post" do

      assert_select "input[name=?]", "vehicle[name]"

      assert_select "input[name=?]", "vehicle[brand]"

      assert_select "input[name=?]", "vehicle[model_year]"

      assert_select "input[name=?]", "vehicle[gear]"

      assert_select "input[name=?]", "vehicle[doors]"

      assert_select "input[name=?]", "vehicle[fuel]"

      assert_select "input[name=?]", "vehicle[color]"

      assert_select "input[name=?]", "vehicle[air]"

      assert_select "input[name=?]", "vehicle[sound_system]"

      assert_select "input[name=?]", "vehicle[air]"

      assert_select "input[name=?]", "vehicle[airbags]"
    end
  end
end
