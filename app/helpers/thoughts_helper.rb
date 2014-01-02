module ThoughtsHelper

	def web_array_maker(thoughts)
		

		thought_web_array=[] 
		 

		thoughts.each do |thought|
		 	 title_string=  thought.title.to_s.titleize

		 	 if title_string.length == 1

				str=  thought.tags.to_s   
			    tags = str.split(",")
				thought_web_array= thought_web_array+[tags] 	
		 	
		 	 else

		 	 	str=  thought.tags.to_s   
			    tags = str.split(",")
			    title_array = tags.unshift(title_string)
				thought_web_array= thought_web_array+[title_array] 


		 	 end

				 
		end 
		return thought_web_array
	end
	
end
