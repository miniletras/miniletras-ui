<div align="center">
<h1>Based on Elucidator blog starter</h1>
<p>Blog starter build with Vue 3 + Vite + Typescript</p>

![banner-elucidator](https://i.ibb.co/d4hScjv/banner.png)

</div>

# Introduction

[Elucidator blog starter](<(https://github.com/elucidator-project/elucidator-blog-starter)>) is a starter blog built with [Vuejs 3](https://v3.vuejs.org/), [Vite](https://vitejs.dev/), and [Typescript](https://www.typescriptlang.org/). You can create publish your post just with markdown file. This starter has so many features for develop your own blog and it's fast ⚡. If you have some experience in vuejs and want to create a personal blog, you can use this starter for create your own blog. If you get bored with this design, you can create your own design. Not to forget, this css framework blog starter was built with [WindiCSS (Next generation utility-first CSS framework)](https://windicss.org/).

# Features

Elucidator blog starter has several features such as:

- Utilities Vue Composition API using [Vueuse](https://vueuse.org/)
- Document head manager for Vue 3 [Vueuse head](https://github.com/vueuse/head)
- Next generation utility first CSS framework using [WindiCSS](https://windicss.org)
- Style with [SCSS](https://sass-lang.com/)
- File system based route generator using [Vite Plugin Pages](https://github.com/hannoeru/vite-plugin-pages)
- Auto importing component using [Unplugin Vue Components](https://github.com/antfu/unplugin-vue-components)
- Markdown with Vue for Vite using [Vite Plugin Md](https://github.com/antfu/vite-plugin-md)
- Access thousands icons as Vue component in Vite using [Unplugin Icons](https://github.com/antfu/unplugin-icons)
- Progress bar like youtube, github, etc using [Nprogress](https://github.com/rstacruz/nprogress)
- Code syntax highlighter using [Prismjs](https://prismjs.com/)
- ~~Comment the article using [Vue Disqus](https://github.com/ktquez/vue-disqus)~~
- Share your article using [Vue Social Sharing](https://github.com/nicolasbeauvais/vue-social-sharing)
- Auto importing several package using [Unplugin Auto Import](https://github.com/antfu/unplugin-auto-import)
- Typescript support :D
- Dark mode support :D

## Updates

- Language support using [i18n](https://vue-i18n.intlify.dev)
- Customized tags & menu navigation topics
- Resume
- Contact form

# Components

In this blog starter, we have several components to easier own your blog, and if you have an idea to add some components, you can make a pull request in this repository on github.

- Articles Component
- Latest Component
- Share Component
- Tag Component
- To Top Button
- Pagination

## Updates

Building & smart components:

- Building components are the presenters, silly components which are candidates for a ui library.
  - Input, TextArea & CheckButton form components to have a contact form.
- Smart components has inner application or business logic.
  - WhoAmI component

# ~~Comment System~~

Unfortunately, It is incompatible with a minimum libraries update.

# Usage and Installation

## Development

I used npm for the package manager, you can adjust with your favorite package manager.

```bash
npm run dev
```

## Build

```bash
npm run build
```

After finish the build process, you will see dist folder successfully generated.

## Install with degit

You can install this starter with [degit](https://github.com/Rich-Harris/degit).

```bash
npm i -g degit
```

```bash
degit satyawikananda/elucidator-blog-starter your-project-name
```

# Working with Docker

## Prerequisites

1. Docker Desktop

You can follow the installation instructions here [https://docs.docker.com/desktop/](https://docs.docker.com/desktop/)

## Run app on docker

1. Build container

```
docker-compose up -d
```

2. Open your browser and go to

```
http://localhost:3000
```

<details>
  <summary>If you want to change the port, see instructions here</summary>
  <ol>
    <li>
        Edit manually Dockerfile at line 32 <br/>
        <code>
        EXPOSE 3000 
        </code>
    </li>
    <li>
        Rebuild container with command <br/>
        <code>
        docker-compose up --build
        </code>
    </li>
  </ol>
</details>

3. Done, try it!

# About The blog template name

Elucidator is a kirito's sword from the anime [Sword Art Online(SAO)](https://anilist.co/anime/11757/Sword-Art-Online/), and I like that anime, therefore i named this template with Elucidator :D.

# Contributing

Want this project make better? you can contributing in this project to, contribution are welcome :D

# License

Code licensed under [MIT License](https://raw.githubusercontent.com/satyawikananda/elucidator-blog-starter/main/LICENSE?token=AH44ZFFKVJSTLJ3SXJUPKHDA3VAJG).

# Credit

This starter was heavily inspired by [Anthony Fu's](https://github.com/antfu) [Vitesse](https://github.com/antfu/vitesse).

## Contributors ✨

Thanks and all credits goes to [Satya Wikananda](https://satyawikananda.vercel.app) and their wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

---

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
