class TagpostsController < ApplicationController
        def index
        @tagposts = Tagpost.all
        render json: @tagposts
    end

    def show
        @tagpost = Tagpost.find(params[:id])
        render json: @tagpost
    end

    def delete
        @tagpost = Tagpost.delete(params[:id])
        render json: @tagpost
    end

    def create
        @tagpost = Tagpost.new(tagpost_params)
        if @tagpost.save
            render json: @tagpost, status: :created, location: @tagpost
        else
            render json: @tagpost.errors, status: :unprocessable_entity
        end
    end

    def update
        @tagpost = Tagpost.find(params[:id])
        if @tagpost.update(tagpost_params)
            render json: @tagpost
        else
            render json: @tagpost.errors, status: :unprocessable_entity
        end
    end


    def tagpost_params
        params.require(:tagpost).permit(:tag, :post)
    end


end
