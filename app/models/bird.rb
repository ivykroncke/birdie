class Bird < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :taxons, dependent: :destroy
end
