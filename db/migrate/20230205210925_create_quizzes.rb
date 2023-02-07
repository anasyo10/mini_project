class CreateQuizzes < ActiveRecord::Migration[7.0]
  def change
    create_table :quizzes do |t|
      t.jsonb :data, default: {}
      t.datetime :ended_at
      t.string :status, default: 'started'
      t.integer :user_id
      t.integer :question_id

      t.timestamps
    end
  end
end
