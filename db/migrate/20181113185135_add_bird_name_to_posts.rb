class AddBirdNameToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :birdname, :string
  end
end
