function ArticleContent({ contenu }) {
  // On sépare le contenu en paragraphes sur double saut de ligne
  const parties = contenu.split('\n\n');

  return (
    <div>
      {parties.map((part, index) => {
        if (part.startsWith('## ')) {
          // Sous-titre
          return <h3 key={index}>{part.replace('## ', '')}</h3>;
        } else {
          // Paragraphe normal
          return <p key={index}>{part}</p>;
        }
      })}
    </div>
  );
}

export default ArticleContent;
