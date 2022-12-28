import { callApiFromId } from "components/callApiFromId";
import FilterSort from "components/FilterSort";
import Loading from "components/Loading";
import Pagination from "components/Pagination";
import SearchBar from "components/SearchBar";
import { ordersFilterOptionList } from "constants/filterSortOptionList";
import { useEffect, useState } from "react";

export default function Orders() {
  const [listContent, setlistContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [chooseFilter, setChooseFilter] = useState("");
  const [searchvalue, setSearchValue] = useState("");
  const [keySearch, setKeySearch] = useState("");
  const [loading, setLoading] = useState(false);

  const bodyOrderURL: {} = {
    search_key: keySearch,
    page_number: currentPage,
    page_size: 10,
    asc_sort: false,
    order_status: chooseFilter === "ALL" ? "" : chooseFilter,
  };

  const orderParam: URLSearchParams = new URLSearchParams(bodyOrderURL);

  const getOrderUrl = `https://dev-api.digiex.asia/calobye-be-dev/api/orders/page?${orderParam}`;

  const dataRes = () => {
    const tokenAuth = callApiFromId(getOrderUrl);
    tokenAuth?.then((result) => {
      setlistContent(result.data.data.content);
      setLoading(false);
      setTotalElements(result.data.data.total_elements);
    });
  };

  useEffect(() => {
    setLoading(true);
    dataRes();
  }, [getOrderUrl, currentPage, chooseFilter]);

  const filter = (e: any) => {
    setChooseFilter(e.target.value);
    setCurrentPage(1);
  };

  const optionFilterList = ordersFilterOptionList();

  return (
    <div className="w-full h-full ">
      <div className="border-b-2 border-solid border-gray-200 bg-white w-full h-28 flex items-center pl-[314px] fixed top-0 left-0 z-[9]">
        <span className="text-[26px] font-semibold">Oders management</span>
      </div>
      <div className="w-full h-full pt-[150px] pb-[32px] px-8">
        <div className="w-full h-full rounded-[10px]">
          <div className=" flex flex-row w-full h-[100px] justify-between items-center">
            <SearchBar
              inputChange={(e: any) => setSearchValue(e.target.value)}
              clickSearch={(e: any) => {
                e.preventDefault();
                setKeySearch(searchvalue);
              }}
            />

            <FilterSort filterList={optionFilterList} filterLogic={filter} />
          </div>

          {loading ? (
            <Loading />
          ) : totalElements !== 0 ? (
            <>
              <div className="overflow-x-auto relative shadow-lg sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Order
                      </th>
                      <th scope="col" className="py-3 px-6">
                        FULLNAME
                      </th>
                      <th scope="col" className="py-3 px-6">
                        TOTAL
                      </th>
                      <th scope="col" className="py-3 px-6">
                        DATE CREATED
                      </th>
                      <th scope="col" className="py-3 px-6">
                        STATUS
                      </th>
                      <th scope="col" className="py-3 px-6">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listContent.map((content: any) => {
                      return (
                        <tr
                          key={content.id}
                          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {content.order_code}
                          </th>
                          <td className="py-4 px-6">{`${
                            content.first_name ? content.first_name : ""
                          } ${content.last_name ? content.last_name : ""}`}</td>
                          <td className="py-4 px-6">{`${content.total_price}đ`}</td>
                          <td className="py-4 px-6">{content.created_date}</td>
                          <td className="py-4 px-6">
                            {content.order_status === "PAID" ? (
                              <span className="text-green-line">
                                {content.order_status}
                              </span>
                            ) : content.order_status === "PENDING" ? (
                              <span className="text-red-line">
                                {content.order_status}
                              </span>
                            ) : content.order_status === "DELIVERING" ? (
                              <span className="text-purple-line">
                                {content.order_status}
                              </span>
                            ) : content.order_status === "DELIVERED" ? (
                              <span className="text-blue-line">
                                {content.order_status}
                              </span>
                            ) : content.order_status === "CANCELLED" ? (
                              <span className="text-grey-line">
                                {content.order_status}
                              </span>
                            ) : (
                              <span className="text-orage-line">
                                {content.order_status}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6">
                            <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                              Edit
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <Pagination
                currentPage={currentPage}
                totalElements={totalElements}
                nextToCurrentPage={1}
                pageSize={10}
                onPageChange={(page: number) => {
                  setCurrentPage(page);
                }}
              />
            </>
          ) : (
            <span className="mt-4 w-full flex justify-center items-center">
              No matching records found
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
