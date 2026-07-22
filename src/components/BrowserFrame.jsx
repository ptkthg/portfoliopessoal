import Icon from './Icon';

// Enquanto não há captura real, desenha uma maquete abstrata da interface.
function Placeholder() {
  return (
    <div className="mockui">
      <div className="bar a" />
      <div className="row">
        <div className="box hi" />
        <div className="box" />
        <div className="box" />
      </div>
      <div className="bar b" />
      <div className="wide" />
      <div className="bar c" />
    </div>
  );
}

export default function BrowserFrame({ url, title, screenshot = null, ratio }) {
  return (
    <div className="browser">
      <div className="bb-bar">
        <div className="dots"><i /><i /><i /></div>
        <div className="url">
          {url && <Icon name="lock" />} {url || title}
        </div>
      </div>
      <div className="bb-shot" style={ratio ? { aspectRatio: ratio } : undefined}>
        {screenshot ? (
          <img
            src={screenshot}
            alt={`Captura de tela do ${title}`}
            loading="lazy"
            className="shot-img"
          />
        ) : (
          <Placeholder />
        )}
      </div>
    </div>
  );
}
