class CreativeQuality < ApplicationRecord
  has_many :question_choices

  validates :name, :description, :color, presence: true

  def normalized_score
    calculate_normalized_score(survey_responses)
      .round
      .clamp(-100, 100)
  end

  def max_score
    question_choices
      .group_by(&:question_id)
      .values
      .map(&highest_score)
      .sum
  end
  
  private
  def highest_score
    lambda { |choice| choice.collect(&:score).max }
  end

  def by_quality
    lambda { |choice| choice.creative_quality == self }
  end

  def survey_responses
    SurveyResponse
      .includes(answers: :question_choice)
      .all
  end

  def total_raw_score(responses)
    responses
      .flat_map(&:answers)
      .map(&:question_choice)
      .select(&by_quality)
      .sum(&:score)
  end

  def calculate_normalized_score(responses)
    (total_raw_score(responses).to_f / (max_score * responses.count)) * 100
  end
end
