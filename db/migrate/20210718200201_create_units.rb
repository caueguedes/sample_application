class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :neighborhood, null: false
      t.string :phone, null: false

      # Added for future implementation on travels and simulations
      t.decimal :latitude, precision: 10, scale: 2
      t.decimal :longitude, precision: 10, scale: 2

      t.timestamps
    end
  end
end
