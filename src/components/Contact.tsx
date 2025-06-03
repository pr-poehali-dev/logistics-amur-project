import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Горячая линия",
      info: "+7 (495) 777-88-99",
      subinfo: "Работаем круглосуточно",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "cargo@amur-logistics.ru",
      subinfo: "Ответ в течение 2 часов",
    },
    {
      icon: "MapPin",
      title: "Москва",
      info: "Варшавское ш., 125с1",
      subinfo: 'Логистический комплекс "Южные ворота"',
    },
    {
      icon: "MapPin",
      title: "Пекин",
      info: "朝阳区建国路88号",
      subinfo: "SOHO现代城B座1008室",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы ответить на ваши вопросы и рассчитать стоимость доставки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 text-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={contact.icon} size={24} className="text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-medium text-blue-400 mb-1">{contact.info}</p>
                <p className="text-sm text-gray-400">{contact.subinfo}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Получите расчет стоимости</h3>
          <p className="text-gray-300 mb-6">
            Отправьте нам заявку и получите персональный расчет в течение 30
            минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="MessageCircle" className="mr-2" />
              Написать в WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-slate-900"
            >
              <Icon name="Phone" className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
