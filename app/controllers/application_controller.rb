class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  private

  def record_not_found(obj)
    render json: { error: "#{obj.model} not found" }, status: 404
  end

  def record_invalid(obj)
    render json: { errors: obj.record.errors.full_messages }, status: 422
  end
  
  
end
