import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Надежность",
      description: "Страхование грузов и гарантия сохранности",
    },
    {
      icon: "Clock",
      title: "Скорость",
      description: "Оптимальные маршруты и сроки доставки",
    },
    {
      icon: "DollarSign",
      title: "Выгодные цены",
      description: "Конкурентные тарифы без скрытых комиссий",
    },
    {
      icon: "Users",
      title: "Экспертиза",
      description: "Команда профессионалов с 15-летним опытом",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-montserrat">
              О компании AMUR
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы специализируемся на грузоперевозках между Китаем и Россией уже
              более 15 лет. Наша компания построила надежные партнерские
              отношения с ведущими транспортными компаниями и таможенными
              брокерами в обеих странах.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Команда AMUR знает все тонкости международной логистики и поможет
              вам доставить груз быстро, безопасно и с минимальными затратами.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name={item.icon}
                      size={20}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3"
              alt="Логистический центр AMUR"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
