Rails.application.routes.draw do
  scope :admin do
    devise_for :users, controllers: {
      sessions: 'users/sessions'
    }

    resources :units, except: :edit
    resources :bottles, except: :edit
    resources :plans, except: :edit

    root to: 'units#index', :as => :admin_user_root
  end

  # Routes for api --
  use_doorkeeper do
    skip_controllers :authorizations, :applications, :authorized_applications
  end

  namespace :api do
    namespace :v1 do
      resource :users, only: [:create]
      get :units, to: 'units#index'
      get :plans, to: 'plans#index'
      get :bottles, to: 'bottles#index'
    end
    get '*page', to: 'pages#routing_error'
  end

  get '*page', to: 'api/pages#index', constraints: -> (req) { !req.xhr? && req.format.html? }
  root to: 'api/pages#index'
end
