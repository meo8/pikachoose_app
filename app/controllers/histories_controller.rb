class HistoriesController < ApplicationController
  before_action :set_history, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  # skip_before_action :verify_authenticity_token

  def index
    @histories = History.order(created_at: :desc).limit(10)
    render json: @histories
  end

  def create
    @history = current_user.histories.new(history_params)
    respond_to do |format|
      if @history.save
          format.html { redirect_to @history, notice: 'Decision has been saved to history.' }
          format.json { render :show, status: :created, location: @history }
      else
          format.html { render :new }
          format.json { render json: @history.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @history = History.find(params[:id])
    render json: @history
  end

  # def edit
  #  @history = History.find(params[:id])
  # end

  def update
    @history = History.find(params[:id])
    @history.update(history_params)
    # update method was in loop
    # render what we just updated
    render json: @history
    # redirect_to history_path(@history)
  end

  def destroy
    @history = History.find(params[:id])
    @history.destroy
    redirect_to histories_path
  end

  private

  def history_params
    params.require(:history).permit(:comment, :film_id, :title, :overview, :vote_average, :release_date)
  end

  def set_history
    @history = History.find(params[:id])
  end

end
