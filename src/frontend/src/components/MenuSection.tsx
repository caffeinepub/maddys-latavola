import { Section } from './Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { menuData } from '@/content/menu';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { MenuImagesDialog } from './MenuImagesDialog';

export function MenuSection() {
  return (
    <Section id="menu" background="muted">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Menu</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Explore our diverse selection of breakfast items, Italian specialties, Chinese favorites, Indian classics, and refreshing beverages
        </p>
        <MenuImagesDialog />
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {menuData.map((category, index) => (
            <AccordionItem
              key={index}
              value={`category-${index}`}
              className="bg-card rounded-lg shadow-warm border-none overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <h3 className="text-2xl font-serif font-semibold text-primary text-left">
                  {category.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <Separator className="mb-4" />
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          {item.isVeg && (
                            <Badge variant="outline" className="text-xs border-green-600 text-green-600">
                              Veg
                            </Badge>
                          )}
                          {item.isNonVeg && (
                            <Badge variant="outline" className="text-xs border-red-600 text-red-600">
                              Non-Veg
                            </Badge>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        )}
                        {item.variants && item.variants.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-3">
                            {item.variants.map((variant, variantIndex) => (
                              <div key={variantIndex} className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">{variant.label}:</span>
                                <span className="font-semibold text-primary">{variant.price}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {item.price && !item.variants && (
                        <span className="font-semibold text-primary whitespace-nowrap">{item.price}</span>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
