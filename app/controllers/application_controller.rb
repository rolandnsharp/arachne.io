class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


private

	def current_user
		@current_user ||= User.find(session[:user_id]) if session[:user_id]
	end

	helper_method :current_user

	def authorize

        if params[:user_id]
        	redirect_to root_url, alert: "Not authorized" if current_user.id.to_s != params[:user_id].to_s
        elsif params[:username]
        	redirect_to root_url, alert: "Not authorized" if current_user.username.to_s != params[:username].to_s
        end

        
    end

end
