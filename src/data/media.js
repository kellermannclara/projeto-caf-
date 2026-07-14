export function calcularMedia(cafe) {
  return (
    cafe.aroma +
    cafe.sabor +
    cafe.acidez +
    cafe.corpo +
    cafe.finalizacao
  ) / 5
}