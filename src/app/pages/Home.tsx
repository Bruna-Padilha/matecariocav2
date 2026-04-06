import { Link } from "react-router";
import { ChevronRight, Image as ImageIcon } from "lucide-react";
import cadeiraIcon from "../../imports/Cadeira.svg";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfdfb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1
                className="text-4xl md:text-6xl mb-6 leading-tight"
                style={{ fontFamily: 'Righteous, sans-serif' }}
              >
                <span className="text-[#004042]">TUDO COMEÇOU COM</span>{" "}
                <span className="text-[#f78211] text-5xl md:text-7xl">UMA VIAGEM</span>
              </h1>
              <div className="inline-block bg-[#fdc101] px-6 py-3 rounded-lg transform -rotate-6 shadow-lg mb-8">
                <p className="text-[#004042] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Do verão da carioca direto pra Foz
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/cardapio"
                  className="inline-flex items-center gap-2 bg-[#0c6938] hover:bg-[#004042] text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <span className="font-semibold">Experimente agora</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-full bg-gradient-to-br from-[#004042] to-[#0c6938] rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-h-[500px] border-4 border-dashed border-[#f78211]">
                <ImageIcon size={80} className="text-[#fdc101] mb-4" />
                <p className="text-[#fdc101] text-xl text-center" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  FOTO HERO: VIAGEM/PRODUTO
                </p>
                <p className="text-white/70 text-sm mt-2">Inserir imagem aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos - Mari e Vini */}
      <section className="py-20 bg-[#0c6938]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-5xl md:text-6xl mb-6 text-white"
              style={{ fontFamily: 'Righteous, sans-serif' }}
            >
              SOMOS MARI E VINI
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Apaixonados por praia, verão e mate. Nas férias no Rio, a gente se viciou 
              no clássico chá mate gelado de praia... Voltamos pra casa com saudade daquele sabor.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-[#004042] rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-h-[400px] border-4 border-dashed border-[#fdc101]">
              <ImageIcon size={80} className="text-[#fdc101] mb-4" />
              <p className="text-[#fdc101] text-xl text-center" style={{ fontFamily: 'Righteous, sans-serif' }}>
                FOTO: MARI E VINI
              </p>
              <p className="text-white/70 text-sm mt-2">Inserir imagem aqui</p>
            </div>
          </div>
        </div>
      </section>

      {/* O Vini Aprendeu */}
      <section className="py-20 bg-[#f78211]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full bg-[#0c6938] rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-h-[400px] border-4 border-dashed border-white">
                <ImageIcon size={80} className="text-white mb-4" />
                <p className="text-white text-xl text-center" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  FOTO: VINI FAZENDO MATE
                </p>
                <p className="text-white/70 text-sm mt-2">Inserir imagem aqui</p>
              </div>
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl mb-6 text-white leading-tight"
                style={{ fontFamily: 'Righteous, sans-serif' }}
              >
                O VINI APRENDEU A FAZER E POSTAMOS
              </h2>
              <div className="bg-[#0c6938] p-6 rounded-2xl shadow-lg">
                <p className="text-white text-lg leading-relaxed">
                  Servimos pros amigos e virou febre. Todo mundo pedia mais! Postamos nos 
                  stories... e os pedidos começaram a chegar. Foi assim que nasceu o nosso mate. 
                  Direto do clima de praia do Rio pra Foz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Você sabe de onde vem */}
      <section className="py-20 bg-[#fdfdfb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: 'Righteous, sans-serif' }}
            >
              <span className="text-[#004042]">Você sabe de onde vem o</span>{" "}
              <span className="text-[#f78211]">mate de praia do Rio?</span>
            </h2>
            <div className="inline-block bg-[#fdc101] px-6 py-3 rounded-lg transform rotate-6 shadow-lg mt-4">
              <p className="text-[#004042] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Vem que a gente te conta!
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-4xl bg-gradient-to-br from-[#f78211] to-[#fdc101] rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-h-[400px] border-4 border-dashed border-[#0c6938]">
              <ImageIcon size={80} className="text-[#0c6938] mb-4" />
              <p className="text-[#0c6938] text-xl text-center" style={{ fontFamily: 'Righteous, sans-serif' }}>
                FOTO: KOMBI/CENÁRIO RIO
              </p>
              <p className="text-[#004042]/70 text-sm mt-2">Inserir imagem aqui</p>
            </div>
          </div>
        </div>
      </section>

      {/* História - Anos 1950 */}
      <section className="py-20 bg-gradient-to-br from-[#fdc101] to-[#f78211]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl mb-6 text-[#004042] leading-tight"
                style={{ fontFamily: 'Righteous, sans-serif' }}
              >
                Nos anos 1950, o{" "}
                <span className="text-[#0c6938]">Rio de Janeiro</span> adaptou o{" "}
                <span className="text-[#0c6938]">mate do Sul do Brasil</span> para o verão.
              </h2>
              <p className="text-[#004042] text-xl leading-relaxed">
                Gelado, com limão e perfeito para a praia.
              </p>
            </div>
            <div>
              <div className="w-full bg-[#0c6938] rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-h-[350px] border-4 border-dashed border-white">
                <ImageIcon size={80} className="text-white mb-4" />
                <p className="text-white text-xl text-center" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  FOTO: CRISTO/RIO
                </p>
                <p className="text-white/70 text-sm mt-2">Inserir imagem aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Os Mateiros */}
      <section className="py-20 bg-[#0c6938]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-[#fdc101] px-6 py-3 rounded-lg shadow-lg mb-6">
                <h3
                  className="text-2xl md:text-3xl text-[#004042]"
                  style={{ fontFamily: 'Righteous, sans-serif' }}
                >
                  Os "Mateiros"
                </h3>
              </div>
              <h2
                className="text-3xl md:text-4xl mb-6 text-white leading-tight"
                style={{ fontFamily: 'Righteous, sans-serif' }}
              >
                Foram os vendedores ambulantes, com seus galões e uniforme laranja
              </h2>
              <p className="text-white text-xl mb-6 leading-relaxed">
                que transformaram o mate em símbolo das praias cariocas.
              </p>
              <div className="border-t-2 border-[#fdc101] pt-4">
                <p className="text-white/90 text-lg">
                  Em 2012, o mate de praia foi reconhecido como Patrimônio Cultural 
                  e Imaterial do Rio de Janeiro.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-full bg-[#f78211] rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-h-[400px] border-4 border-dashed border-[#fdc101]">
                <ImageIcon size={80} className="text-white mb-4" />
                <p className="text-white text-xl text-center" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  FOTO: MATEIROS
                </p>
                <p className="text-white/70 text-sm mt-2">Inserir imagem aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tradição que inspirou */}
      <section className="py-20 bg-[#004042]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full bg-[#0c6938] rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-h-[400px] border-4 border-dashed border-[#fdc101]">
                <ImageIcon size={80} className="text-[#fdc101] mb-4" />
                <p className="text-[#fdc101] text-xl text-center" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  FOTO: PRODUTO/TRADIÇÃO
                </p>
                <p className="text-white/70 text-sm mt-2">Inserir imagem aqui</p>
              </div>
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl mb-6 text-[#fdc101] leading-tight"
                style={{ fontFamily: 'Righteous, sans-serif' }}
              >
                E foi essa tradição que inspirou o Mate Carioca
              </h2>
              <p className="text-white text-xl leading-relaxed mb-8">
                Trouxemos esse clássico das praias do Rio pra refrescar a fronteira também, 
                já experimentou?
              </p>
              <Link
                to="/cardapio"
                className="inline-flex items-center gap-2 bg-[#fdc101] hover:bg-[#f78211] text-[#004042] px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                <span>Faça seu pedido</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Section with Chair Icon */}
      <section className="py-16 bg-[#fdc101] overflow-hidden relative">
        {/* Copacabana Wave Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg 
            className="w-full h-full" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 3102.13 1350"
            preserveAspectRatio="xMidYMid slice"
          >
            <path fill="#000000" d="M96.05,497.97c56.92,56.05,157.16,27.03,176.13-49.4,9.32-37.56-3.71-58.4,18.75-97.65,39-68.13,136.75-68.01,180.68-2.98,31.96,47.31.4,105.64,48.6,150.25,52.55,48.63,137.87,34.66,169.5-29.79,23.32-47.51-2.02-91.47,39.18-135.42,55.64-59.35,158.96-34.76,180.7,42.58,12.5,44.47-5.27,74.85,30.23,115.27,48.42,55.15,141.16,46.18,173.86-20.42,15.91-32.4,6.81-57.52,15.72-90.99,21.65-81.34,128.19-109.35,183.27-43.19,38.01,45.66,13.95,88.57,36.82,132.93,38,73.68,144.41,78.68,186.07,6.03,25.2-43.94,6.11-77.69,29.05-121.28,37.68-71.61,141.61-72.17,184.51-3.08,28.72,46.26-.23,100.2,44.25,144.9,49.45,49.69,133.02,38.96,168.21-21.32,28.54-48.91.64-96.39,42.87-141.43,55.64-59.35,158.96-34.76,180.7,42.58,11.94,42.48-4.32,73.79,27.83,112.82,47.14,57.22,139.14,49.98,174.39-14.98,18.54-34.15,8.19-58.72,17.57-93.98,21.62-81.24,128.36-109.45,183.27-43.19,35.97,43.4,16.17,78.9,32.4,122.8,29.87,80.79,142.83,92.73,188.61,19.12,25.22-40.57,11-61.19,20.71-100.54,18.61-75.38,119.9-104.76,176.13-49.4v101.85c-55.63-42.49-140.9-31.79-169.86,36.27-12.61,29.63-6.6,47.75-10.87,76.43-15.84,106.6-173.73,121.24-205.93,14.47-11.3-37.48,1.03-69.08-21.54-104.57-45.91-72.19-162.69-61.02-190.77,21.07-13.65,39.89,1.45,67.5-22.75,108.2-43.63,73.38-164.11,61.04-189.78-21.82-15.44-49.83,5.19-92.46-43.31-131.29-46.93-37.58-114-31.49-151.7,15.67-32.83,41.08-14.62,69.18-27.94,112.71-25.47,83.2-137.21,99.5-187.75,30.46-25.08-34.26-15.34-54.34-20.69-90.86-17.38-118.69-184.33-122.31-208.72-12.4-8.47,38.18,2.36,62.09-21.64,99.62-48.42,75.72-166.67,57.28-190.05-30.57-9.78-36.76,1.58-66.13-20.46-100.79-45.91-72.19-162.69-61.01-190.77,21.07-12.86,37.58,1.18,69.03-20.91,105.19-47.58,77.89-167.67,65.85-192.7-22.55-6.89-24.33-2.8-50.79-8.43-74.03-20.46-84.4-136.31-105.6-187.78-35.28-29.4,40.17-12.24,78.58-29.61,120.75-31.49,76.45-139.78,84.64-185.93,17.15-22.54-32.96-13.49-53.61-18.55-88.15-18.02-122.98-192.41-120.38-210.96-4.94-2.56,15.91.42,31.38-1.7,46.8-11.93,86.54-113.02,120.66-178.92,66.01v-106.7h.01Z"/>
            <path fill="#000000" d="M3006.07,745.33v101.85c-67.05-52.24-166.86-21.45-178.92,66.01-2.13,15.41.85,30.89-1.7,46.8-18.56,115.44-192.94,118.04-210.96-4.94-5.06-34.54,3.99-55.19-18.55-88.15-45.61-66.7-154.69-58.71-185.93,17.15-17.37,42.17-.21,80.57-29.61,120.75-37.07,50.65-113.64,57.22-159.56,14.11-41.34-38.82-23.2-80.26-37.73-127.17-25.87-83.47-142.06-94.06-189.88-21.91-24.49,36.95-9.4,69.56-22.65,108.3-28.23,82.53-144.72,93.49-190.77,21.07-22.57-35.49-10.23-67.08-21.54-104.57-32.16-106.66-191.24-93.4-206.66,18.58-2.32,16.84.63,32.55-2.74,50.61-20.95,112.13-192.17,112.46-209.93-8.76-5.97-40.73,5.37-59.21-25.4-95.85-48.43-57.67-146.15-48.2-177.38,21.7-20.06,44.9-.59,84.3-33.61,126.45-53.36,68.1-163.53,46.52-185.48-37.82-11.78-45.25,3.99-78.3-33.4-116.95-47.04-48.62-128.89-38.73-165.99,17.25-24.49,36.95-9.4,69.56-22.65,108.3-28.08,82.08-144.86,93.25-190.77,21.07-22.57-35.48-10.23-67.09-21.54-104.57-31.88-105.74-190-92.69-205.93,14.47-4.26,28.68,1.74,46.81-10.87,76.43-28.96,68.06-114.22,78.76-169.86,36.27v-106.7c49.35,46.18,129.79,35.72,164.05-22.68,28.29-48.23,1.03-95.69,42.38-141.92,59.07-66.05,172.57-29.98,185.17,56.74,2.93,20.17-.54,37.65,4.59,58.46,22.82,92.46,154.76,106.87,197.48,19.83,22.94-46.73-1.32-88.76,36.97-132.78,44.28-50.93,127.24-47.78,166.89,7.47,33.4,46.55,5.61,101.04,46.25,147.75,47.94,55.11,141.68,45.12,173.86-20.42,14.73-30.01,6.89-42.98,11.1-71.35,12.47-84.14,97.65-129.95,170.84-79.71,63.48,43.57,23.61,111.74,63.77,164.19,42.55,55.58,124.64,58.87,168.66,3.55,32.05-40.28,16.05-67.95,26.35-109.45,22.28-89.76,141.93-104.96,192.78-29.68,23.32,34.52,12.25,61.8,19.44,96.96,18.32,89.54,140.39,111.46,191.04,35.28,33.63-50.58,3.95-101.52,46.8-147.2,55.66-59.33,158.63-35.97,180.7,42.58,12.5,44.5-5.27,74.79,30.23,115.28,47.37,54.03,137.56,46.05,172-17.43,17.22-31.74,8.43-43.84,12.95-74.35,11.41-76.99,81.59-122.95,154.87-87.99,85.64,40.85,36.24,115.62,79.74,172.47,55.34,72.32,170.35,49.85,188.54-39.63,4.99-24.55.79-45.28,7.76-69.84,21.35-75.28,118.88-99.49,174.84-45.84l-.04-.07Z"/>
            <path fill="#000000" d="M3006.07,536.77v101.85c-55.63-42.49-140.9-31.79-169.86,36.27-15.63,36.74-3.12,70.68-20.1,106-40.26,83.77-169.52,75-196.69-15.1-11.31-37.48,1.04-69.07-21.54-104.57-46.06-72.42-162.54-61.47-190.77,21.07-13.25,38.73,1.84,71.37-22.65,108.3-37.53,56.58-118.85,65.97-165.99,17.25-48.87-50.51-10.96-118.76-61.62-166.33-45.55-42.77-118.75-36.65-157.27,11.54-34.37,43-12.94,80.23-33.59,126.46-31.23,69.9-128.95,79.36-177.38,21.7-30.77-36.64-19.44-55.12-25.4-95.85-17.76-121.24-189.01-120.86-209.93-8.76-6.32,33.89,2.31,56.05-16.6,90.11-43.37,78.14-166.57,66.06-192.81-20.92-11.31-37.48,1.04-69.07-21.54-104.57-46.06-72.42-162.54-61.47-190.77,21.07-12.86,37.58,1.18,69.03-20.91,105.19-46.52,76.14-165.43,65.68-191.62-18.8-14.88-48.01,4.06-86.59-37.8-127.11-45.55-44.09-121.9-36.11-159.52,14.03-30.73,40.96-11.68,77.27-29.59,120.76-31.23,75.85-140.32,83.84-185.93,17.15-22.54-32.96-13.49-53.61-18.55-88.15-18.01-122.93-194.6-124.28-212.1,3.62-1.67,12.21,1.33,25.62-.44,38.36-12.23,87.54-112.11,117.72-179.05,65.88v-106.7c57.23,55.06,157.01,27.64,176.13-49.4,9.24-37.22-3.85-59.17,18.73-97.67,40.56-69.16,140.43-68.06,182.66-.07,20.82,33.53,10.6,60.4,17.49,94.07,19.67,96.11,155.48,111.47,198.66,23.5,22.94-46.73-1.32-88.76,36.97-132.78,54.39-62.55,160.48-39.91,182.91,39.95,12.49,44.47-5.26,74.85,30.23,115.27,48.42,55.15,141.17,46.18,173.86-20.42,22.18-45.17-1.87-86.23,37.22-132.53,57.44-68.04,171.19-39.54,185.61,47.27,6.98,42.04-6.11,61.74,25.28,100.82,46.83,58.3,136.2,54.75,173.78-10.77,28.06-48.94,1.21-96.17,42.65-141.65,59.86-65.69,172.34-30.47,184.98,56.56,2.7,18.61-.42,36.07,3.41,54.79,18.45,90.18,141.07,111.62,191.04,35.28,33.41-51.03,4.13-101.73,46.8-147.2,45.28-48.26,125.69-44.09,164.68,10.1,33.99,47.24,5.44,101.21,46.25,147.76,47.69,54.39,137.4,46.31,172-17.43,24.85-45.77-.57-88.53,39.08-135.52,57.41-68.05,171.19-39.53,185.61,47.27,6.51,39.16-5.4,61.43,22.87,98.38,41.72,54.53,121.91,60.23,166.69,6.42,36.59-43.96,15.53-81.19,33.79-126.27,27.28-67.37,118.06-85.87,170.66-35.47h-.02Z"/>
            <path fill="#000000" d="M96.05,1123.63c56.23,55.36,157.51,25.98,176.13-49.4,9.72-39.34-4.51-59.97,20.71-100.54,39.92-64.21,128.41-65.38,174.3-5.37,36.64,47.92,6.17,98.37,46.71,147.29,54.92,66.26,161.65,38.05,183.27-43.19,9.38-35.25-.96-59.83,17.57-93.98,35.26-64.97,127.23-72.18,174.39-14.98,44.71,54.24,1.59,126.61,71.7,170.8,44.08,27.79,100.44,23.41,136.83-15.4,41.67-44.45,15.17-90.23,40.98-138.47,34.12-63.77,119.38-74.48,170.11-24.29,47.09,46.6,14.36,96.78,44.24,144.91,41.17,66.29,133.06,68.97,178.64,5.62,31.88-44.31,8.08-83.18,34.92-129.98,37.57-65.51,126.96-69.09,173.78-10.77,33.22,41.38,16.76,65.05,27.45,108.35,20.68,83.74,133.37,105.47,185.81,37.26,33.64-43.77,14.01-87.57,34.85-130.05,32.69-66.62,125.42-75.55,173.86-20.42,42.76,48.67,13.66,102.5,46.25,147.75,39.76,55.21,122.56,58.45,166.89,7.47,38.28-44.03,14.03-86.06,36.97-132.78,42.59-86.77,176.63-73.69,197.39,19.92,7.84,35.36-1.27,66.64,20.62,100.63,42.15,65.46,142.28,64.19,180.78-3.08,22.46-39.25,9.43-60.09,18.75-97.65,18.97-76.43,119.2-105.45,176.13-49.4v101.85c-41.04-32.32-95.48-36.81-138.22-4.84-63.66,47.61-22.12,112.3-65.48,169.74h-164.9c-35.57-44.49-11.48-101.21-41.54-145.19-49.19-71.97-164.06-56.75-189.89,27.74-12.08,39.52,2.01,83.25-30.48,117.45h-160.05c-39.7-36.7-17.96-96.43-39.58-137.45-36.68-69.61-136.32-71.44-180.79-7.75-30,42.97-7.74,99.73-41.53,145.2h-164.9c-39.87-47.48-9.7-98.75-46.39-150.04-45.53-63.65-151.55-50.63-182.47,20.6-17.49,40.28.65,91.2-33.04,129.43h-164.9c-35.57-44.49-11.48-101.21-41.54-145.19-49.19-71.97-164.06-56.75-189.89,27.74-12.08,39.52,2.01,83.25-30.48,117.45h-160.05c-33.2-33.36-19.79-76.16-31.32-116.61-24.41-85.64-138.53-100.52-189.05-28.59-30.72,43.73-6.53,99.87-41.53,145.2h-164.9c-39.88-47.47-9.7-98.77-46.39-150.04-44.06-61.56-143.87-52.61-178.86,14.51-22.53,43.21-1.82,94.5-36.65,135.53H96.05v-97h0Z"/>
            <path fill="#000000" d="M464.66,129.37c43.48,54.46,1.41,124.33,66.3,168.93,70.52,48.47,157.96,7.02,170.1-75.61,5.01-34.12-2.41-61.51,20.65-93.32h169.75c32.2,43.26,11.5,102.36,41.53,145.2,41.85,59.7,136.84,58.14,175.94-2.9,27.23-42.51,4.65-99.34,39.58-142.29h164.9c37.15,41.77,13.19,90.77,39.66,137.36,35.32,62.16,126.68,70.31,172.99,14.67,41.77-50.18,8.1-103.82,49.24-152.03h164.9c44.01,56.52.39,126.63,69.39,170.68,70.47,44.99,155.32,4.07,167-77.36,4.91-34.24-2.33-61.48,20.65-93.32h169.75c32.54,42.72,12.27,101.02,39.61,142.27,40.75,61.48,133.65,63.75,175.9,2.91,30.15-43.41,5.92-101,41.54-145.18h164.9c28.62,30.49,20.37,62.71,25.51,98.16,12.85,88.65,128.33,124.52,187.14,53.87,41.77-50.18,8.1-103.82,49.24-152.03h155.2v92.15c-55.64-42.49-140.89-31.79-169.86,36.27-18.94,44.51,1.75,79.2-31.85,123.35-52.84,69.41-163.36,48.88-186.01-36.22-9.78-36.76,1.58-66.13-20.46-100.79-45.98-72.3-162.87-60.63-190.77,21.07-15.13,44.28,4.05,77.14-30.31,120.04-38.34,47.87-116.72,50.07-159.03,6.21-35.62-36.91-21.49-74.48-32.7-117.65-20.88-80.4-128.57-105.4-183.07-40.26-34.84,41.64-16.85,70.93-30.37,115.14-25.3,82.78-136.24,100.65-187.75,30.46-30.99-42.22-9.69-83.48-34.92-129.98-45.55-83.97-178.18-63.39-195.7,30.36-7.55,40.41,4.69,60.26-22.46,98.79-51.16,72.58-164.99,53.15-188.02-33.38-9.78-36.76,1.58-66.13-20.46-100.79-45.38-71.36-158.96-61.52-188.6,18.39-16.81,45.33,1.26,80.59-32.48,122.72-38.34,47.87-116.72,50.07-159.03,6.21-51.2-53.07-2.32-125.87-75.31-176.89-46.49-32.5-111.92-21.46-145.17,23.97-24.65,33.69-15.17,51.29-19.95,86.75-11.48,85.08-105.89,127.9-174.18,73.39-57.35-45.77-24.57-94.86-54.18-149.52-46.57-85.96-181.29-61.89-196.73,34.18-2.56,15.9.38,31.35-1.7,46.8-11.72,86.85-113.02,120.96-178.92,66.01v-106.7c56.92,56.05,157.16,27.03,176.13-49.4,9.31-37.51-4.6-77.65,27.58-110.65h164.9v-.04Z"/>
            <path fill="#000000" d="M910.86,1220.63h-208.55c23.38-115.3,186-117.53,208.55,0Z"/>
            <path fill="#000000" d="M1337.66,1220.63h-208.55c22.1-117.36,184.37-115.43,208.55,0Z"/>
            <path fill="#000000" d="M2186.42,1220.63h-208.55c23.02-115.89,186.03-116.84,208.55,0Z"/>
            <path fill="#000000" d="M1759.62,1220.63h-208.55c26.73-114.21,188.75-118.22,208.55,0Z"/>
            <path fill="#000000" d="M2613.22,1220.63h-208.55c22.73-117.35,183.16-115.68,208.55,0Z"/>
            <path fill="#000000" d="M275.51,1220.63c26.87-114.52,188.63-117.76,208.55,0h-208.55Z"/>
            <path fill="#000000" d="M1124.26,129.37c-27.64,113.31-183.54,113.54-208.55,0h208.55Z"/>
            <path fill="#000000" d="M1973.02,129.37c-24.36,116.08-179.24,110.99-208.55,0h208.55Z"/>
            <path fill="#000000" d="M697.46,129.37c-24.99,115.52-179.04,111.31-208.55,0h208.55Z"/>
            <path fill="#000000" d="M1546.21,129.37c-17.33,112.77-185.19,113.31-203.7,0h203.7Z"/>
            <path fill="#000000" d="M2399.82,129.37c-27.13,113.04-183.89,113.25-208.55,0h208.55Z"/>
            <path fill="#000000" d="M2821.77,129.37c-17.33,112.77-185.19,113.31-203.7,0h203.7Z"/>
            <path fill="#000000" d="M3006.07,1162.43v58.2h-179.45c19-81.44,116.7-117.61,179.45-58.2Z"/>
            <path fill="#000000" d="M270.66,129.37c-10.19,82-114.03,111.19-174.6,58.2v-58.2h174.6Z"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <h3
            className="text-4xl md:text-5xl text-[#004042] mb-4"
            style={{ fontFamily: 'Righteous, sans-serif' }}
          >
            🏖️ Vibes de Praia 🥥
          </h3>
          <p className="text-[#004042] text-xl">
            O sabor autêntico do Rio, agora em Foz do Iguaçu
          </p>
        </div>
      </section>
    </div>
  );
}