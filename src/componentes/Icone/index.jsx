export default function Icone({ icon, style }) {
    return (
      <li className={style.menu__item} >
        <img src={icon.path} alt={icon.alt} />
        <a href="/">{icon.link}</a>
      </li>
    )
  }