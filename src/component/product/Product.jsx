import "./product.css";
import data from "../../data";
// import img from "../../img";
const Product = ({img,link,des}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <p>{des}</p>
      </a>
    </div>
  );
};

export default Product;