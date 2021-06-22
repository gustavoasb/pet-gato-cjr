class AddNoteToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :note, :string
  end
end
