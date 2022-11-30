Rails.application.routes.draw do
  
  resources :purchases
  resources :shirts, only: [:index, :show]
  resources :users, only: [:index,:create, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get '/authorized_user', to: 'users#show'
  post '/Login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
