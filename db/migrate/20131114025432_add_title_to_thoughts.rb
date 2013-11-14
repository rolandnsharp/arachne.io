class AddTitleToThoughts < ActiveRecord::Migration
  def change
    add_column :thoughts, :title, :string
  end
end
