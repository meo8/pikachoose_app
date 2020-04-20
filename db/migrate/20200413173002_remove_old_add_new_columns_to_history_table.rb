class RemoveOldAddNewColumnsToHistoryTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :histories, :decision
    remove_column :histories, :kind
    remove_column :histories, :link
    remove_column :histories, :is_favorite
    add_column :histories, :film_id, :integer
    add_column :histories, :title, :string
    add_column :histories, :overview, :text
    add_column :histories, :vote_average, :integer
    add_column :histories, :release_date, :string
  end
end
