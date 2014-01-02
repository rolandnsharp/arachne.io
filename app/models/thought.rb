class Thought < ActiveRecord::Base
  belongs_to :user

  validates :content, presence: true
            
  validates_uniqueness_of :title, :allow_blank => true, :case_sensitive => false
  
  def self.text_search(query)
  	if query.present?
      where("title like :q or content like :q", q: "%#{query}%")
  	else
  		scoped
  	end
  end

  def self.tags_search(query)
    if query.present?
      where("title like :q or tags like :q", q: "%#{query}%")
    else
      scoped
    end
  end

  def self.all_search(query)
    if query.present?
      where("title like :q or content like :q or tags like :q", q: "%#{query}%")
    else
      scoped
    end
  end


# not in use
  def self.title_search(query)  
    if query.present?
      where("title like :q", q: "%#{query}%")
    else
      scoped
    end
  end
end
