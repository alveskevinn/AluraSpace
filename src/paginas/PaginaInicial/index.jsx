import styles from "./PaginaInicial.module.scss";
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Banner from "../../componentes/Banner";
import Galeria from "../../componentes/Galeria";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <Banner />
          </div>
        </section>
      </main>
      <div className={styles.galeria}> 
        <Galeria  />
      </div>
    </>
  );
}
