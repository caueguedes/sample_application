class Api::PagesController < ::ApplicationController
  protect_from_forgery with: :null_session
  layout 'api'

  def index
  end
end
