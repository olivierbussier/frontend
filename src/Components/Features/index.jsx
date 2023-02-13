import PropTypes from "prop-types";

import "./style.scss";

/**
 * This component is used to display features of the bank
 * The feature list is given by array items
 *
 * @param {object} props
 * @param {string} props.titre
 * @param {array} props.items
 * @returns {JSX.Element}
 */
export const Features = ({ titre, items }) => {
  return (
    <section className="features">
      <h2 className="sr-only">{titre}</h2>
      {items.map((item, index) => {
        return (
          <div key={"feature-"+index} className="feature-item">
            <img src={item.img} alt={item.alt} className="feature-icon" />
            <h3 className="feature-item-title">{item.titre}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </section>
  );
};

Features.propTypes = {
  titre: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      titre: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}