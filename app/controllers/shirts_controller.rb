class ShirtsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    
    def index
        render json: Shirt.all, status: :ok
    end

    def show
        render json: find_shirt, status: :ok
    end

    private
    
    def find_shirt
        Shirt.find(params[:id])
    end
end
