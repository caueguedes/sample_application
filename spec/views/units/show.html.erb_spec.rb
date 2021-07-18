require 'rails_helper'

RSpec.describe "units/show", type: :view do
  before(:each) do
    @unit = assign(:unit, Unit.create!(
      :name => "Name",
      :address => "Address",
      :city => "City",
      :neighborhood => "Neighborhood",
      :phone => "Phone",
      :latitude => "9.99",
      :longitude => "9.99"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Address/)
    expect(rendered).to match(/City/)
    expect(rendered).to match(/Neighborhood/)
    expect(rendered).to match(/Phone/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/9.99/)
  end
end
