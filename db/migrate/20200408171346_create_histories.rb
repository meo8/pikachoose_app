class CreateHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
      t.string :decision
      t.string :kind
      t.string :link
      t.boolean :is_favorite
      t.string :comment
      t.integer :user_id

      t.timestamps
    end
  end
end
