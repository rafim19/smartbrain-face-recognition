import React from 'react';

const Rank = ({ userName, userEntries }) => {
  return (
    <section>
      <div className="white f3">
        {`${userName}, your current rank is...`}
      </div>
      <div className="white f1">
        {`${userEntries}`}
      </div>
    </section>
  );
};

export default Rank;