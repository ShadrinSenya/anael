
import { Bell, Calendar, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface IndexProps {
  children?: ReactNode;
}

const Index: React.FC<IndexProps> = ({ children }) => {
  const location = useLocation();
  const menuItems = [
    { title: "Главная", path: "/" },
    { title: "Новости", path: "/news" },
    { title: "Сотрудники", path: "/employees" },
    { title: "Файлы", path: "/files" },
    { title: "Форум", path: "/forum" },
    { title: "База знаний", path: "/knowledge" },
    { title: "Календарь", path: "/calendar" },
    { title: "Заявки", path: "/requests" },
    { title: "Проекты", path: "/projects" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cybered-purple to-cybered-red">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-white">
            CyberED
          </Link>
          <nav className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`text-white/80 hover:text-white transition-colors ${
                  location.pathname === item.path ? "text-white font-medium" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
            <Input
              placeholder="Поиск..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <Button variant="ghost" size="icon">
            <User className="text-white" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      {location.pathname === "/" ? (
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {/* Notifications */}
          <div className="glass-card p-6 rounded-xl animate-slideIn">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Уведомления
              </h2>
              <span className="bg-white/20 px-2 py-1 rounded text-sm">3</span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-medium mb-1">Новое сообщение</h3>
                  <p className="text-sm text-white/70">
                    У вас новое уведомление о задаче...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Polls */}
          <div className="glass-card p-6 rounded-xl animate-slideIn [animation-delay:200ms]">
            <h2 className="text-xl font-semibold mb-4">Опросы</h2>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Название опроса</h3>
              <Button className="w-full bg-white/10 hover:bg-white/20">
                Пройти опрос
              </Button>
            </div>
          </div>

          {/* Date/Time */}
          <div className="glass-card p-6 rounded-xl text-center animate-slideIn [animation-delay:400ms]">
            <div className="text-6xl font-bold mb-2">15:15</div>
            <div className="text-white/70">Воскресенье, 2 Марта</div>
          </div>

          {/* Latest News */}
          <div className="glass-card p-6 rounded-xl col-span-1 md:col-span-2 animate-slideIn [animation-delay:600ms]">
            <h2 className="text-xl font-semibold mb-4">Последние новости</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 bg-white/5 p-4 rounded-lg">
                  <div className="w-20 h-20 bg-white/10 rounded flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium mb-1">Название новости</h3>
                    <p className="text-sm text-white/70">Показать больше</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="glass-card p-6 rounded-xl animate-slideIn [animation-delay:800ms]">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Ближайшие события</h2>
            </div>
            <div className="space-y-4">
              {[
                { date: "12 марта", title: "Название события" },
                { date: "15 марта", title: "Название события" },
                { date: "20 марта", title: "Название события" },
              ].map((event, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-lg">
                  <div className="text-lg font-semibold mb-1">{event.date}</div>
                  <div className="text-white/70">{event.title}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      ) : (
        children
      )}
    </div>
  );
};

export default Index;
