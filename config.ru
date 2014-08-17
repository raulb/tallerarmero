require "sinatra"

class Redirect < Sinatra::Base

  get "/*" do
    redirect 'http://www.armeriaviaji.com/'
  end

end

run Redirect
