class AddPosterAndBackdropColumnToHistoryAndFavoriteTables < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :poster_path, :string
    add_column :histories, :backdrop_path, :string
    add_column :favorites, :poster_path, :string
    add_column :favorites, :backdrop_path, :string
  end
end
