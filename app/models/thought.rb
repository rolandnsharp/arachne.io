class Thought < ActiveRecord::Base
  belongs_to :user

  validates :content, presence: true
            
  validates_uniqueness_of :title, :allow_blank => true, :case_sensitive => false
  
  def self.text_search(query)
  	if query.present?
  		where("content like :q", q: "%#{query}%")
  	else
  		scoped
  	end
  end
end
