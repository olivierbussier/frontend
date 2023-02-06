import "./style.scss"

export const Hero = ({ title, items, footer }) => {
    return (
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">{title}</h2>
          {items.map((subtitle, index) => (
            <p key={'hero_'+index} className="subtitle">{subtitle}</p>
          ))}
          <p className="text">{footer}</p>
        </section>
      </div>
    );
  };