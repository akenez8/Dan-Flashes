class User < ApplicationRecord
    has_many :purchases
    has_many :shirts, through: :purchases
end
