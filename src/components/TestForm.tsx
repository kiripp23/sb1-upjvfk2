import React from 'react'
import { ChevronLeft, PlusCircle, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import './style.scss'

export default function TestForm() {
  const [questions, setQuestions] = React.useState([
    { id: 1, text: 'Вопрос №1 Первые шаги в программировании.' }
  ])
  const navigate = useNavigate();

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      text: `Вопрос №${questions.length + 1}`
    }
    setQuestions([...questions, newQuestion])
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
          <h1 className="text-xl font-semibold ml-2 text-gray-800 h1_my">Название теста</h1>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Название теста"
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border border-gray-300 dark:border-gray-600">
            <button type="button" className="w-full text-blue-500 dark:text-blue-400 flex items-center justify-center">
              <PlusCircle className="w-5 h-5 mr-2" />
              Загрузить фото теста (при наличии)
            </button>
          </div>

          <textarea
            placeholder="Описание теста"
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white h-24"
          ></textarea>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Время прохождения лекции</label>
            <input
              type="text"
              defaultValue="2 минуты."
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Критерий прохождения теста</label>
            <input
              type="text"
              placeholder="Количество верных ответов"
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white mt-1"
            />
          </div>

          <div className="space-y-2">
            {questions.map((question) => (
              <div key={question.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-md border border-gray-300 dark:border-gray-600">
                <p className="font-medium text-gray-800 dark:text-white">{question.text}</p>
                <Check className="w-5 h-5 text-green-500" />
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="w-full text-blue-500 dark:text-blue-400 flex items-center justify-center"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Создать вопрос №{questions.length + 1}
            </button>
          </div>

          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Сохранить
          </button>
          <button
            type="button"
            onClick={() => navigate('/payment')}
            className="test-form__payment-button"
          >
            Go to Payment
          </button>
        </form>
      </div>
    </div>
  )
}