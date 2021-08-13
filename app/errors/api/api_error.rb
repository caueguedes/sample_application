module Api
  class ApiError < StandardError
    attr_reader :status_code

    def initialize(msg, status_code = :bad_request)
      @status_code = status_code
      super(msg)
    end
  end
end