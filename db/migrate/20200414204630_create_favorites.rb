class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.string :comment
      t.integer :user_id
      t.integer :film_id
      t.string :title
      t.text :overview
      t.integer :vote_average
      t.string :release_date

      t.timestamps
    end
  end
end
