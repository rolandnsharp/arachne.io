class AddTagsToThoughts < ActiveRecord::Migration
  def change
  	add_column :thoughts, :tags, :string
  end
end
