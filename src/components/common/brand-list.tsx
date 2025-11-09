import Image from "next/image";

const brands = [
  { src: "/nike.svg", alt: "Nike" },
  { src: "/adidas.svg", alt: "Adidas" },
  { src: "/puma.svg", alt: "Puma" },
  { src: "/newb.svg", alt: "New Balance" },
  { src: "/converse.svg", alt: "Converse" },
  { src: "/zara.svg", alt: "Zara" },
];

const BrandList = () => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas Parceiras</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div
            key={brand.alt}
            className="flex shrink-0 flex-col items-center gap-2"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border p-2 shadow-sm">
              <Image
                className="h-auto w-auto object-contain"
                src={brand.src}
                alt={brand.alt}
                width={80}
                height={80}
              />
            </div>

            <p className="text-center text-sm font-semibold">{brand.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
