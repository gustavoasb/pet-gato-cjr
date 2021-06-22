class Post < ApplicationRecord
    validates :name, presence: true
    validates :content, presence: true
    validates :avatar, presence: true
    validates :views, presence: true
    has_rich_text :content
    has_one_attached :avatar
    has_many :comments
    has_many :tagposts
    has_many :tags, :through => :tagposts
    has_many :likes
    has_many :users, :through => :likes
end
