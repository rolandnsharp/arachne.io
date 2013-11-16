class Thought < ActiveRecord::Base
  belongs_to :user

  validates :content, presence: true
            
  validates_uniqueness_of :title, :allow_blank => true, :case_sensitive => false
  
  def self.text_search(query)
  	if query.present?
      if query[0] == "#"
      where("content like :q", q: "%#{query}%")
      else
  		where("title like :q", q: "%#{query}%")
      end
  	else
  		scoped
  	end
  end
end
