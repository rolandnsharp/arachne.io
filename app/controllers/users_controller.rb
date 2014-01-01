class UsersController < ApplicationController

	before_filter :authorize, only: [:show, :edit]


	def index
		@user = User.new

		if current_user
			redirect_to current_user
		end

	end

	def show
		
		# @user = User.find_by_slug(params[:slug])
		@user = User.find(params[:id])
		@thoughts = @user.thoughts
		@thoughts_search = @user.thoughts.text_search(params[:query])
		@thoughts_title_search = @user.thoughts.title_search(params[:query])
		@thought = @user.thoughts.new
		respond_to do |format|
	    	 format.html {if params[:query]	
			@thought_edit = @thoughts_search.first
		elsif params[:id_edit]
			@thought_edit = @user.thoughts.find(params[:id_edit]) 
	    end}
	    	format.js
	    end
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
			@thought = @user.thoughts.create(content: "This is a non-titled #thought, All #hashtags within a thought are represented in a  #non-hierarchical #web and in a particular #color.")
			@thought = @user.thoughts.create(content: "This is some #test #text. #Lorem #ipsum #dolor #sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
			@thought = @user.thoughts.create(content: "This is a titled #thought, All #hashtags are represented as children of the title #diamond in the #node and #line graph.", title: "Title Text")
			
			redirect_to @user, notice: "Thank you for signing up! A confirmation email has been sent to your address."
		else
			render "new"
		end
	end

	def edit
		@user = User.find(params[:id])
		@thoughts = @user.thoughts
		@thoughts_search = @user.thoughts.text_search(params[:query])
		@thought = @user.thoughts.new
		
	    if params[:query]	
			@thought_edit = @thoughts_search.first
		elsif params[:id_edit]
			@thought_edit = @user.thoughts.find(params[:id_edit]) 
	    end
		
	end

	private


    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

end


