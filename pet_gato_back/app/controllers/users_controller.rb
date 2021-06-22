class UsersController < ApplicationController

    before_action :find_user, except: [:create, :index, :recover]

    # GET /users
    def index
        @users = User.all
        render json: @users
    end

    # GET /users/{id}
    def show
        render json: @user, status: :ok
    end

    # POST /users
    def create
        @user = User.create(user_params)
        @user.is_admin = false
        if @user.save
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    # PUT /users/{id}
    def update
        unless @user.update(user_params)
            render json: { errors: @user.errors.full_messages },
                status: :unprocessable_entity
        end
    end

    # DELETE /users/{id}
    def destroy
        @user.destroy
    end

    def recover
        @user = User.find_by_email(params[:email])
        @user.password = "12345678"
        @user.password_confirmation = "12345678"
        if @user.save
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    private

    def find_user
        @user = User.find(params[:id])
        rescue ActiveRecord::RecordNotFound
            render json: { errors: 'User not found' }, status: :not_found
    end

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end
