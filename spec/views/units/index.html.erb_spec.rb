require 'rails_helper'

RSpec.describe "units/index", type: :view do
  before(:each) do
    assign(:units, [
      Unit.create!(
        :name => "Name",
        :address => "Address",
        :city => "City",
        :neighborhood => "Neighborhood",
        :phone => "Phone",
        :latitude => "9.99",
        :longitude => "9.99"
      ),
      Unit.create!(
        :name => "Name",
        :address => "Address",
        :city => "City",
        :neighborhood => "Neighborhood",
        :phone => "Phone",
        :latitude => "9.99",
        :longitude => "9.99"
      )
    ])
  end

  it "renders a list of units" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Address".to_s, :count => 2
    assert_select "tr>td", :text => "City".to_s, :count => 2
    assert_select "tr>td", :text => "Neighborhood".to_s, :count => 2
    assert_select "tr>td", :text => "Phone".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
  end
end
