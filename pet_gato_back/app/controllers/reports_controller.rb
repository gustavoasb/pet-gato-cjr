class ReportsController < ApplicationController
    before_action :set_report, except: [:create, :index]
    before_action :report_params, only: [:update, :create]
    def index
        @report = Report.all 
        render json:@report
    end

    def show
        render json:@report
    end
    
    def destroy
        @report.destroy
    end

    def update
        unless @report.update(reply_params)
            render json: { errors: @report.errors.full_messages },
                   status: :unprocessable_entity
        end
    end

    def create
        @report = Reply.new(report_params)
        if @report.save
            render json: @report, status: :created
        else
            render json: { errors: @report.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    private

    def set_report
        @report = Report.find(:id)
    end

    def report_params
        params.permit(:comment, :reply)
    end
end
