module Api::Pagination
  extend ActiveSupport::Concern

  included do
    before_action :set_paginate_params

    private
      def set_paginate_params
        @current_page = params[:current_page] || 1
        @per_page = params[:per_page] || 12
      end
  end


  private
    def paginate(collection)
      paginated = collection.page(@current_page).per(@per_page)
      options = {
        :meta => {
          total: paginated.total_count,
          total_pages: paginated.total_pages
        },
      }
      [paginated, options]
    end
end
