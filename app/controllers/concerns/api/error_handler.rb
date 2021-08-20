module Api::ErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from CanCan::AccessDenied, with: :unauthorized_error
  end

  def doorkeeper_unauthorized_render_options(error: nil)
    render_error("Unauthorized resource", status: 401)
  end

  def unauthorized_error
    render_error('Unauthorized resource', status: 401)
  end

  def routing_error
    render_error('Not a valid API endpoint.', status: 404)
  end

  private
    def render_error(message, status: 500)
      render json: { error:  message }, status: status
    end
end
