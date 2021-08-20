class Api::PagesController < ::ApplicationController
  include ::Api::ErrorHandler
  protect_from_forgery with: :null_session
  layout 'api'

  def index
  end
end
