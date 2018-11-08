class Bird < ApplicationRecord
    has_many :post, dependent: :destroy
end
