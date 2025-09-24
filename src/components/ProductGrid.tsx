import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration
import stampProduct1 from "@/assets/stamp-product-1.jpg";
import stampProduct2 from "@/assets/stamp-product-2.jpg";
import stampProduct3 from "@/assets/stamp-product-3.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Carimbo Personalizado - APROVADO",
    price: 45.90,
    originalPrice: 59.90,
    image: stampProduct1,
    category: "Carimbos Administrativos",
    isNew: true,
  },
  {
    id: "2", 
    name: "Carimbo Datador Automático",
    price: 89.90,
    image: stampProduct2,
    category: "Carimbos Datadores",
  },
  {
    id: "3",
    name: "Carimbo de Assinatura Personalizado",
    price: 129.90,
    originalPrice: 149.90,
    image: stampProduct3,
    category: "Carimbos de Assinatura",
  },
  {
    id: "4",
    name: "Carimbo RECEBIDO - 40x15mm",
    price: 35.90,
    image: stampProduct1,
    category: "Carimbos Administrativos",
    isNew: true,
  },
  {
    id: "5",
    name: "Carimbo Datador Manual Premium",
    price: 65.90,
    image: stampProduct2,
    category: "Carimbos Datadores",
  },
  {
    id: "6",
    name: "Kit Carimbo Assinatura + Tinta",
    price: 159.90,
    originalPrice: 189.90,
    image: stampProduct3,
    category: "Kits Completos",
  },
];

const categories = [
  "Todos",
  "Carimbos Administrativos", 
  "Carimbos Datadores",
  "Carimbos de Assinatura",
  "Kits Completos"
];

const ProductGrid = () => {
  const handleAddToCart = (productId: string) => {
    console.log("Adding to cart:", productId);
    // TODO: Implement cart functionality
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção premium de carimbos profissionais com qualidade garantida
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Todos" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="shadow-elegant">
            Ver Mais Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;