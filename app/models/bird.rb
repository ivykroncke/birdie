class Bird < ApplicationRecord
    has_many :posts, dependent: :destroy
end
