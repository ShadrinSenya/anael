
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Knowledge = () => {
  const categories = [
    { id: 1, title: "Общие вопросы", articles: 15 },
    { id: 2, title: "Руководства", articles: 8 },
    { id: 3, title: "Инструкции", articles: 12 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">База знаний</h1>
      
      <div className="relative max-w-xl mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
        <Input
          placeholder="Поиск по базе знаний..."
          className="pl-10 bg-indigo-900/50 border-none text-white placeholder:text-white/50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-white/70">{category.articles} статей</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
