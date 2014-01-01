class User < ActiveRecord::Base



	has_many :thoughts, dependent: :destroy
	has_secure_password

	


  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, format:     { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  

end
