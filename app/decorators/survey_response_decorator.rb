class SurveyResponseDecorator < Draper::Decorator
  decorates_association :answers
  delegate_all

  def display_name
    "#{first_name} #{last_name}"
  end
end
