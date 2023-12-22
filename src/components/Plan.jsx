import "./Plan.css";
export function Plan({ plan }) {
  return (
    <section className="CardPlan">
      <h2>{plan.name}</h2>
      <h1 className="CardPlan-Price">{plan.price}</h1>
      <div className="CardPlan-Body">
      <ul>
        {plan.details.map((plan) => (
          <li key={plan}>{plan}</li>
        ))}
      </ul>
      </div>
      <button className="CardPlan-Btn">Lo quiero</button>
    </section>
  );
}
