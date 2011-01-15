class ApplicationController < ActionController::Base

  layout 'application'

  
  def home    
  end
  class BrowserIsIE6OrLower < Exception; end;  
  
  # rescue_from BrowserIsIE6OrLower,            :with => :old_browser  
  
  # def old_browser
  #   render :file => "/public/old_browser.html.erb", :status => 200, :layout => false
  # end
  # 
  # def browser_is_ie6_or_lower?
  #   return unless request.user_agent
  #   user_agent = request.user_agent.downcase
  #   if ie_version = user_agent.match(/msie (\d)\.\d;/)
  #     ie_version = ie_version[1].to_i if ie_version && ie_version.size > 1 && ie_version[1]
  #     if ie_version && ie_version <= 6
  #       raise BrowserIsIE6OrLower
  #     end
  #   end
  # end
  
  
end
