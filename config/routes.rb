Arachne::Application.routes.draw do 
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  root  'users#index'
  
  resources :sessions
  resources :users, path: "" do 
    resources :thoughts
  end
end



