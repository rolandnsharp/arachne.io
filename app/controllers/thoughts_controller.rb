class ThoughtsController < ApplicationController
	# before_filter :authorize
	before_action :set_user

	def index
		@thoughts = @user.thoughts
		@thoughts_search = Thought.text_search(params[:query])
		@thought = @user.thoughts.first
	end

	def new
		@thought = @user.thoughts.new
		# redirect_to edit_user_path(@user)
		respond_to do |format|
	    	format.js
	    end
	end
	
	def create
	  @thoughts = @user.thoughts
	  @thought = @user.thoughts.new(thought_params)
	  # @thoughts_search = @user.thoughts.text_search(params[:query])
	  if @thought.save
	  	  respond_to do |format|
	      format.js
	    end
	    # flash[:success] = "Thanks for your thought!"
	  else
	    render :new
	  end
	end

	def show
		@thoughts = @user.thoughts
		@thought = @user.thoughts.find(params[:id])
		@thoughts_search = Thought.text_search(params[:query])
		respond_to do |format|
	    	format.js
	    end
	end

	def edit
		@thought = @user.thoughts.find(params[:id])
		@thoughts = @user.thoughts
		# render :edit
		# redirect_to edit_user_path(@user)
		respond_to do |format|
	    	format.js
	    end
	end

	def update
		@thought = @user.thoughts.find(params[:id])
		@thoughts = @user.thoughts
	    if @thought.update(thought_params)
		# redirect_to edit_user_path(@user)
	    respond_to do |format|
	    	format.js
	    end 
	      # flash[:success] = "Thought successfully updated!"
	    else
	      render :edit
	    end
    end

	def destroy
		@thought = @user.thoughts.find(params[:id])
	    @thought.destroy
	    @thoughts = @user.thoughts
	    @thought = @user.thoughts.new
	    respond_to do |format|
	    	format.js
	    end
	end

private

def thought_params
  params.require(:thought).permit(:content, :title, :tags)
end

def set_user
  @user = User.find_by_username(params[:user_id])
end

end