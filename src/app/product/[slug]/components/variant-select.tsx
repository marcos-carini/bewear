"use client";

import Image from "next/image";
import { useQueryState } from "nuqs";

import { productVariantTable } from "@/db/schema";

interface VariantSelectorProps {
  selectedVariantSlug: string;
  variants: (typeof productVariantTable.$inferSelect)[];
}

const VariantSelector = ({
  selectedVariantSlug,
  variants,
}: VariantSelectorProps) => {
  const [variant, setVariant] = useQueryState("variant", {
    defaultValue: selectedVariantSlug,
    shallow: false,
  });

  return (
    <div className="flex items-center gap-4">
      {variants.map((variantItem) => (
        <button
          key={variantItem.id}
          onClick={() => setVariant(variantItem.slug)}
          className={`rounded-xl border-2 ${
            variant === variantItem.slug
              ? "border-primary"
              : "border-transparent"
          }`}
        >
          <div className="relative h-16 w-16">
            <Image
              fill
              src={variantItem.imageUrl}
              alt={variantItem.name}
              className="rounded-xl object-cover"
              sizes="64px"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default VariantSelector;
