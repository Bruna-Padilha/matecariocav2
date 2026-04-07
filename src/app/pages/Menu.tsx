import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Instagram, MessageCircle, Mail, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";


import mateIcon from "../../assets/7151a8c8c6cd8b83fe785893c4a16e72878b01a3.png";
import limaoIcon from "../../assets/1a6654dea22df9da1d09a0be4e0f15ea51e7e4ca.png";

const menuItems = [
  {
    id: 1,
    name: "Mate Carioca Limão",
    description: "O tradicional, gelado e batido com limão fresco na hora.",
    price: "R$ 8,00",
    icon: limaoIcon,
    featured: false,
  },
  {
    id: 2,
    name: "Mate Maracujá",
    description: "A refrescância do mate com o toque tropical do maracujá.",
    price: "R$ 9,00",
    icon: mateIcon,
    featured: false,
  },
  {
    id: 3,
    name: "Biscoito Globo",
    description: "O acompanhamento oficial das praias. Doce ou Salgado.",
    price: "R$ 7,00",
    icon: "🍪",
    featured: false,
  },
  {
    id: 4,
    name: "Combo Carioca",
    description: "1 Mate (qualquer sabor) + 1 Biscoito Globo individual.",
    price: "R$ 13,00",
    icon: "🏖️",
    featured: true,
  },
];

export function Menu() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Custom arrow components for carousel
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#fdc101] hover:bg-[#f78211] text-[#004042] rounded-full p-3 shadow-lg transition-all"
        aria-label="Próximo"
      >
        <ChevronRight size={24} />
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#fdc101] hover:bg-[#f78211] text-[#004042] rounded-full p-3 shadow-lg transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>
    );
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      {/* Menu Header */}
      <section className="py-20 bg-gradient-to-br from-[#0c6938] to-[#004042] text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1
            className="text-5xl md:text-6xl mb-6 text-[#fdc101]"
            style={{ fontFamily: 'Righteous, sans-serif' }}
          >
            Nosso Cardápio
          </h1>
          <p className="text-xl opacity-90">
            Escolha seu sabor favorito e refresque-se com o verdadeiro mate carioca
          </p>
        </div>
      </section>

      {/* Menu Carousel */}
      <section className="py-20 bg-[#fdfdfb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative px-12">
            <Slider {...carouselSettings}>
              {menuItems.map((item) => (
                <div key={item.id} className="px-4">
                  <div
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 relative h-[480px] flex flex-col transition-all hover:scale-[1.02] ${
                      item.featured ? 'border-[#f78211]' : 'border-transparent'
                    }`}
                  >
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-[#f78211] text-white px-4 py-1 rounded-full text-sm z-10" style={{ fontFamily: 'Righteous, sans-serif' }}>
                        O FAVORITO
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-[#0c6938] to-[#004042] p-8 text-center flex items-center justify-center h-[240px] flex-shrink-0">
                      {typeof item.icon === 'string' && item.icon.length <= 2 ? (
                        <div className="text-7xl">{item.icon}</div>
                      ) : (
                        <img src={item.icon} alt={item.name} className="w-32 h-32 object-contain" />
                      )}
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3
                          className="text-2xl mb-2 text-[#004042]"
                          style={{ fontFamily: 'Righteous, sans-serif' }}
                        >
                          {item.name}
                        </h3>
                        <p className="text-[#004042]/70 mb-4 h-[4.5rem] leading-relaxed">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-3xl text-[#f78211]" style={{ fontFamily: 'Righteous, sans-serif' }}>
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            className="text-4xl md:text-5xl mb-12 text-center text-[#0c6938]"
            style={{ fontFamily: 'Righteous, sans-serif' }}
          >
            Faça seu Pedido
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Order Form */}
            <div className="bg-[#fdfdfb] rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl mb-6 text-[#004042]" style={{ fontFamily: 'Righteous, sans-serif' }}>
                Formulário de Pedido
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#004042]">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-[#0c6938]/30 focus:border-[#0c6938]"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#004042]">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-[#0c6938]/30 focus:border-[#0c6938]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#004042]">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-[#0c6938]/30 focus:border-[#0c6938]"
                    placeholder="(45) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="product" className="text-[#004042]">Produto</Label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-md border border-[#0c6938]/30 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c6938]"
                  >
                    <option value="">Selecione um produto</option>
                    {menuItems.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name} - {item.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="quantity" className="text-[#004042]">Quantidade</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-[#0c6938]/30 focus:border-[#0c6938]"
                    placeholder="1"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#004042]">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 border-[#0c6938]/30 focus:border-[#0c6938]"
                    placeholder="Observações sobre o pedido..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#fdc101] hover:bg-[#f78211] text-[#004042] font-bold"
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Pedido Enviado!
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2" size={20} />
                      Enviar Pedido por E-mail
                    </>
                  )}
                </Button>

                {submitted && (
                  <p className="text-center text-[#0c6938] text-sm mt-2">
                    Recebemos seu pedido! Entraremos em contato em breve.
                  </p>
                )}
              </form>
            </div>

            {/* Quick Order Options */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-4 text-[#004042] font-bold" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  Peça Direto
                </h3>
                <p className="text-[#004042]/70 mb-6">
                  Prefere fazer o pedido de forma rápida? Escolha uma das opções abaixo:
                </p>
              </div>

              {/* Instagram */}
              <a
                href="https://instagram.com/matecariocafoz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <Instagram size={32} />
                </div>
                <div>
                  <h4 className="text-xl mb-1 font-bold" style={{ fontFamily: 'Righteous, sans-serif' }}>
                    Instagram
                  </h4>
                  <p className="text-sm opacity-90">@matecariocafoz</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5545999999999?text=Olá! Gostaria de fazer um pedido de Mate Carioca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h4 className="text-xl mb-1" style={{ fontFamily: 'Righteous, sans-serif' }}>
                    WhatsApp
                  </h4>
                  <p className="text-sm opacity-90">Clique para conversar</p>
                </div>
              </a>

              {/* Decorative Info */}
              <div className="bg-[#fdc101] p-6 rounded-2xl">
                <h4 className="text-xl mb-3 text-[#004042]" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  🎉 Dica Especial
                </h4>
                <p className="text-[#004042] text-sm">
                  Peça em grupo e ganhe desconto! Para pedidos acima de 5 unidades, entre em contato
                  para condições especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}