
const News = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Новости</h1>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card p-4 rounded-xl">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-white/10 rounded flex-shrink-0"></div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Название новости {i}</h2>
                <p className="text-white/70">
                  Краткое описание новости...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
