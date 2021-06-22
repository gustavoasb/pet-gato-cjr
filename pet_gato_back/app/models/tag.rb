class Tag < ApplicationRecord
    validates :name, presence:true
    validates :description, presence: true
    # TODO : CASO POST TENHA SOMENTE UMA TAG E ESSA TAG SEJA EXCLUIDA, EXCLUIR O POST TAMBÉM
    has_many :tagposts
    has_many :posts, :through => :tagposts
end

# test
