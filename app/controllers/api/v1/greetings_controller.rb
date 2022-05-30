class Api::V1::GreetingsController < ApplicationController
  def show
    render :json => {
      :greeting => Greeting.all.sample()
    }
  end
end