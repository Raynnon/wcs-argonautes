function List({ crew }) {
  return (
    <section className="member-list">
      {crew.map((member) => {
        return <div className="member-item">{member}</div>;
      })}
    </section>
  );
}

export default List;
