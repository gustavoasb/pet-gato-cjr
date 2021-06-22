class Comment < ApplicationRecord
    has_many :replies
    has_many :reports
    belongs_to :user
    validates :description, presence: true
end
