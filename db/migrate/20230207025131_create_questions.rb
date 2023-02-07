class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.jsonb :data, default: []
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
