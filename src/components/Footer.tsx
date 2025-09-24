import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              StampShop
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Especialistas em carimbos profissionais com mais de 10 anos de experiência no mercado.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span>Rua das Empresas, 123 - Centro</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span>contato@stampshop.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Carimbos Administrativos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carimbos Datadores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carimbos de Assinatura</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carimbos Personalizados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tintas e Refis</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Personalização</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Entrega Expressa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orçamento Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte Técnico</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garantia Vitalícia</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary-foreground/60" />
                <span>Segunda a Sexta</span>
              </div>
              <div className="ml-6">8:00 - 18:00</div>
              
              <div className="flex items-center gap-2 mt-3">
                <Clock className="h-4 w-4 text-primary-foreground/60" />
                <span>Sábado</span>
              </div>
              <div className="ml-6">8:00 - 12:00</div>
              
              <div className="flex items-center gap-2 mt-3">
                <Clock className="h-4 w-4 text-primary-foreground/60" />
                <span>Domingo</span>
              </div>
              <div className="ml-6">Fechado</div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <div>
            © 2024 StampShop. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;