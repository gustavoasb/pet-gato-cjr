class ContactsController < ApplicationController
    before_action :set_contact, only: [:show, :destroy]

    def index
        @contacts = Contact.all
        render json:@contacts
    end

    def show
        render json:@contact
    end

    def create
        desc = params[:description]
        name = params[:name]
        email = params[:email]
        gen = Contact.create(description: desc, name: name, email: email)
        render json:gen.to_json
    end

    def destroy
        @contact.destroy
    end

    private
        def set_contact
            @contact = Contact.find(params[:id])
        end
end
