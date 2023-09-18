
const Product = ({ img, link, live }) => {
  console.log(live);
  return (
    <div style={{width: '30%'}}>

      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </div>
      {live ? <h6 className="fw-bold text-danger float-start">Live</h6> : ''}
    </div>
  );
};

export default Product;