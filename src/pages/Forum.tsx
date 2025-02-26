
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Forum = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Форум</h1>
      
      <div className="flex gap-4 mb-6">
        <Button variant="secondary">Категории</Button>
        <Button variant="ghost" className="text-white">Недавние сообщения</Button>
        <Button variant="ghost" className="text-white">Мои сообщения</Button>
        <Button variant="ghost" className="text-white">Мои подписки</Button>
        <div className="flex-grow">
          <Input 
            placeholder="Поиск" 
            className="bg-indigo-900/50 border-none text-white placeholder:text-white/50"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mb-6">
        <Button variant="secondary">Добавить категорию</Button>
        <Button>Новая тема</Button>
      </div>

      <div className="space-y-4">
        <div className="bg-indigo-900/50 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-1">Название категории</h3>
              <p className="text-white/70">Описание категории</p>
            </div>
            <Button>Подписаться</Button>
          </div>
        </div>

        <div className="bg-indigo-900/50 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-1">Название темы</h3>
              <p className="text-white/70">Иван Иванов</p>
            </div>
            <Button>Подписаться</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
