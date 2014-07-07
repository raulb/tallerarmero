require File.expand_path('../boot', __FILE__)

require 'rails/all'

# If you have a Gemfile, require the gems listed there, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env) if defined?(Bundler)

module Tallerarmero
  class Application < Rails::Application
    config.encoding = "utf-8"
    config.filter_parameters += [:password]
    ActionController::Base.config.relative_url_root = ''
  end
end
