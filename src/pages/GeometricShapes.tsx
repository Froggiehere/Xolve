import { useState } from 'react';
import { shapes } from '../data/shapes';
import BackButton from '../components/BackButton';

export default function GeometricShapes() {
  const [selectedShape, setSelectedShape] = useState<number | null>(null);

  const currentShape = shapes.find(shape => shape.id === selectedShape);

  if (selectedShape && currentShape) {
    return (
      <div className="max-w-4xl mx-auto">
        <BackButton />
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-secondary-100">
            <img 
              src={currentShape.imageUrl} 
              alt={currentShape.name}
              className="object-contain w-full h-64 p-4"
              style={{ zIndex: 1 }} // Ensure image is visible
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-8">{currentShape.name}</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-secondary-800 mb-4">Tanım</h2>
              <p className="text-secondary-600">{currentShape.definition}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-secondary-800 mb-4">Özellikler</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary-600">
                {currentShape.properties.map((property, index) => (
                  <li key={index}>{property}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-secondary-800 mb-4">Formüller</h2>
              <div className="space-y-4">
                {currentShape.formulas.area && (
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-medium text-primary-900">Alan:</h3>
                    <p className="text-primary-700 font-mono">{currentShape.formulas.area}</p>
                  </div>
                )}
                {currentShape.formulas.perimeter && (
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-medium text-primary-900">Çevre:</h3>
                    <p className="text-primary-700 font-mono">{currentShape.formulas.perimeter}</p>
                  </div>
                )}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary-800 mb-4">Günlük Hayatta Kullanım</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary-600">
                {currentShape.realLifeExamples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <BackButton />
      <h1 className="text-3xl font-bold text-secondary-900 mb-8">Geometrik Şekiller</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shapes.map(shape => (
          <button
            key={shape.id}
            onClick={() => setSelectedShape(shape.id)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 bg-secondary-50">
              <img 
                src={shape.imageUrl} 
                alt={shape.name}
                className="object-contain w-full h-48 p-4"
                style={{ zIndex: 1 }} // Ensure image is visible
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-secondary-900 mb-2">{shape.name}</h2>
              <p className="text-secondary-600 line-clamp-2">{shape.definition}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}