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
	end
	
	def create
	  @user = User.find(params[:user_id])
	  @thought = @user.thoughts.new(thought_params)
	  if @thought.save
	    redirect_to edit_user_path(@user)
	    flash[:success] = "Thanks for your thought!"
	  else
	    render :new
	  end
	end

	def show
		@user = User.find(params[:user_id])
		@thought = @user.thoughts.find(params[:id])
	end

	def edit
		@user = User.find(params[:user_id])
		@thought = @user.thoughts.find(params[:id])
		@thoughts = @user.thoughts
	end

	def update
	    @user = User.find(params[:user_id])
		@thought = @user.thoughts.find(params[:id])
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
	    redirect_to edit_user_path(@user)
	    flash[:success] = "Thought successfully deleted!"

	end


private

def thought_params
  params.require(:thought).permit(:content)
end



end