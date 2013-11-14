module ThoughtsHelper

	def web_array_maker(thoughts)
		

		thought_web_array=[] 
		 

		thoughts.each do |thought|
		 	 title_string=  thought.title.to_s

		 	 if title_string.length == 0
		 	         
				str=  thought.content.to_s   
			    tags = str.scan(/#\w+/).uniq 
				thought_web_array= thought_web_array+[tags] 
		 	
		 	 else

		 	 	str=  thought.content.to_s   
			    tags = str.scan(/#\w+/).uniq 
			    title_array = tags.unshift(title_string)
				thought_web_array= thought_web_array+[title_array] 


		 	 end

				 
		end 
		return thought_web_array
	end
	
end
