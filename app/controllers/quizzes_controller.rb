class QuizzesController < ApplicationController
  def start_quiz
    render json: { quiz: current_user.quizzes.create() }
  end

  def complete_quiz
    quiz = Quiz.find(params[:quiz_id])
    return head(:forbidden) unless quiz.present?
    quiz.update(data: params[:response], ended_at: Date.current, status: :completed)
  end

  def completed_quizzes
    render json: {data: Quiz.completed_quizzes_json}
  end
end
