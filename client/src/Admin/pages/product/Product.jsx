import { Link, useLocation, useParams } from "react-router-dom";
import "./product.css";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext/MovieContext";

export default function Product() {
  const { movies, dispatch } = useContext(MovieContext);
  const { id } = useParams();
  console.log("id ", id);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      {movies.map(
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
                      <span className="productInfoKey">year:</span>
                      <span className="productInfoValue">{data.year}</span>
                    </div>
                    <div className="productInfoItem">
                      <span className="productInfoKey">limit:</span>
                      <span className="productInfoValue">{data.limit}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="productBottom">
                <form className="productForm">
                  <div className="productFormLeft">
                    <label>Movie Title</label>
                    <input type="text" placeholder={data.title} />
                    <label>Year</label>
                    <input type="text" placeholder={data.year} />
                    <label>Genre</label>
                    <input type="text" placeholder={data.genre} />
                    <label>Limit</label>
                    <input type="text" placeholder={data.limit} />
                    <label>Trailer</label>
                    <input type="file" placeholder={data.trailer} />
                    <label>Video</label>
                    <input type="file" placeholder={data.video} />
                  </div>
                  <div className="productFormRight">
                    <div className="productUpload">
                      <img src={data.img} alt="" className="productUploadImg" />
                      <label for="file">
                        <Publish />
                      </label>
                      <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                      />
                    </div>
                    <button className="productButton">Update</button>
                  </div>
                </form>
              </div>
            </>
          )
      )}
    </div>
  );
}
