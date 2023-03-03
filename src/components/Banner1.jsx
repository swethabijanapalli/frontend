const Banner1 = (props) => {
  let title1 = props.data1;

  return (
    <div className="banner d-flex align-items-end justify-content-center ">
      <div className="post">
        <h1 className="text-white mb-5">{title1}</h1>
      </div>
    </div>
  );
};

export default Banner1;
