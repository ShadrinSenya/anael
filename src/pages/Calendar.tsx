
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";

const Calendar = () => {
  const events = [
    { date: "12 марта", title: "Встреча команды", time: "15:00" },
    { date: "14 марта", title: "Презентация проекта", time: "11:30" },
    { date: "16 марта", title: "Обучение", time: "14:00" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Календарь</h1>
        <Button className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          Добавить событие
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Ближайшие события</h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-lg">
                <div className="text-lg font-semibold">{event.date}</div>
                <div className="text-white/70">{event.title}</div>
                <div className="text-sm text-white/50">{event.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl">
          {/* Здесь можно добавить компонент календаря */}
          <div className="text-center text-white/70">
            Календарь в разработке
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
