class QuestionDecorator < Draper::Decorator
  decorates_association :question_choices
  delegate_all
end
