class SessionsController < ApplicationController
  def new
  end

  def create
  	@user = User.find_by_username(params[:username])
  	if @user && @user.authenticate(params[:password])
  		session[:user_id] = @user.id
  		redirect_to @user, notice: "Logged in!"
  	else
  		flash.now.alert = "email or password is invalid"
  		render "new"
  	end
  end
end
