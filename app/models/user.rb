class User < ApplicationRecord
    has_secure_password
    has_many :purchases
    has_many :shirts, through: :purchases
    validates :password, presence: true, allow_nil: true
end
