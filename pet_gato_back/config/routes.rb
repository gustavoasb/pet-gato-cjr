Rails.application.routes.draw do
  get "/posts", to: "posts#index"
  get "/posts/:id", to: "posts#show"
  delete "/posts/:id", to: "posts#delete"
  post "/posts", to: "posts#create"
  put "/posts/:id", to: "posts#update"

  get "/tags", to: "tags#index"
  get "/tags/:id", to: "tags#show"
  delete "/tags/:id", to: "tags#delete"
  post "/tags", to: "tags#create"
  put "/tags/:id", to: "tags#update"
  
  get "/tagposts", to: "tagposts#index"
  get "/tagposts/:id", to: "tagposts#show"
  delete "/tagposts/:id", to: "tagposts#delete"
  post "/tagposts", to: "tagposts#create"
  put "/tagposts/:id", to: "tagposts#update"
  
 
  resources :replies
  resources :reports
  resources :users
  
  put "/recover", to: "users#recover"

  post '/auth/login', to: 'authentication#login'
  get "/contacts", to: "contacts#index"
  get "/contacts/:id", to: "contacts#show"
  post "/contacts", to: "contacts#create"
  delete "/contacts/:id", to: "contacts#destroy"
end


