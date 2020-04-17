class AddLanguageToFavorites < ActiveRecord::Migration[6.0]
  def change
    add_column :favorites, :original_language, :string
  end
end
