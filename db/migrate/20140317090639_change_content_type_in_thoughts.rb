class ChangeContentTypeInThoughts < ActiveRecord::Migration
  def change

	def self.up
    change_column :thoughts, :content, :text, :limit => nil
	end
	def self.down
	    # This might cause trouble if you have strings longer
	    # than 255 characters.
	    change_column :thoughts, :content, :string
	end

  end
end
