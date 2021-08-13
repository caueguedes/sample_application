class CreateBottles < ActiveRecord::Migration[6.1]
  def change
    create_table :bottles do |t|
      t.string  :name
      t.string  :brand
      t.string  :country
      t.datetime :bottled
      t.integer :type
      t.string  :coloring
      t.string  :description

      t.timestamps
    end

    add_reference :bottles, :unit, foreign_key: true
  end
end
