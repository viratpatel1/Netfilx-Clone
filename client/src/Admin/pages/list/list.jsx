import { Link, useParams } from "react-router-dom";
import "./list.css";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useContext } from "react";
import { ListContext } from "../../../Context/ListContext/ListContext";

export default function List() {
  const { lists, dispatch } = useContext(ListContext);
  const { id } = useParams();
  // console.log("Listid ", id);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlists">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      {lists.map(
        (data, i) =>
          data._id === id && (
            <>
              <div className="productTop">
                {/* <div className="productTopLeft">
                  <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                   </div> */}
                <div className="productTopRight">
                  <div key={i} className="productInfoTop">
                    <img src={data.img} alt="" className="productInfoImg" />
                    <span className="productName">{data.title}</span>
                  </div>
                  <div className="productInfoBottom">
                    <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{data._id}</span>
                    </div>
                    <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{data.genre}</span>
                    </div>
                    <div className="productInfoItem">
                      <span className="productInfoKey">type:</span>
                      <span className="productInfoValue">{data.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="productBottom">
                <form className="productForm">
                  <div className="productFormLeft">
                    <label>List Title</label>
                    <input type="text" placeholder={data.title} />
                    <label>Type</label>
                    <input type="text" placeholder={data.type} />
                    <label>Genre</label>
                    <input type="text" placeholder={data.genre} />
                  </div>
                  <div className="productFormRight">
                    <button className="productButton">Update</button>
                  </div>
                </form>
              </div> */}
            </>
          )
      )}
    </div>
  );
}
