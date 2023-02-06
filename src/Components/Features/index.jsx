import "./style.scss";

export const Features = ({ titre, items }) => {
  return (
    <section className="features">
      <h2 className="sr-only">{titre}</h2>
      {items.map((item) => {
        return (
          <div className="feature-item">
            <img src={item.img} alt={item.alt} className="feature-icon" />
            <h3 class="feature-item-title">{item.titre}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </section>
  );
};
