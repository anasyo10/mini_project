class Quiz < ApplicationRecord
  belongs_to :user

  enum status: {
    started: 'started',
    incomplete: 'incomplete',
    completed: 'completed'
  }

  def self.completed_quizzes_json
    Quiz.completed.map{|q| q.quiz_json}
  end

  def quiz_json
    { id: id, name: "#{user.first_name} #{user.last_name}", data: beautify_quiz_reponse(data), time_taken: time_diff(created_at, ended_at) }
  end

  private

  def time_diff(start_time, end_time)
    seconds_diff = (start_time - end_time).to_i.abs

    days = seconds_diff / 86400
    seconds_diff -= days * 86400

    hours = seconds_diff / 3600
    seconds_diff -= hours * 3600

    minutes = seconds_diff / 60
    seconds_diff -= minutes * 60
    seconds = seconds_diff

    "#{hours} Hrs #{minutes} Min #{seconds} Sec"
  end

  def beautify_quiz_reponse(data)
    res = ""

    data.keys.each do |key|
      res << "\n #{key}: \n #{data[key]};"
    end
    res
  end
end
