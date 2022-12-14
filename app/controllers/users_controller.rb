class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :show, :update]
    def index
        render json: User.all, status: :ok, include: ['purchases', 'purchases.shirt'] 
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def user
        user = User.find_by(id: session[:user_id]) 
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end   

    def show
      render json: find_user, status: :accepted, include: ['purchases', 'purchases.shirt'] 
    end

    def update
      user = find_user
      user.update!(user_params)
      render json: user, status: :accepted
  end
      private

      def find_user
        User.find(params[:id])
      end

      def user_params
        params.permit(:name, :password)
      end
      
end
