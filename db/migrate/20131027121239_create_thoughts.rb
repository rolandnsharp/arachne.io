class CreateThoughts < ActiveRecord::Migration
  def change
    create_table :thoughts do |t|
      t.string :content
      t.references :user, index: true

      t.timestamps
    end
  end
end
