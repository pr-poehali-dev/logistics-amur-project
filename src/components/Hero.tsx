import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-montserrat">
            <span className="text-orange-400">AMUR</span> LOGISTICS
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Профессиональные грузоперевозки Китай-Россия. Ваш надежный партнер в
            международной логистике.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" />
              Получить расчет
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3"
            >
              <Icon name="MapPin" className="mr-2" />
              Отследить груз
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
            <div className="text-gray-300">лет опыта</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">5000+</div>
            <div className="text-gray-300">довольных клиентов</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
