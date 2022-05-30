Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get 'greetings/random', to: 'greetings#show'
    end
  end
  root 'static#index'
  get '*page', to: 'static#index'
end
