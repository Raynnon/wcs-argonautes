function List({ crew }) {
  return (
    <section className="member-list">
      {crew.map((member, index) => {
        return (
          <div key={index} className="member-item">
            {member.name}
          </div>
        );
      })}
    </section>
  );
}

export default List;
