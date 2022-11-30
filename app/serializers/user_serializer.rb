class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :password_digest
end
