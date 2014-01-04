class ThoughtsController < ApplicationController
	before_filter :authorize

	def index
		@user = User.find(params[:user_id])
		@thoughts = @user.thoughts
		@thoughts_search = Thought.text_search(params[:query])
		@thought = @user.thoughts.first
	end

	def new
		@user = User.find(params[:user_id])
		@thought = @user.thoughts.new
		# redirect_to edit_user_path(@user)
		respond_to do |format|
	    	# format.html {redirect_to edit_user_path(@user)}
	    	format.js
	    end
	end
	
	def create
	  @user = User.find(params[:user_id])
	  @thought = @user.thoughts.new(thought_params)
	  @thoughts = @user.thoughts
	  # @thoughts_search = @user.thoughts.text_search(params[:query])
	  if @thought.save

	  	respond_to do |format|
	    	format.html {redirect_to edit_user_path(@user)}
	    	format.js
	    end

	    flash[:success] = "Thanks for your thought!"
	  else
	    render :new
	  end
	end

	def show
		@user = User.find(params[:user_id])
		@thought = @user.thoughts.find(params[:id])
		@thoughts_search = Thought.text_search(params[:query])
		respond_to do |format|
	    	
	    	format.js
	    end

	end

	def edit
		# @user = User.find_by_username(params[:id])
		# @thought = @user.thoughts.find(params[:id])
		


		@user = User.find(params[:user_id])
		@thought = @user.thoughts.find(params[:id])
		@thoughts = @user.thoughts
		# render :edit
		# redirect_to edit_user_path(@user)
		respond_to do |format|
	    	
	    	format.js
	    end
		
	end

	def update
	    @user = User.find(params[:user_id])
		@thought = @user.thoughts.find(params[:id])
		@thoughts = @user.thoughts
	    if @thought.update(thought_params)
		redirect_to edit_user_path(@user)
	     
	      flash[:success] = "Thought successfully updated!"
	    else
	      render :edit
	    end
    end

	def destroy
		@user = User.find(params[:user_id])
		@thought = @user.thoughts.find(params[:id])
	    @thought.destroy
	    respond_to do |format|
	    	format.html {redirect_to edit_user_path(@user)}
	    	format.js
	    end

	    
	    flash[:success] = "Thought successfully deleted!"

	end


private

def thought_params
  params.require(:thought).permit(:content, :title, :tags)
end



end