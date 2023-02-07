class PagesController < ApplicationController
  def home
  end

  def auth
    render json: { current_user: current_user }
  end
end
