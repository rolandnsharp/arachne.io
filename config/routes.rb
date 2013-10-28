Arachne::Application.routes.draw do

  root  'users#index'
  
  resources :sessions
  resources :users do 
    resources :thoughts
  end

end
