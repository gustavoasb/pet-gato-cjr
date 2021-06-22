class RepliesController < ApplicationController
    before_action :set_reply, except: [:create, :index]
    before_action :reply_params, only: [:update, :create]
    def index
        @replies = Reply.all 
        render json:@replies
    end

    def show
        render json:@reply
    end
    
    def destroy
        @reply.destroy
    end

    def update
        unless @reply.update(reply_params)
            render json: { errors: @reply.errors.full_messages },
                   status: :unprocessable_entity
        end
    end

    def create
        @reply = Reply.new(reply_params)
        if @reply.save
            render json: @reply, status: :created
        else
            render json: { errors: @reply.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    private

    def set_reply
        @reply = Reply.find(:id)
    end

    def reply_params
        params.permit(:description, :comment)
    end
end
