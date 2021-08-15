module Pagination
  extend ActiveSupport::Concern

  included do
    before_action :set_paginate_params

    private
      def set_paginate_params
        @current_page = params[:page] || 1
        @per_page = params[:per_page] || 10
      end
  end

  private
    def paginate(collection)
      collection.page(@current_page).per(@per_page)
    end
end
