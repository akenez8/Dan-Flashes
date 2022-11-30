class ShirtsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    
    def index
        render json: Shirt.all, status: :ok
    end

    def show
        render json: find_shirt, status: :ok
    end

    def find_game
        Shirt.find(params[:id])
    end
end
