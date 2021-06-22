class LikesController < ApplicationController
        def index
        @likes = Like.all
        render json: @likes
    end

    def show
        @like = Like.find(params[:id])
        render json: @like
    end

    def delete
        @like = Like.delete(params[:id])
        render json: @like
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render json: @like, status: :created, location: @like
        else
            render json: @like.errors, status: :unprocessable_entity
        end
    end

    def update
        @like = Like.find(params[:id])
        if @like.update(like_params)
            render json: @like
        else
            render json: @like.errors, status: :unprocessable_entity
        end
    end


    def like_params
        params.require(:like).permit(:post)
    end

end
