import React from 'react';

const Article = ({ resumeBasicInfo, sharedBasicInfo }) => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Poemas creados</h1>
      <p>Poema 1</p>
      <p>Poema 2</p>
      
      <section>
        <h2>Inspiración</h2>
        <p>Mi inspiración</p>
      </section>
    </div>
  );
};

export default Article;
