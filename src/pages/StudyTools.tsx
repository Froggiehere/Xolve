import { useState } from 'react';

export default function StudyTools() {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-secondary-900 mb-8">Çalışma Araçları</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pomodoro Timer */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-secondary-900 mb-4">Pomodoro Zamanlayıcı</h2>
          <div className="text-center">
            <div className="text-6xl font-mono mb-6">{formatTime(time)}</div>
            <div className="space-x-4">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
              >
                {isRunning ? 'Duraklat' : 'Başlat'}
              </button>
              <button
                onClick={() => {
                  setTime(25 * 60);
                  setIsRunning(false);
                }}
                className="bg-secondary-200 text-secondary-700 px-6 py-2 rounded-lg hover:bg-secondary-300"
              >
                Sıfırla
              </button>
            </div>
          </div>
        </div>

        {/* To-Do List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-secondary-900 mb-4">Çalışma Planı</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Yeni görev ekle..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
                Ekle
              </button>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 bg-secondary-50 rounded-lg">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                <span>Matematik çalış (2 saat)</span>
              </li>
              <li className="flex items-center gap-2 p-2 bg-secondary-50 rounded-lg">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                <span>Geometri tekrarı (1 saat)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}