import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Truck",
      title: "Автомобильные перевозки",
      description:
        "Экспресс-доставка автотранспортом через пункты Забайкальск и Суйфэньхэ",
      features: [
        "3-7 дней доставки",
        "Сборные и полные грузы",
        "Температурный режим",
      ],
    },
    {
      icon: "Train",
      title: "Железнодорожные перевозки",
      description: "Контейнерные перевозки по Транссибу и через Манчжурию",
      features: [
        "10-18 дней",
        "20/40 футовые контейнеры",
        "Негабаритные грузы",
      ],
    },
    {
      icon: "Plane",
      title: "Авиаперевозки",
      description:
        "Срочная доставка из Пекина, Шанхая, Гуанчжоу в Москву и регионы",
      features: ["1-3 дня", "До 100 кг", "Документооборот"],
    },
    {
      icon: "Ship",
      title: "Таможенное оформление",
      description: "Полное сопровождение грузов через таможню РФ и КНР",
      features: ["Декларирование", "Сертификация", "Валютное законодательство"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр логистических решений для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
