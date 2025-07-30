export default function Buttons() {
  const handleClick = () => {
    window.open(
      "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin#Cria%C3%A7%C3%A3o",
      "_blank"
    );
  };

  return (
    <div className="btn-wrapper">
      <button className="btn" onClick={handleClick}>
        Saiba mais
      </button>
    </div>
  );
}
