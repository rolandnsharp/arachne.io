class ChangeContentTypeInThoughts < ActiveRecord::Migration
  def change

    change_column :thoughts, :content, :text, :limit => nil



  end
end
