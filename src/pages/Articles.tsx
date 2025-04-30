import { useState } from 'react';
import { articles } from '../data/articles';

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const currentArticle = articles.find(article => article.id === selectedArticle);

  if (selectedArticle && currentArticle) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedArticle(null)}
          className="mb-8 text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          ← Geri Dön
        </button>
        
        <article className="card">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentArticle.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span>{currentArticle.category}</span>
            <span>•</span>
            <time>{new Date(currentArticle.date).toLocaleDateString('tr-TR')}</time>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {currentArticle.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Makaleler</h1>
      <div className="grid gap-6">
        {articles.map(article => (
          <button
            key={article.id}
            onClick={() => setSelectedArticle(article.id)}
            className="card text-left hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.preview}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{article.category}</span>
              <span>•</span>
              <time>{new Date(article.date).toLocaleDateString('tr-TR')}</time>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}