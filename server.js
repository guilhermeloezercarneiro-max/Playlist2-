// ============================================================
//  API DE PLAYLIST  -  Relacionando Musicas e Artistas
//  Backend 2DAT2  -  3o Trimestre
//  O frontend ja esta pronto em public/. Complete os TODOs.
// ============================================================
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));



// ---- LISTA 1: artistas (cada um tem um id) ----
const artistas = [
  { id: 1, nome: "Evanescence", pais: "Estados Unidos" },
  { id: 2, nome: "Three Days Grace", pais: "Canadá" },
  { id: 3, nome: "Slipknot", pais: "Estados Unidos" },
  { id: 4, nome: "Deftones", pais: "Estados Unidos" },
  { id: 5, nome: "Disturbed", pais: "Estados Unidos" },
  { id: 6, nome: "Eternal Rin", pais: "Japão" },
];

// ---- LISTA 2: musicas (guardam so o artistaId, nao o nome) ----
const musicas = [
  { id: 1, titulo: "Bring Me To Life", artistaId: 1, duracao: 677 },
  { id: 2, titulo: "Animal I Have Become", artistaId: 2, duracao: 659 },
  { id: 3, titulo: "(sic)", artistaId: 3, duracao: 538 },
  { id: 4, titulo: "My Own Summer (Shove It)", artistaId: 4, duracao: 520 },
  { id: 5, titulo: "Decadence", artistaId: 5, duracao: 505 },
  { id: 6, titulo: "Come to Me", artistaId: 6, duracao: 455 },
];


// 1) LISTAR ARTISTAS
app.get("/artistas", (req, res) => {
  res.status(200).json(artistas);
});

app.get("/musicas", (req, res) => {
  const resultado = musicas.map((musica) => {
    const artista = artistas.find((item) => item.id === musica.artistaId);
    return {
      titulo: musica.titulo,
      duracao: musica.duracao,
      artista: artista ? artista.nome : "Desconhecido",
      pais: artista ? artista.pais : "-",
    };
  });
  res.status(200).json(resultado);
});

app.get("/artistas/:id/musicas", (req, res) => {
  const artistaId = Number(req.params.id);
  const doArtista = musicas.filter((musica) => musica.artistaId === artistaId);
  res.status(200).json(doArtista);
});

app.listen(port, () => {
  console.log(`Playlist no ar: http://localhost:${port}`);
});


// 2) LISTAR MUSICAS  (juntando cada musica com o seu artista)

  // TODO: use map para percorrer 'musicas'.
  //       para cada musica, use find em 'artistas' para achar
  //       aquele cujo id === m.artistaId.
  //       devolva um objeto com: titulo, duracao, artista (nome) e pais.
  //       lembre: find pode devolver undefined -> trate com ? :



