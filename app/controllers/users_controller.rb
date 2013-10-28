class UsersController < ApplicationController
	before_filter :authorize, only: [:show, :new]
	def index
		
	end

	def show

		@user = User.find(params[:id])

	end

	def new
		@user = User.new
	end

	def create
		
		@user = User.new(user_params)
		if @user.save
			session[:user_id] = @user.id
			redirect_to @user, notice: "Thank you for signing up!"
		else
			render "new"
		end
	end




	private


    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

end


