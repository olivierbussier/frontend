import PropTypes from "prop-types";

import "./style.scss"

/**
 * This component is used to display card on the right of the application
 * with the ability to display several lines of emphased texts and one line of normal text
 *
 * @param {object} props
 * @param {string} props.title
 * @param {object} props.items
 * @param {string} props.footer
 * @returns {JSX.Element}
 */
export const Hero = ({ title, items, footer }) =>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">{title}</h2>
          {items.map((subtitle, index) => (
            <p key={'hero_'+index} className="subtitle">{subtitle}</p>
          ))}
          <p className="text">{footer}</p>
        </section>
      </div>

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  footer: PropTypes.string.isRequired,
}