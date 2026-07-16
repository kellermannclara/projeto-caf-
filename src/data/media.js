import { computed } from "vue"
import { cafes } from "./coffees"
export function calcularMedia(cafe) {
  return (
    cafe.aroma +
    cafe.sabor +
    cafe.acidez +
    cafe.corpo +
    cafe.finalizacao ) / 5
}

export const totalCafes = computed(() => cafes.value.length)