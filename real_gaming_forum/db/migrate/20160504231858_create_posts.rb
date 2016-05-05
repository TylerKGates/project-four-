class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :title
      t.string :author
      t.text :body
      t.integer :like_count
      t.string :category

      t.timestamps null: false
    end
  end
end
