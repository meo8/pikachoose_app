class AddLanguageToHistories < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :original_language, :string
  end
end
