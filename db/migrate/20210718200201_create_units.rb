class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :neighborhood
      t.string :phone

      # Added for future implementation on travels and simulations
      t.decimal :latitude, precision: 10, scale: 2
      t.decimal :longitude, precision: 10, scale: 2

      t.timestamps
    end
  end
end
