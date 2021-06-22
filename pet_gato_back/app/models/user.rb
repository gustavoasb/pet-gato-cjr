class User < ApplicationRecord
    has_many :replies
    has_many :comments
    has_many :likes
    
    has_one_attached :photo
    has_secure_password
    validates :name, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    validates :password,
            length: { minimum: 8 },
            if: -> { new_record? || !password.nil? }
end
