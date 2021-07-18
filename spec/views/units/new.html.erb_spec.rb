require 'rails_helper'

RSpec.describe "units/new", type: :view do
  before(:each) do
    assign(:unit, Unit.new(
      :name => "MyString",
      :address => "MyString",
      :city => "MyString",
      :neighborhood => "MyString",
      :phone => "MyString",
      :latitude => "9.99",
      :longitude => "9.99"
    ))
  end

  it "renders new unit form" do
    render

    assert_select "form[action=?][method=?]", units_path, "post" do

      assert_select "input[name=?]", "unit[name]"

      assert_select "input[name=?]", "unit[address]"

      assert_select "input[name=?]", "unit[city]"

      assert_select "input[name=?]", "unit[neighborhood]"

      assert_select "input[name=?]", "unit[phone]"

      assert_select "input[name=?]", "unit[latitude]"

      assert_select "input[name=?]", "unit[longitude]"
    end
  end
end
