import { useParams, useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import Option_card from "../../quest-comp/Option";

const GET_QUESTIONS = gql`
  query {
    getQuests {
      id
      tasks {
        id
        description
        type
        picture
        openAnswer
        checkAnswer {
          answer
          isCorrect
        }
      }
    }
  }
`;

const Questions = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_QUESTIONS);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const savedAnswer = localStorage.getItem(`selectedAnswer_${id}`);
    setSelectedAnswer(savedAnswer || null);
  }, [id]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  if (!data || !data.getQuests || !data.getQuests[0]?.tasks) {
    return <p>Питання не знайдено!</p>;
  }

  const questions = data.getQuests[0].tasks;
  const questionIndex = questions.findIndex(task => task.id === id);

  if (questionIndex === -1) return <p>Питання не знайдено!</p>;

  const question = questions[questionIndex];

  const goToNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      navigate(`/test/question/${data.getQuests[0].id}/${questions[questionIndex + 1].id}`);
    }
  };

  const goToPrevQuestion = () => {
    if (questionIndex > 0) {
      navigate(`/test/question/${data.getQuests[0].id}/${questions[questionIndex - 1].id}`);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    localStorage.setItem(`selectedAnswer_${id}`, answer);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[30px]">
      <h2 className="text-2xl">{question.description}</h2>
      <ul className="flex gap-[10px] mt-[10px]">
        {question.checkAnswer.map((answer, idx) => (
          <li
            key={idx}
            className={`p-1 border rounded cursor-pointer ${
              selectedAnswer === answer.answer ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleAnswerSelect(answer.answer)}
          >
            <Option_card name={answer.answer} />
          </li>
        ))}
      </ul>

      <div className="flex gap-[13px] mt-[10px]">
        <button 
          type="button" 
          onClick={goToPrevQuestion} 
          disabled={questionIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Prev
        </button>
        
        <button 
          type="button" 
          onClick={goToNextQuestion} 
          disabled={questionIndex === questions.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;
