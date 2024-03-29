type CategoryType = {
  params: {
    id: string;
  }
}
export default function Category({ params }: CategoryType) {
  return (
    <div>Категория: {params.id}</div>
  )
}