import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Inicio = () => {
  return (
    <div>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          <Typewriter
            words={["Generador de imagenes con IA"]}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>{" "}
      </h1>
      <div className="text-justify">
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Este fascinante proyecto representa una amalgama perfecta de
          vanguardia tecnológica en el ámbito del aprendizaje automático y la
          creatividad visual del diseño gráfico, lo que permite la creación de
          imágenes sorprendentes, verosímiles y de alta calidad de manera
          totalmente automatizada, gracias al uso de la extraordinaria
          tecnología de OpenAI ❤️.
        </p>
        <br />
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Mediante el uso de algoritmos de aprendizaje automático avanzados y
          técnicas innovadoras de diseño gráfico, este proyecto logra combinar
          la precisión y el realismo de la inteligencia artificial con la
          creatividad y la habilidad artística humana, para producir imágenes
          impresionantes que satisfacen las necesidades de cualquier usuario
          exigente.
        </p>
      </div>
      <div className="text-center pt-8">
        <button
          type="button"
          class="text-white font-bold bg-gradient-to-br from-sky-400 to-emerald-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Ir a la Aplicacion    
        </button>
      </div>
    </div>
  );
};