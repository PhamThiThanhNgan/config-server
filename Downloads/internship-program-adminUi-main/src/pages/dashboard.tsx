import { callApiFromId } from "components/callApiFromId";
import {
  CashIcon,
  CustomerIcon,
  OrderIcon,
  ProductIcon,
} from "components/icons/Icons";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [totalCustomer, setTotalCustomer] = useState(null);
  const [totalOrder, setTotalOrder] = useState(null);
  const [totalProduct, setTotalProduct] = useState(null);
  const [totalSales, setTotalSales] = useState(null);

  const DashboardUrl = `https://dev-api.digiex.asia/calobye-be-dev/api/dashboard/statistics`;

  const dataRes = () => {
    const tokenAuth = callApiFromId(DashboardUrl);
    tokenAuth?.then((result) => {
      setTotalCustomer(result.data.data.total_customer);
      setTotalOrder(result.data.data.total_order);
      setTotalProduct(result.data.data.total_product);
      setTotalSales(result.data.data.total_sales);
    });
  };

  useEffect(() => {
    dataRes();
  }, []);

  return (
    <div className="w-full h-screen ">
      <div className="border-b-2 border-solid border-gray-200 bg-white w-full h-28 flex items-center px-6">
        <span className="text-[26px] font-semibold">Sales Statistic</span>
      </div>

      <div className=" w-full h-[609px] px-6 py-10 overflow-hidden">
        <div className="w-full h-80 rounded-[10px] p-[22px] bg-white  grid grid-cols-2 grid-rows-2 justify-center items-center gap-x-10 gap-y-6 shadow-md">
          <div className="w-full h-full bg-yellow-light rounded-[10px] flex flex-col justify-center p-6">
            <OrderIcon classname="w-10 h-10 text-yellow-line " />
            <span className="text-yellow-line text-lg mt-2 font-semibold">
              Total orders: {totalOrder}
            </span>
          </div>
          <div className="w-full h-full bg-blue-light rounded-[10px] flex flex-col justify-center p-6">
            <CustomerIcon classname="w-10 h-10 text-blue-line " />
            <span className="text-blue-line text-lg mt-2 font-semibold">
              Total customers: {totalCustomer}
            </span>
          </div>
          <div className="w-full h-full bg-red-light rounded-[10px] flex flex-col justify-center p-6">
            <ProductIcon classname="w-10 h-10 text-red-line " />
            <span className="text-red-line text-lg mt-2 font-semibold">
              Total products: {totalProduct}
            </span>
          </div>
          <div className="w-full h-full bg-green-light rounded-[10px] flex flex-col justify-center p-6">
            <CashIcon classname="w-10 h-10 text-green-line " />
            <span className="text-green-line text-lg mt-2 font-semibold">
              Total sales: {`${totalSales ? totalSales + "đ" : ""}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
