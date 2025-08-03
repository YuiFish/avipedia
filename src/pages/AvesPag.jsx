import './Aves.css';
import Aves from './Aves.jsx';
import { Link } from 'react-router-dom';


function AvesPag() {
  return (
    <div className="contenedor-principal">
      <div className="w-100 d-flex justify-content-end p-3">
        <Link to="/" className="btn btn-light btn-lg">
          <i className="bi bi-house-door-fill me-2"></i>
          Inicio
        </Link>
      </div>
      <h1 className="text-center text-light mb-5">Avipedia</h1>
      <div className="container-fluid">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-sm-6 col-lg-4 d-flex">
            <Aves
              nombreAve='Correcaminos Norteño'
              imagen='CorrecaminosNortenio'
              cientifico='Geococcyx californianus'
              iucn='LC (Preocupacion menor)'
              sonidoUrl="https://xeno-canto.org/species/Geococcyx-californianus"
              learnMoreUrl="https://mexico.inaturalist.org/taxa/1986-Geococcyx-californianus"/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Aves
              nombreAve='Paloma Doméstica'
              imagen='PalomaDomestica'
              cientifico='Columba livia domestica'
              apodos='Pichon, Paloma bravía, Paloma mensajera'
              invasora={true}
              iucn='LC (Preocupacion menor)'
              sonidoUrl="https://xeno-canto.org/species/Columba-livia"
              learnMoreUrl="https://mexico.inaturalist.org/taxa/9607-Quiscalus-mexicanus"/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Aves
              nombreAve='Zanate Mexicano'
              imagen='ZanateMexicano'
              cientifico='Quiscaulus mexicanus'
              iucn='LC (Preocupacion menor)'
              sonidoUrl="https://xeno-canto.org/species/Quiscalus-mexicanus"
              learnMoreUrl="https://mexico.inaturalist.org/taxa/9607-Quiscalus-mexicanus"/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Aves
              nombreAve='Loro Tamaulipeco'
              imagen='LoroTamaulipeco'
              cientifico='Amazona viridigenalis'
              apodos='Cotorro'
              iucn='EN (En peligro)'
              sonidoUrl="https://xeno-canto.org/species/Amazona-viridigenalis"
              learnMoreUrl="https://mexico.inaturalist.org/taxa/18976-Amazona-viridigenalis"/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Aves
              nombreAve='Colibri Vientre Canelo'
              imagen='ColibriVientreCanelo'
              cientifico='Amazilia yucatanensis'
              apodos='Chuparrosas'
              iucn='LC (Preocupacion menor)'
              sonidoUrl="https://xeno-canto.org/species/Amazilia-yucatanensis"
              learnMoreUrl="https://mexico.inaturalist.org/taxa/5672-Amazilia-yucatanensis"/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Aves
              nombreAve='Mascarita de Altamira'
              imagen='MascaritaAltamira'
              cientifico='Geothlypis flavovelis'
              iucn='EN (En peligro de extinción)'
              sonidoUrl="https://xeno-canto.org/species/Geothlypis-flavovelata"
              learnMoreUrl="https://mexico.inaturalist.org/taxa/9719-Geothlypis-flavovelata"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvesPag;