import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <span>Geri Dön</span>
    </button>
  );
}