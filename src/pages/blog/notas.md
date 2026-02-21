---
layout: "../../layouts/PostLayout.astro"
title: "Notas y Neovim al mismo tiempo"
pubDate: 2025/11/25
description: "Cómo solucioné el importante asunto vital de tomar notas y clasificarlas sin salir de Neovim"
postimage: ""
topics: ["neovim, nvim, notas, lazyvim, obsidian, obsidian, zettelkasten"]
---

Como buen recolector de cosas, siempre tengo notas y hace tiempo me he metido un poco en esos estilos de tomar notas famosos con nombres muy alemanes como [Zettelkasten](https://zettelkasten.de/introduction/) y otros. Tengo notas ordenadas y relacionadas unas con otras como en la época del papel tenía hojas en carpetas. Era la época de juntar recortes, imprimir artículos, imprimir las propias cosas sólo para tenerlas y usarlas alguna vez. Es evidente que leíamos mucho más o por lo menos nos quedábamos más tiempo dedicados a entender y profundizar en algo puntual. Todo tiempo pasado no fue mejor, pero pasaban algunas cosas buenas de todas formas.

Todo el mundo debería tener notas, desde notas con reflexiones personales hasta textos recogidos al pasar por la web, resúmenes de libros y artículos. En el ambiente saturado de información de hoy tiene un valor especial aprender a seleccionar y jerarquizar cosas. Además es un buen regalo para que te recuerden, una especie de diario de vida ampliado. No llego al límite que se ve bien seguido ahora de "tener un segundo cerebro" y cosas así. De hecho, ¡lo que menos querría en la vida es tener un segundo cerebro!

Obviamente usé los software especializados para notas y citas como [Zotero](https://www.zotero.org) y [Obsidian](https://obsidian.md), en el pasado también algunos sistemas de notas de Google, uno que otro software de notas simple de Linux y por supuesto un tiempo de prueba con el modo Org de Emacs. Hay muchos más pero esos fueron los míos. Nunca fue importante, para el uso que doy a las notas, hacer algo como vincularlas entre si por conceptos. Con una rigurosa clasificación de temas y subtemas era suficiente. Finalmente era cambiar las carpetas de cartón rotuladas por directorios en la computadora con directorio y archivos. Directorio!!(soy Linux!!).

No me quedé mucho tiempo en ninguna de las opciones anteriores. Siempre ganó la necesidad de no salir de lo que estaba haciendo o sólo la flojera. Llegué a la conclusión de que mientras más corto es el tiempo que paso entre que se me ocurre anotar, guardar o resumir algo y el momento en que lo hago es lo más importante. Como siempre, o casi siempre, tengo abierto el editor, lo hice un tiempo en Sublime. Notas planas en .md. Ahora he recreado lo mismo en Neovim -ya he cumplido dos años!- con un par de elementos más.

Uso dos plugins: obsidian.nvim y una configuración de snacks de folke. Al usar obsidian y abrir un archivo de nota en la ruta de las notas, lo guarda automáticamente con título, id, tags, etc. -ordena los tags solo incluso-. Snacks lo uso para abrir los directorios de notas y para buscar en ellos. Lo mejor, estas notas no pesan, se llevan en un llavero o en un alfiler. Abro notas rápido, guardo notas rápido. Busco rápido. Es todo lo que necesito.
