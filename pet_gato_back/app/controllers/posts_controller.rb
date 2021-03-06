class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def delete
        @post = Post.delete(params[:id])
        render json: @post
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post, status: :created, location: @post
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render json: @post
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end


    def post_params
        params.require(:post).permit(:name,:views)
    end


end

