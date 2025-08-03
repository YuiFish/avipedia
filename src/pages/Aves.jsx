import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Aves(props) {
  if (!props.imagen) return null; // Prevent blank card if imagen is missing

  function getIucnClass(iucn) {
    if (!iucn) return '';
    if (iucn.toLowerCase().includes('lc')) return 'iucn-lc';
    if (iucn.toLowerCase().includes('nt')) return 'iucn-nt';
    if (iucn.toLowerCase().includes('vu')) return 'iucn-vu';
    if (iucn.toLowerCase().includes('en')) return 'iucn-en';
    if (iucn.toLowerCase().includes('cr')) return 'iucn-cr';
    if (iucn.toLowerCase().includes('dd')) return 'iucn-dd';
    return '';
  }

// In your component render:
<p className={`iucn ${getIucnClass(props.iucn)}`}>{props.iucn}</p>
  
  return (
    <div className="card mb-4 mx-auto" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
          <img
            src={`/images/aves/${props.imagen}.jpg`}
            alt={`Foto de ${props.nombreAve}`}
            className="img-fluid rounded-start"
            style={{ maxHeight: 180, objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center">
              {props.nombreAve}
              {props.invasora && (
                <span className="ms-2 invasora" title="Especie invasora">
                  <i className="bi bi-exclamation-triangle-fill text-warning"></i>
                </span>
              )}
            </h5>
            {props.tipo && <h6 className="card-subtitle mb-2 text-muted">{props.tipo}</h6>}
            {props.apodos && <p className="apodos mb-1">Apodos: {props.apodos}</p>}
            <p className="cientifico">{props.cientifico}</p>
            <p className={`iucn ${getIucnClass(props.iucn)}`}>{props.iucn}</p>
            <div className="d-flex gap-2 mt-2">
              {props.sonidoUrl && (
                <a
                  className="btn btn-outline-info"
                  href={props.sonidoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escuchar sonidos
                </a>
              )}
              {props.learnMoreUrl && (
                <a
                  className="btn btn-primary"
                  href={props.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saber más
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aves;