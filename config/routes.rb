Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# /api/users/userId/posts/postId
namespace :api do
  resources :users do
    resources :posts
  end
end

namespace :api do
  resources :birds
end

end
