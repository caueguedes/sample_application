Rails.application.routes.draw do
  # Used to generate doorkeeper routes to api
  use_doorkeeper do
    skip_controllers :authorizations, :applications, :authorized_applications
  end

  namespace :api do
    namespace :v1 do
      resource :users, only: [:create]
      resources :units
    end

    root to: 'api/units#index'
  end

  devise_for :users

  resources :units

  root to: 'units#index'
end
