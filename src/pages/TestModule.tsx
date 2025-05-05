import { useState } from 'react';
import { curriculum } from '../data/curriculum';

const motivationalMessages = [
  "Harikasın! Bu konuyu çok iyi kavramışsın.",
  "Tebrikler! Gerçekten başarılısın.",
  "Mükemmel gidiyorsun, böyle devam!",
  "Zekanı konuşturuyorsun!",
  "Bu konuda çok iyisin, bir sonraki soruya geçelim!",
  "Helal olsun!"
];

export default function TestModule() {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const grades = [9, 10, 11, 12];
  const units = curriculum.filter(unit => unit.grade === selectedGrade);
  const currentUnit = curriculum.find(unit => unit.id === selectedUnit);
  const questions = currentUnit?.questions || [];

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRandomMessage = () => {
    return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  };

  if (!selectedGrade) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sınıfını Seç</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {grades.map(grade => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className="btn btn-primary"
            >
              {grade}. Sınıf
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!selectedUnit) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ünite Seç</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {units.map(unit => (
            <button
              key={unit.id}
              onClick={() => setSelectedUnit(unit.id)}
              className="card text-left hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">{unit.name}</h3>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sonuçlar</h1>
        {questions.map((question) => {
          const isCorrect = answers[question.id] === question.correctAnswer;
          return (
            <div key={question.id} className="card mb-4">
              <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
              {isCorrect ? (
                <div className="text-green-600 font-medium">{getRandomMessage()}</div>
              ) : (
                <div>
                  <div className="text-red-600 font-medium mb-4">
                    Doğru cevap: {question.options[question.correctAnswer]}
                  </div>
                  {/* Video explanation section */}
                  {question.video && (
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-600 font-medium mb-2">Video Açıklaması</p>
                      <div className="aspect-w-16 aspect-h-9 mt-2 bg-gray-200 rounded-lg">
                        <video 
                          controls 
                          className="w-full h-full rounded-lg"
                          src={question.video}
                        >
                          Tarayıcınız video etiketini desteklemiyor.
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        <button
          onClick={() => {
            setSelectedUnit(null);
            setCurrentQuestion(0);
            setAnswers({});
            setShowResults(false);
          }}
          className="btn btn-primary mt-8"
        >
          Yeni Test Başlat
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Soru {currentQuestion + 1}/{questions.length}
      </h1>
      <div className="card">
        <h2 className="text-xl font-semibold mb-6">{question.text}</h2>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(question.id, index)}
              className="w-full text-left p-4 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}