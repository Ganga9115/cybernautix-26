export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-indigo-600">
          Tailwind CSS Working 🎉
        </h1>

        <p className="text-gray-600">
          If you see colors, spacing, and styles applied,
          Tailwind CSS v3 is successfully installed.
        </p>

        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Test Button
        </button>
      </div>
    </div>
  );
}
