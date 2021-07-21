class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.string :brand
      t.integer :model_year
      t.decimal :gear
      t.integer :doors
      t.integer :fuel
      t.string :color
      t.boolean :air
      t.boolean :sound_system
      t.boolean :airbags
      t.integer :mileage

      t.timestamps
    end

    add_reference :vehicles, :unit, foreign_key: true
  end
end
