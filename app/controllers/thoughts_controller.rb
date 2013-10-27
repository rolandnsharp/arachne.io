class ThoughtsController < ApplicationController
	def new
		@user = User.find(params[:user_id])
		@thought = @user.thoughts.new
	end
	def create
	  @user = User.find(params[:user_id])
	  @thought = @user.thoughts.new(review_params)
	  if @thought.save
	    redirect_to @user, 
	                  notice: "Thanks for your thought!"
	  else
	    render :new
	  end
	end


private

def review_params
  params.require(:thought).permit(:content)
end

# def set_movie
#   @movie = Movie.find(params[:movie_id])
# end

end