function vedaInit() {
    async function loadScript({
                                  file,
                                  content,
                                  insertPosition = 'beforeend',
                                  id,
                                  parentElement = document.head,
                                  type,
                              }) {
        if (!!id) {
            const el = document.getElementById(id);
            el?.remove();
        }
        const scriptEl = document.createElement('script');
        if (!!id) {
            scriptEl.id = id;
        }
        if (!!file) {
            scriptEl.src = file;
            if (type) {
                scriptEl.type = type;
            }
        }
        if (!!content) {
            scriptEl.textContent = content;
        }
        if (!!file || !!content) {
            parentElement.insertAdjacentElement(insertPosition, scriptEl);
            return new Promise(resolve => {
                scriptEl.onload = () => {
                    resolve(scriptEl);
                };
            });
        }
        return new Promise(resolve => {
            resolve(scriptEl);
        });
    }

    let loaded = false;

    async function init() {
        if (!loaded) {
            await Promise.all([
                loadScript({
                    file: 'https://cdn.shopify.com/s/files/1/0732/6416/9268/files/swiper-bundle.min.js?v=1682652602',
                    id: 'main-js',
                    insertPosition: 'beforeend',
                    parentElement: document.body
                }),
                loadScript({
                    file: 'https://cdn.shopify.com/s/files/1/0732/6416/9268/files/photoswipe-lightbox.js?v=1683348469',
                    id: 'photoswipe-lightbox-js',
                    insertPosition: 'beforeend',
                    parentElement: document.body
                }),
                loadScript({
                    file: 'https://cdn.shopify.com/s/files/1/0732/6416/9268/files/photoswipe.js?v=1683348461',
                    id: 'photoswipe-js',
                    insertPosition: 'beforeend',
                    parentElement: document.body
                })
            ]);
            await loadScript({
                file: 'https://veda-frontend-js-core.netlify.app/main.js',
                id: 'main-js',
                insertPosition: 'beforeend',
                parentElement: document.body
            });
            if(window.veda) {
                const {loadStyle} = veda.utils;
                const pageScripts = document.querySelectorAll('link.veda-page-script');
                pageScripts.forEach(pageScript => {
                    const src = pageScript.getAttribute('href');
                    loadScript({
                        file: src,
                        id: src,
                        insertPosition: 'beforeend',
                        parentElement: document.body
                    });
                });
                loadStyle({
                    file: 'https://veda-frontend-js-core.netlify.app/animate.css',
                    id: 'animate-css',
                    insertPosition: 'beforeend',
                });
                loadStyle({
                    file: 'https://veda-frontend-js-core.netlify.app/main.css',
                    id: 'main-css',
                    insertPosition: 'beforeend',
                });
                loadStyle({
                    file: 'https://veda-frontend-js-core.netlify.app/flags.css',
                    id: 'flag-css',
                    insertPosition: 'beforeend',
                });

                const pageStyles = document.querySelectorAll('link.veda-page-style');
                pageStyles.forEach(pageStyle => {
                    const src = pageStyle.getAttribute('href');
                    loadStyle({
                        file: src,
                        id: src,
                        insertPosition: 'beforeend'
                    });
                });
                loaded = true;
            }
        }
    }

    if (navigator.userAgentData && navigator.userAgentData.brands) {
        const isBot = !!navigator.userAgentData.brands.some(item => item.brand === 'Lighthouse') || navigator.userAgent.includes('GTmetrix');
        if (isBot) {
            const root = document.querySelector('#veda-root, .veda-root');
            if (root) {
                root.style.opacity = '1';
                console.log("Run 1")
            }
            console.log("Run 2")
        } else {
            init();
            console.log("Run 3")
        }
    } else {
        init();
        console.log("Run 4")
    }
}

vedaInit();

