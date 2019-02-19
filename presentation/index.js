// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    CodePane,
    Code,
    Link,
    Image
} from "spectacle";

import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from 'spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

const images = {
    MapReacterImage: require("../assets/mapreacter.png"),
    GeobeyondImage: require("../assets/gb-logo.png")
};
preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    codeslide: "#122b45"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">React, Redux e Boundless WebSDK</Heading>
                    <Heading margin="10px 0 0" textColor="tertiary" size={5} bold>
                        Francesco Bartoli
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>React...</Heading>
                    <BlockQuote>
                        <Quote> A JavaScript library for building user interfaces </Quote>
                        <Cite> <a href="https://reactjs.org/"> ReactJS </a></Cite>
                    </BlockQuote>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Il bello di React</Heading>
                    <List>
                        <ListItem>Velocissimo a fare quello che sa far bene (manipolazione del DOM)</ListItem>
                        <ListItem>Ciclo di vita dei componenti semplice</ListItem>
                        <ListItem>Facile trasformare siti "classici" in applicazioni React</ListItem>
                        <ListItem>Ha un ottimo generatore</ListItem>
                        <ListItem>Usa la sintassi JSX</ListItem>
                        <ListItem>E' possibile comporre insieme piu' componenti</ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>...Redux...</Heading>
                    <BlockQuote>
                        <Quote>Redux is a predictable state container for JavaScript apps.</Quote>
                        <Cite> <a href="https://redux.js.org/">Redux</a></Cite>
                    </BlockQuote>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Il bello di Redux</Heading>
                    <List>
                        <ListItem>Centralizza lo stato gestendo "state", "actions" e "reducers"</ListItem>
                        <ListItem>Gestisce in modo lineare il flusso di cambiamenti di stato</ListItem>
                        <ListItem>Facilita il debugging</ListItem>
                        <ListItem>Consente di strutturare operazioni gradualmente pi&ugrave; complesse</ListItem>
                    </List>
                </Slide >

                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>Boundless WebSDK...</Heading>
                    <BlockQuote>
                        <Quote> Javascript SDK based on React, OpenLayers and Redux. </Quote>
                        <Cite> <a href="https://github.com/boundlessgeo/sdk"> Boundless WebSDK </a></Cite>
                    </BlockQuote>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Il bello di Boundless WebSDK</Heading>
                    <List>
                        <ListItem>NON dobbiamo pi&ugrave; inizializzare OL</ListItem>
                        <ListItem>Le operazioni non sono pi&ugrave; "grafiche" ma strutturali</ListItem>
                        <ListItem>Permette di scegliere un renderer 2D o 3D in modo trasparente</ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Proviamo a buttarci sul codice
                    </Text>
                </Slide>


                <Slide transition={[ "spin", "slide" ]} bgColor="primary">
                    <Heading size={ 6 } caps fit textColor="tertiary">Prepariamo l'app</Heading>
                    <Terminal title="1. foss4g-it@foss4g-it: ~(zsh)" output={[
                        "$ npm install -g yarn",
                        "$ npm install -g create-react-app",
                        "$ create-react-app ./boundless-sdk-demo",
                        "$ yarn start"
                    ]}
                    />
                </Slide>

                <Slide transition={[ "spin", "slide" ]} bgColor="primary">
                    <Heading size={ 6 } caps fit textColor="tertiary">Installiamo il necessario</Heading>
                    <Terminal title="1. foss4g-it@foss4g-it: ~(zsh)" output={[
                        "$ yarn add redux react-redux redux-thunk",
                        "$ yarn add @boundlessgeo/sdk",
                        "$ yarn add ol ol-mapbox-style",
                        "$ yarn add babel-core babel-cli",
                        "$ yarn add style-loader css-loader",
                        "$ yarn add babel-preset-env babel-preset-react babel-loader",
                        "$ yarn start"
                    ]}
                    />
                </Slide>

                <CodeSlide transition={["fade"]} bgColor="codeslide"
                    lang="jsx"
                    code={require("raw-loader!../assets/step1.example")}
                    ranges={[
                        { loc: [0, 63], title: "Scriviamo l'app!" },
                        { loc: [3, 5], note: "Importiamo redux" },
                        { loc: [5, 8], note: "Importiamo Boundless"  },
                        { loc: [9, 12], note: "Inseriamo il reducer nello store Redux" },
                        { loc: [15, 16], note: "Ascoltiamo il componentDidMount del lifecycle" },
                        { loc: [16, 26], note: "Aggiungiamo una sorgente" },
                        { loc: [27, 32], note: "Aggiungiamo un layer" },
                        { loc: [51, 56], note: "Inseriamo la mappa nella pagina" },
                        { loc: [63, 63], title: "Step 1 completato!", note: (
                            <span>Git repo here: <a href="https://github.com/geobeyond/boundless-sdk-demo/tree/step-1">geobeyond/boundless-sdk-demo/tree/step-1</a></span>
                        )},
                    ]} />

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Cosa offre Boundless WebSDK?</Heading>
                    <List>
                        <ListItem>Actions e Reducers REDUX:</ListItem>
                            <List textColor="secondary">
                                <ListItem margin={50} textSize={35}>drawing, mapbox, print, wfs, etc</ListItem>
                            </List>
                        <ListItem>Componenti:</ListItem>
                            <List textColor="secondary">
                                <ListItem margin={50} textSize={35}>map, history, layer-list, legend, scaleline, zoom-control,
                            zoom-slider, wfs, etc</ListItem>
                            </List>
                        <ListItem><a href="https://sdk.boundlessgeo.com/docs/">Documentazione</a></ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Note</Heading>
                    <List>
                        <ListItem>Approccio mapbox a source + layer</ListItem>
                        <ListItem>OpenLayers usato come wrapper per il renderer di MapBox</ListItem>
                        <ListItem>Componenti OL non di base disponibili</ListItem>
                    </List>
                </Slide>

                <Slide transition={[ "spin", "slide" ]} bgColor="primary">
                    <Heading size={ 6 } caps fit textColor="tertiary">Ci manca una libreria...per sass</Heading>
                    <Terminal title="1. foss4g-it@foss4g-it: ~(zsh)" output={[
                        "$ yarn add node-sass",
                        "$ yarn start"
                    ]}
                    />
                </Slide>

                <CodeSlide transition={["fade"]} bgColor="codeslide"
                    lang="jsx"
                    code={require("raw-loader!../assets/step2.example")}
                    ranges={[
                        { loc: [0, 73], title: "Aggiungiamo zoom e suo slider" },
                        { loc: [6, 8], note: "Importiamo lo zoom con il suo slider" },
                        { loc: [13, 16], note: "Dichiariamo le estensioni di sviluppo per Redux"  },
                        { loc: [21, 22], note: "Impostiamo il centro mappa sull'Italia" },
                        { loc: [60, 64], note: "Aggiungiamo i componenti nella mappa" },
                        { loc: [73, 73], title: "Step 2 completato!", note: (
                            <span>Git repo here: <a href="https://github.com/geobeyond/boundless-sdk-demo/tree/step-2">geobeyond/boundless-sdk-demo/tree/step-2</a></span>
                        )},
                    ]} />

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Aggiungiamo un dato vettoriale</Heading>
                    <List>
                        <ListItem>Vogliamo utilizzare un layer vettoriale</ListItem>
                        <ListItem>Riutilizzabile e disponibile online, per esempio su Padova</ListItem>
                        <ListItem>Pubblicato in formato GeoJSON</ListItem>
                        <ListItem>Open Data su Padova in GitHub by <Link href="https://github.com/peterampazzo/OpenData-Padova">Pietro Rampazzo</Link>: <Link href="https://raw.githubusercontent.com/peterampazzo/OpenData-Padova/master/geojson/varchi.geojson">layer varchi</Link></ListItem>
                    </List>
                </Slide>

                <CodeSlide transition={["fade"]} bgColor="codeslide"
                    lang="jsx"
                    code={require("raw-loader!../assets/step3.example")}
                    ranges={[
                        { loc: [0, 145], title: "Aggiungiamo un layer GeoJSON" },
                        { loc: [66, 71], note: (<span>Aggiungiamo il tipo di sorgente GeoJSON allo store, notare la URL in data - vedi <a href="https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e">CORS</a></span>) },
                        { loc: [72, 83], note: "Dichiariamo il layer varchi nello store come puntuale" },
                        { loc: [9, 10], title: "Aggiungiamo un popup", note: "Importiamo il componente di popup" },
                        { loc: [21, 42], note: "Creiamo un popup custom per le nostre feature" },
                        { loc: [104, 110], note: "Aggiungiamo l'evento onClick con una Promise" },
                        { loc: [113, 121], note: "Raccogliamo le informazioni delle feature selezionate" },
                        { loc: [121, 130], note: "Aggiungiamo il componente alla mappa" },
                        { loc: [145, 145], title: "Step 3 completato!", note: (
                            <span>Git repo here: <a href="https://github.com/geobeyond/boundless-sdk-demo/tree/step-3">geobeyond/boundless-sdk-demo/tree/step-3</a></span>
                        )},
                    ]} />

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Aggiungiamo un WMS da GeoServer</Heading>
                    <List>
                        <ListItem>Vogliamo utilizzare un layer WMS pubblicato da un GeoServer</ListItem>
                        <ListItem>Riutilizziamo il classico "states" dal GeoServer di Boundless</ListItem>
                        <ListItem>Prima però vogliamo aggiungere l'attribuzione a OpenStreetMap</ListItem>
                    </List>
                </Slide>

                <CodeSlide transition={["fade"]} bgColor="codeslide"
                    lang="jsx"
                    code={require("raw-loader!../assets/step4.example")}
                    ranges={[
                        { loc: [0, 162], title: "Aggiungiamo un layer WMS" },
                        { loc: [8, 9], note: "Inseriamo il componente scaleline" },
                        { loc: [54, 55], note: "Inseriamo la proprietà nella sorgente osm dello store" },
                        { loc: [149, 150], note: "Aggiungiamo il componente alla mappa" },
                        { loc: [85, 91], note: "Dichiariamo la sorgente WMS di tipo raster nello store" },
                        { loc: [92, 99], title: "Aggiungiamo il layer WMS allo store" },
                        { loc: [145, 145], title: "Step 4 completato!", note: (
                            <span>Git repo here: <a href="https://github.com/geobeyond/boundless-sdk-demo/tree/step-4">geobeyond/boundless-sdk-demo/tree/step-4</a></span>
                        )},
                    ]} />

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Lasciamo la gestione del popup tra i due differenti layer come esercizio
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Dove possiamo andare da qui?
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Mapreacter: un'applicazione complessa
                    </Text>
                    <Image width="100%" src={images.MapReacterImage} />
                    <Link href="https://github.com/geobeyond/mapreacter">GitHub repo</Link>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="primary">
                    <Text margin="10px 0 0" textColor="tertiary" size={2} fit bold>
                        Grazie dell'attenzione
                    </Text>
                    <Image width="30%" src={images.GeobeyondImage} />
                    <Link textColor="tertiary" href="mailto:info@geobeyond.it" bold>info@geobeyond.it</Link>
                </Slide>

            </Deck>
        );
    }
}
