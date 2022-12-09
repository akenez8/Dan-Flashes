Rails.application.routes.draw do
  
  resources :purchases
  resources :shirts, only: [:index, :show]
  resources :users, only: [:index,:create, :show, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get '/authorized_user', to: 'users#user'
  post '/Login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  post '/Signup', to: "users#create"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
