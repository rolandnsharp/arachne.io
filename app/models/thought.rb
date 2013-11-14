class Thought < ActiveRecord::Base
  belongs_to :user

  validates :content, presence: true,
                    uniqueness: { case_sensitive: false }

  def self.text_search(query)
  	if query.present?
  		where("content like :q", q: "%#{query}%")
  	else
  		scoped
  	end
  end
end
