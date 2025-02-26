
const Files = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Файлы</h1>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded"></div>
                <div>
                  <h3 className="font-semibold">Документ {i}.pdf</h3>
                  <p className="text-sm text-white/70">1.2 MB</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Скачать
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;
