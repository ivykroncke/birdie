class CreateTaxons < ActiveRecord::Migration[5.2]
  def change
    create_table :taxons do |t|
      t.string :name
      t.references :bird, foreign_key: true

      t.timestamps
    end
  end
end
