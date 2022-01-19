<h1 align="center">NLW6 - Gameplay</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
  <img src="https://img.shields.io/static/v1?label=NLW&message=Heat&color=8257E5&labelColor=000000" alt="NLW Heat" />
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
## Back-end
- [API Discord](https://discord.com/developers/docs/intro)

## Front-end
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ptbr/docs/api_intro)
- [ReactNative](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [Iphone X Helper](https://github.com/ptelad/react-native-iphone-x-helper)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage/)
- [Vector Icons](https://icons.expo.fyi/)


## 🚀 Como executar

> Obs.: Nesse projeto temos autenticação via OAuth com o Discord

- Clone o repositório e acesse a pasta;
- Instale as dependências com `yarn ou npm i`;
- Antes de iniciar, é preciso ter uma conta no Discord para acessar a tela de developers `https://discord.com/developers/applications`;
- Após criar sua conta e acessar, é preciso criar uma Applications `Applications`, aproveite para dar um nome a sua aplicação;
- Clique nas opções de menu em `OAath2 `, `General`;
- Em `Redirects` adicione `https://auth.expo.io/nameApplications` o link de redirecionamento;
> Não esqueça de substituir `nameApplications` pelo nome que deu a sua aplicação no discord;
- Clique nas opções de menu em `OAath2 `, `URL Generators`;
- Em `SCOPES`, selecione `identify`, `email`, `connections` e `guilds`;
- Em `SELECT REDIRECT URL`, selecione `https://auth.expo.io/nameApplications`;
- Em `GENERATED URL`, copie a url gerada;
- Abra a aplicação no seu ambiente de desenvolvimento;
- Faça uma copia do arquivo `.env.example` para `.env` e preencha os campos;
> Muita atenção: No arquivo de exemplo você deve preencher da seguinte os seguintes campos `REDIRECT_URI`, `SCOPE`, `RESPONSE_TYPE=token`, `CLIENT_ID` e `CDN_IMAGE=https://cdn.discordapp.com`
- Inicie o emulador com `yarn start`;

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ by Joel Silva 👋🏻 com RocketSeat
