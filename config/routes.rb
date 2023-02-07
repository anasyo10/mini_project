Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, path: '', path_names: {
    sign_in: :login,
    sign_out: :logout,
    registration: :signup
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get "active_question", to: "questions#active_question"
  post "start_quiz", to: "quizzes#start_quiz"
  post "complete_quiz", to: "quizzes#complete_quiz"
  get "completed_quizzes", to: "quizzes#completed_quizzes"

  root 'pages#home'
  get "auth", to: "pages#auth"
  get "*path", to: "pages#home"
end
