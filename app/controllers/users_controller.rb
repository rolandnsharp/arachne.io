class UsersController < ApplicationController

	before_filter :authorize, only: [:show]


	def index
		@user = User.new

		if current_user
			redirect_to current_user
		end

	end

	def show

		@user = User.find(params[:id])
		@thoughts = @user.thoughts
		@thoughts_search = Thought.text_search(params[:query])
		@thought = @user.thoughts.new
		
	    if params[:query]	
			@thought_edit = @thoughts_search.first
		elsif params[:id_edit]
			@thought_edit = @user.thoughts.find(params[:id_edit]) 
	    end
	end

	def new
		@user = User.new
	end

	def create
		
		@user = User.new(user_params)
		if @user.save
			session[:user_id] = @user.id
			UserMailer.signup_confirmation(@user).deliver
			redirect_to @user, notice: "Thank you for signing up! A confirmation email has been sent to your address."
		else
			render "new"
		end
	end




	private


    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

end


