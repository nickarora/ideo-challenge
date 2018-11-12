class QuestionChoiceDecorator < Draper::Decorator
  decorates_association :question
  delegate_all

  def selected
    h.content_tag(:strong, choice_with_score, class: impact_color)
  end

  def deselected
    h.content_tag(:span, text, class: "text-muted")
  end

  private
  def choice_with_score
    "#{text} #{score}"
  end

  def impact_color
    "text-#{score >= 0 ? "success" : "danger"}"
  end
end
