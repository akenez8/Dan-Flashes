class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :shirt_id, :price
  has_one :user
  has_one :shirt
end
