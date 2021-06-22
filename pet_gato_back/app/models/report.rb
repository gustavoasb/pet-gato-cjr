class Report < ApplicationRecord
  belongs_to :reply
  belongs_to :comment
  validates_associated :reply, presence: true, unless: ->(report){report.comment.present?}
  validates_associated :comment, presence: true, unless: ->(report){report.reply.present?}
end
