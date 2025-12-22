import { useState } from "react";

// Link com as imagens para usar mais para frente.
const images = {
  img1: "https://i.pinimg.com/236x/ea/df/fb/eadffbeafb9357aa015d25e397dcdb08.jpg",
  img2: "https://s.studiobinder.com/wp-content/uploads/2020/07/Michael-Scott-Wayne-Gretzsky-Quotes.jpg.webp?resolution=1680,0.75&resolution=2560,2",
};

// A lógica inteira do meu modal
function CustomModal({ onFear, onThink }) {
  return (
    // Fundo escuro
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      {/* A caixinha do modal */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center",
          maxWidth: "300px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h2>E aí?</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {/* Com medo mesmo */}
          <button
            onClick={onFear}
            style={{
              padding: "12px",
              backgroundColor: "#ff6b6b",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Vai com medo mesmo! 😱
          </button>

          {/* Deixa eu pensar... */}
          <button
            onClick={onThink}
            style={{
              padding: "12px",
              backgroundColor: "#4ecdc4",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Deixa eu pensar... 💭
          </button>
        </div>
      </div>
    </div>
  );
}

// O componente de mensagem
function Message() {
  return <h1>Muri, confia no processo! Escolha seu caminho abaixo. 😎</h1>;
}

// Botão genérico para reaproveitar
function MyButton({ text, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color || "#f0f0f0",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        border: "1px solid #ccc",
      }}
    >
      {text}
    </button>
  );
}

export default function Home() {
  // Estado inicial, com as imagens escondidas
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(false);

  // Controle do modal (inicialmente fechado)
  const [showModal, setShowModal] = useState(false);

  // Botão inicial
  const handleMainClick = () => {
    setShowImg1(false);
    setShowImg2(false);
    setShowModal(true);
  };

  // Clicou em "com medo"
  const handleFearClick = () => {
    setShowModal(false); // Fecha modal
    setShowImg1(true); // Mostra Imagem 1
  };

  // Clicou em "Deixa eu pensar"
  const handleThinkClick = () => {
    setShowModal(false); // Fecha modal
    setShowImg2(true); // Mostra Imagem 2
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <Message />

      {/* Botão Principal */}
      <MyButton text="Vamos?" onClick={handleMainClick} color="#add8e6" />

      <hr />

      {/* --- Mostrar o modal --- */}
      {showModal && (
        <CustomModal onFear={handleFearClick} onThink={handleThinkClick} />
      )}

      {/* --- Clicou no botão 'com medo' Mostra Img1 -> Img2 --- */}
      {showImg1 && (
        <div style={{ animation: "fadeIn 1s" }}>
          <h3>Tu foi gigante! Boaaa</h3>
          <img
            src={images.img1}
            alt="Imagem 1"
            width={250}
            style={{ borderRadius: "10px" }}
          />

          {/* Botão para abrir a imagem 2 também */}
          {!showImg2 && (
            <div>
              <p>E tem mais...</p>
              <MyButton
                text="Vem aqui"
                onClick={() => setShowImg2(true)}
                color="#ffcccb"
              />
            </div>
          )}
        </div>
      )}

      {/* --- Clicou no botão 'deixa eu pensar' Mostra Img2 -> Img1 --- */}
      {showImg2 && (
        <div style={{ animation: "fadeIn 1s" }}>
          {/* Se a Img1 não estiver visível, mostra que essa foi a escolha principal */}
          {!showImg1 && <h3>Pode pensar mas, já dizia Michael Scott...</h3>}

          <img
            src={images.img2}
            alt="Imagem 2"
            width={250}
            style={{ borderRadius: "10px" }}
          />

          {/* Botão para abrir a outra imagem */}
          {!showImg1 && (
            <div>
              <p>E tem mais viu:</p>
              <MyButton
                text="Bora"
                onClick={() => setShowImg1(true)}
                color="#90ee90"
              />
            </div>
          )}
        </div>
      )}

      {/* --- Frase final quando abrir as duas imagens --- */}
      {showImg1 && showImg2 && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
          }}
        >
          <h3>Tenho muito orgulho de tu, amiga!</h3>
        </div>
      )}
    </div>
  );
}
