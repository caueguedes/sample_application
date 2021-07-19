require 'rails_helper'

RSpec.describe "vehicles/index", type: :view do
  before(:each) do
    assign(:vehicles, [
      Vehicle.create!(
        :name => "Name",
        :brand => "Brand",
        :model_year => 2,
        :gear => "9.99",
        :doors => 3,
        :fuel => 4,
        :color => "Color",
        :air => false,
        :sound_system => false,
        :air => false,
        :airbags => false
      ),
      Vehicle.create!(
        :name => "Name",
        :brand => "Brand",
        :model_year => 2,
        :gear => "9.99",
        :doors => 3,
        :fuel => 4,
        :color => "Color",
        :air => false,
        :sound_system => false,
        :air => false,
        :airbags => false
      )
    ])
  end

  it "renders a list of vehicles" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Brand".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
    assert_select "tr>td", :text => "Color".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
  end
end
