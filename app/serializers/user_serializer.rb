class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password
  has_many :purchases
end
