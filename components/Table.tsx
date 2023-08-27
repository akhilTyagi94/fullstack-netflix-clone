import { CheckIcon } from "@heroicons/react/24/solid";
import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
  selectedPlan: Product | null;
}

function Table({ products, selectedPlan }: Props) {
  console.log(products);
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          {products.map((product) => (
            <td
              key={product.metadata.id}
              className={`tableDataFeature ${
                selectedPlan?.metadata.id === product.metadata.id
                  ? "text-[#e50914]"
                  : "text-[gray]"
              }`}
            >
              ₹{product.metadata.price}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          {products.map((product) => (
            <td
              key={product.metadata.id}
              className={`tableDataFeature ${
                selectedPlan?.metadata.id === product.metadata.id
                  ? "text-[#e50914]"
                  : "text-[gray]"
              }`}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.metadata.id === product.metadata.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.metadata.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.metadata.id === product.metadata.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.metadata.id}
            >
              {product.metadata.portability === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
