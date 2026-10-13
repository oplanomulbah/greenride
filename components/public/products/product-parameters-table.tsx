import Image from "next/image"

interface ProductParametersTableProps {
  parametersImage?: string
}

export function ProductParametersTable({
  parametersImage,
}: ProductParametersTableProps) {
  if (!parametersImage) return null

  return (
    <div className="max-w-4xl mx-auto w-full mb-16 flex flex-col items-center">
      <h2 className="text-3xl font-medium text-center text-gray-900 mb-8">
        Product parameters
      </h2>
      <div className="relative w-full max-w-[800px] bg-white flex justify-center">
        <img
          src={parametersImage}
          alt="Product parameters"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}
