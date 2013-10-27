Arachne::Application.routes.draw do

  root  'users#index'
  resources :users do 
    resources :thoughts
  end

end
