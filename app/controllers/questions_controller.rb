class QuestionsController < ApplicationController
  def active_question
    render json: { question: Question.active }
  end
end
