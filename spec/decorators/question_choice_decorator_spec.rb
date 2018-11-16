require 'rails_helper'

RSpec.describe QuestionChoiceDecorator do
  describe '#selected' do
    it 'concatenates text and score' do
      decorated_question_choice = create(:question_choice, text: "choice").decorate

      expect(decorated_question_choice.selected).to include(
        [
          decorated_question_choice.text,
          decorated_question_choice.score
        ].join(' ')
      )
    end

    it 'applies bold and green font stylings to positive impact choices' do
      decorated_question_choice = create(:question_choice, score: 5).decorate
      
      expect(decorated_question_choice.selected).to include("<strong class=\"text-success\">")
    end

    it 'applies bold and red font stylings to negative impact choices' do
      decorated_question_choice = create(:question_choice, score: -5).decorate
      
      expect(decorated_question_choice.selected).to include("<strong class=\"text-danger\">")
    end
  end

  describe '#deselected' do
    it "returns the associated choice's text" do
      decorated_question_choice = create(:question_choice, text: "choice").decorate
      
      expect(decorated_question_choice.deselected).to include(decorated_question_choice.text)
    end

    it 'applies muted font stylings' do
      decorated_question_choice = create(:question_choice).decorate
      
      expect(decorated_question_choice.deselected).to include("<span class=\"text-muted\">")
    end
  end
end
