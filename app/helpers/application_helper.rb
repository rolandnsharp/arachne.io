# require 'redcarpet'

module ApplicationHelper

	def mark_it_down(text)
		require 'redcarpet'
		markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, hard_wrap: true)
		markdown.render(text).html_safe
	end

	# def syntax_highlighter(html)
	#   doc = Nokogiri::HTML(html)
	#   doc.search("//pre[@lang]").each do |pre|
	#     pre.replace Albino.colorize(pre.text.rstrip, pre[:lang])
	#   end
	#   doc.to_s
	# end

end
