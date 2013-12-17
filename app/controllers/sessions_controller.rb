class SessionsController < ApplicationController
  def new
  end

  def create
  	@user = User.find_by_username(params[:username])
  	if @user && @user.authenticate(params[:password])
  		session[:user_id] = @user.id
  		redirect_to @user
      # flash[:success] = "Logged in!"
  	else	

  		redirect_to root_url
      flash[:alert] = "Username or password is invalid"

  	end
  end

  def destroy
  	session[:user_id] = nil
  	redirect_to root_url
    flash[:success] = "Logged out!"

  end
end
