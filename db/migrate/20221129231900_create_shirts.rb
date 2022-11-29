class CreateShirts < ActiveRecord::Migration[6.1]
  def change
    create_table :shirts do |t|
      t.string :name
      t.string :image
      t.integer :price

      t.timestamps
    end
  end
end
