import React from "react";
import './Tags.scss'
import fotos from "../Galeria/fotos.json"

export default function Tags({tags, filtrarFotos, setItens}) {
  return (
    <div className="tags">
      <p>Filtre por tags</p>
      <ul className="tags__lista">
        {tags.map((tag) => {
          return(
            <li key={tag} onClick={() => filtrarFotos(tag)}>{tag} </li>
          )
        })}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
