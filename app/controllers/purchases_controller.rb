class PurchasesController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: Purchase.all, status: :ok
    end

    def show
        Purchase.find(params[:id])
        render json: find_purchase, status: :ok
    end

    def create
        purchase = Purchase.create!(purchase_params)
        render json: purchase, status: :created
    end

    def update
        purchase = find_purchase
        purchase.update(purchase_params)
        render json: purchase, status: :accepted
    end

    def destroy
        find_purchase.destroy
        head :no_content
    end

    private

    def find_purchase
        Purchase.find_by(params[:id])
    end

    def purchase_params
        params.permit(:user_id, :shirt_id, :price)
    end
end
