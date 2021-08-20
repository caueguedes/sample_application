class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.string :title
      t.string :subtitle
      t.decimal :price, precision: 10, scale: 2
      t.text :description, array: true

      t.timestamps
    end
  end
end
