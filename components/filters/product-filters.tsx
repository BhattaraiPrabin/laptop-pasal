"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FilterProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  priceRange: [number, number]
  brands: string[]
  processors: string[]
  ram: string[]
  storage: string[]
  condition: string[]
}

const brands = ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "MSI", "Samsung"]
const processors = [
  "Intel i3",
  "Intel i5",
  "Intel i7",
  "Intel i9",
  "AMD Ryzen 3",
  "AMD Ryzen 5",
  "AMD Ryzen 7",
  "AMD Ryzen 9",
  "Apple M1",
  "Apple M2",
  "Apple M3",
]
const ramOptions = ["4GB", "8GB", "16GB", "32GB", "64GB"]
const storageOptions = ["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD", "1TB HDD", "2TB HDD"]
const conditionOptions = ["New", "Like New", "Excellent", "Good", "Fair"]

export default function ProductFilters({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [20000, 200000],
    brands: [],
    processors: [],
    ram: [],
    storage: [],
    condition: [],
  })

  const handlePriceChange = (value: number[]) => {
    const newFilters = {
      ...filters,
      priceRange: [value[0], value[1]] as [number, number],
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleCheckboxChange = (category: keyof Omit<FilterState, "priceRange">, value: string) => {
    const currentValues = filters[category]
    let newValues: string[]

    if (currentValues.includes(value)) {
      newValues = currentValues.filter((v) => v !== value)
    } else {
      newValues = [...currentValues, value]
    }

    const newFilters = {
      ...filters,
      [category]: newValues,
    }

    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const resetFilters: FilterState = {
      priceRange: [20000, 200000],
      brands: [],
      processors: [],
      ram: [],
      storage: [],
      condition: [],
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Price Range</h4>
          <div className="px-2">
            <Slider
              defaultValue={[20000, 200000]}
              min={0}
              max={500000}
              step={5000}
              value={[filters.priceRange[0], filters.priceRange[1]]}
              onValueChange={handlePriceChange}
              className="my-6"
            />
            <div className="flex items-center justify-between">
              <span>NPR {filters.priceRange[0].toLocaleString()}</span>
              <span>NPR {filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Accordion type="multiple" defaultValue={["brands", "processors", "ram"]}>
          <AccordionItem value="brands">
            <AccordionTrigger>Brands</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={filters.brands.includes(brand)}
                      onCheckedChange={() => handleCheckboxChange("brands", brand)}
                    />
                    <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="processors">
            <AccordionTrigger>Processors</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {processors.map((processor) => (
                  <div key={processor} className="flex items-center space-x-2">
                    <Checkbox
                      id={`processor-${processor}`}
                      checked={filters.processors.includes(processor)}
                      onCheckedChange={() => handleCheckboxChange("processors", processor)}
                    />
                    <Label htmlFor={`processor-${processor}`} className="text-sm font-normal cursor-pointer">
                      {processor}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ram">
            <AccordionTrigger>RAM</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {ramOptions.map((ram) => (
                  <div key={ram} className="flex items-center space-x-2">
                    <Checkbox
                      id={`ram-${ram}`}
                      checked={filters.ram.includes(ram)}
                      onCheckedChange={() => handleCheckboxChange("ram", ram)}
                    />
                    <Label htmlFor={`ram-${ram}`} className="text-sm font-normal cursor-pointer">
                      {ram}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="storage">
            <AccordionTrigger>Storage</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {storageOptions.map((storage) => (
                  <div key={storage} className="flex items-center space-x-2">
                    <Checkbox
                      id={`storage-${storage}`}
                      checked={filters.storage.includes(storage)}
                      onCheckedChange={() => handleCheckboxChange("storage", storage)}
                    />
                    <Label htmlFor={`storage-${storage}`} className="text-sm font-normal cursor-pointer">
                      {storage}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="condition">
            <AccordionTrigger>Condition</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {conditionOptions.map((condition) => (
                  <div key={condition} className="flex items-center space-x-2">
                    <Checkbox
                      id={`condition-${condition}`}
                      checked={filters.condition.includes(condition)}
                      onCheckedChange={() => handleCheckboxChange("condition", condition)}
                    />
                    <Label htmlFor={`condition-${condition}`} className="text-sm font-normal cursor-pointer">
                      {condition}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
