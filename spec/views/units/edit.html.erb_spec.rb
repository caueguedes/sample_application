require 'rails_helper'

RSpec.describe "units/edit", type: :view do
  before(:each) do
    @unit = assign(:unit, Unit.create!(
      :name => "MyString",
      :address => "MyString",
      :city => "MyString",
      :neighborhood => "MyString",
      :phone => "MyString",
      :latitude => "9.99",
      :longitude => "9.99"
    ))
  end

  it "renders the edit unit form" do
    render

    assert_select "form[action=?][method=?]", unit_path(@unit), "post" do

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
