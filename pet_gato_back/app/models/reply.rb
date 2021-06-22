class Reply < ApplicationRecord
  belongs_to :comment
  belongs_to :user
  has_many :reports
  validates :description, presence: true
  validates_associated :comment, presence: true

end
