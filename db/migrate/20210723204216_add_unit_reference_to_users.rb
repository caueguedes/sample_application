class AddUnitReferenceToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :unit, foreign_key: true
  end
end
