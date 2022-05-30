Rails.application.routes.draw do
  root 'static#index'
  get '*page', to: 'static#index'
end
