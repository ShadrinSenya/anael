
const Employees = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Сотрудники</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="glass-card p-4 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Сотрудник {i}</h3>
                <p className="text-sm text-white/70">Должность</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
