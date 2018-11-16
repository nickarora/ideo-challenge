class AnswerDecorator < Draper::Decorator
  decorates_association :question_choice
  decorates_association :question
  delegate_all
end
