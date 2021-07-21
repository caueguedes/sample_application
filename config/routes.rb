Rails.application.routes.draw do
  # Used to generate doorkeeper routes to api
  use_doorkeeper do
    skip_controllers :authorizations, :applications, :authorized_applications
  end

  namespace :api do
    namespace :v1 do
      resource :users, only: [:create]
      resources :units
      resources :vehicles
    end
  end

  scope :admin do
    devise_for :users

    resources :units
    resources :vehicles
    # root to: 'units#index'
  end

  get '/*page', to: 'pages#index', constratints: -> (req) { !req.xhr? && req.format.html? }
  # get '/*path' => 'pages#index'
end
