import { useState } from 'react';
import { lectures } from '../data/lectures';

export default function Lecture() {
  const [selectedLecture, setSelectedLecture] = useState<number | null>(null);

  const currentLecture = lectures.find(lecture => lecture.id === selectedLecture);

  if (selectedLecture && currentLecture) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedLecture(null)}
          className="mb-8 text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          ← Geri Dön
        </button>
        
        <article className="card">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentLecture.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span>{currentLecture.category}</span>
            <span>•</span>
            <time>{new Date(currentLecture.date).toLocaleDateString('tr-TR')}</time>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {currentLecture.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Konu Anlatımları</h1>
      <div className="grid gap-6">
        {lectures.map(lecture => (
          <button
            key={lecture.id}
            onClick={() => setSelectedLecture(lecture.id)}
            className="card text-left hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold mb-2">{lecture.title}</h2>
            <p className="text-gray-600 mb-4">{lecture.preview}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{lecture.category}</span>
              <span>•</span>
              <time>{new Date(lecture.date).toLocaleDateString('tr-TR')}</time>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
