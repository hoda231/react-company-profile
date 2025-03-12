import Button from "../button";
import "./Recommended.css";
import va from "../data/assets/expensive.jpg";

const Recommended = ({ handleClick ,productfilter }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button className="all" onClickHandler={handleClick} value="" title="All Products" img={va}/>
          <Button onClickHandler={handleClick} value="Pineapple" title={"Pineapple"} />
          <Button onClickHandler={handleClick} value="Margherita" title="Margherita" />
          <Button onClickHandler={handleClick} value="Vegan" title="Vegan" img ={va}/>
          <Button onClickHandler={handleClick} value="Pineapple" title="Pineapple" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
