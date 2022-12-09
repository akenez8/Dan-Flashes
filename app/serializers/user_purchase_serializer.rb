class UserPurchaseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :shirt_id, :price
  has_many :shirts
end
