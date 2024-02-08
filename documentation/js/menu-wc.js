'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">salad-bar documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-6e327d7965e3a850aece6101a4677ddd82621499e7d5d8bdfce17f75dc61c1fdd0ae154ce96f54a9d3088643b93919122b7a661d8d53dbfe0e8dccc2da78ca0c"' : 'data-target="#xs-controllers-links-module-AppModule-6e327d7965e3a850aece6101a4677ddd82621499e7d5d8bdfce17f75dc61c1fdd0ae154ce96f54a9d3088643b93919122b7a661d8d53dbfe0e8dccc2da78ca0c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-6e327d7965e3a850aece6101a4677ddd82621499e7d5d8bdfce17f75dc61c1fdd0ae154ce96f54a9d3088643b93919122b7a661d8d53dbfe0e8dccc2da78ca0c"' :
                                            'id="xs-controllers-links-module-AppModule-6e327d7965e3a850aece6101a4677ddd82621499e7d5d8bdfce17f75dc61c1fdd0ae154ce96f54a9d3088643b93919122b7a661d8d53dbfe0e8dccc2da78ca0c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-6e327d7965e3a850aece6101a4677ddd82621499e7d5d8bdfce17f75dc61c1fdd0ae154ce96f54a9d3088643b93919122b7a661d8d53dbfe0e8dccc2da78ca0c"' : 'data-target="#xs-injectables-links-module-AppModule-6e327d7965e3a850aece6101a4677ddd82621499e7d5d8bdfce17f75dc61c1fdd0ae154ce96f54a9d3088643b93919122b7a661d8d53dbfe0e8dccc2da78ca0c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6e327d7965e3a850aece6101a4677ddd82621499e7d5d8bdfce17f75dc61c1fdd0ae154ce96f54a9d3088643b93919122b7a661d8d53dbfe0e8dccc2da78ca0c"' :
                                        'id="xs-injectables-links-module-AppModule-6e327d7965e3a850aece6101a4677ddd82621499e7d5d8bdfce17f75dc61c1fdd0ae154ce96f54a9d3088643b93919122b7a661d8d53dbfe0e8dccc2da78ca0c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DressingModule.html" data-type="entity-link" >DressingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DressingModule-e61e68342807858e3550d7105e1e560de41e9aec46a3b89f8b345c1595af02eb1eb92c44543762c3c814314c7bc39d9432397e6b280b69c3ad0b4debb0a208a1"' : 'data-target="#xs-controllers-links-module-DressingModule-e61e68342807858e3550d7105e1e560de41e9aec46a3b89f8b345c1595af02eb1eb92c44543762c3c814314c7bc39d9432397e6b280b69c3ad0b4debb0a208a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DressingModule-e61e68342807858e3550d7105e1e560de41e9aec46a3b89f8b345c1595af02eb1eb92c44543762c3c814314c7bc39d9432397e6b280b69c3ad0b4debb0a208a1"' :
                                            'id="xs-controllers-links-module-DressingModule-e61e68342807858e3550d7105e1e560de41e9aec46a3b89f8b345c1595af02eb1eb92c44543762c3c814314c7bc39d9432397e6b280b69c3ad0b4debb0a208a1"' }>
                                            <li class="link">
                                                <a href="controllers/DressingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DressingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DressingModule-e61e68342807858e3550d7105e1e560de41e9aec46a3b89f8b345c1595af02eb1eb92c44543762c3c814314c7bc39d9432397e6b280b69c3ad0b4debb0a208a1"' : 'data-target="#xs-injectables-links-module-DressingModule-e61e68342807858e3550d7105e1e560de41e9aec46a3b89f8b345c1595af02eb1eb92c44543762c3c814314c7bc39d9432397e6b280b69c3ad0b4debb0a208a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DressingModule-e61e68342807858e3550d7105e1e560de41e9aec46a3b89f8b345c1595af02eb1eb92c44543762c3c814314c7bc39d9432397e6b280b69c3ad0b4debb0a208a1"' :
                                        'id="xs-injectables-links-module-DressingModule-e61e68342807858e3550d7105e1e560de41e9aec46a3b89f8b345c1595af02eb1eb92c44543762c3c814314c7bc39d9432397e6b280b69c3ad0b4debb0a208a1"' }>
                                        <li class="link">
                                            <a href="injectables/DressingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DressingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaladModule.html" data-type="entity-link" >SaladModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SaladModule-deffd079afbb1660c91f80d56ac469cd8794d158e00b09e136bfb1b2550ed69ebb6c1eb42ea968461c7452dcc537bbb69f57144cc32e6737a1e380990e0d8d82"' : 'data-target="#xs-controllers-links-module-SaladModule-deffd079afbb1660c91f80d56ac469cd8794d158e00b09e136bfb1b2550ed69ebb6c1eb42ea968461c7452dcc537bbb69f57144cc32e6737a1e380990e0d8d82"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SaladModule-deffd079afbb1660c91f80d56ac469cd8794d158e00b09e136bfb1b2550ed69ebb6c1eb42ea968461c7452dcc537bbb69f57144cc32e6737a1e380990e0d8d82"' :
                                            'id="xs-controllers-links-module-SaladModule-deffd079afbb1660c91f80d56ac469cd8794d158e00b09e136bfb1b2550ed69ebb6c1eb42ea968461c7452dcc537bbb69f57144cc32e6737a1e380990e0d8d82"' }>
                                            <li class="link">
                                                <a href="controllers/SaladController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaladController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SaladModule-deffd079afbb1660c91f80d56ac469cd8794d158e00b09e136bfb1b2550ed69ebb6c1eb42ea968461c7452dcc537bbb69f57144cc32e6737a1e380990e0d8d82"' : 'data-target="#xs-injectables-links-module-SaladModule-deffd079afbb1660c91f80d56ac469cd8794d158e00b09e136bfb1b2550ed69ebb6c1eb42ea968461c7452dcc537bbb69f57144cc32e6737a1e380990e0d8d82"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SaladModule-deffd079afbb1660c91f80d56ac469cd8794d158e00b09e136bfb1b2550ed69ebb6c1eb42ea968461c7452dcc537bbb69f57144cc32e6737a1e380990e0d8d82"' :
                                        'id="xs-injectables-links-module-SaladModule-deffd079afbb1660c91f80d56ac469cd8794d158e00b09e136bfb1b2550ed69ebb6c1eb42ea968461c7452dcc537bbb69f57144cc32e6737a1e380990e0d8d82"' }>
                                        <li class="link">
                                            <a href="injectables/SaladService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaladService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToppingModule.html" data-type="entity-link" >ToppingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ToppingModule-e1ac3211f95b85f9ca26a2a3000bf69e022f0bab2cb470e1a6713d9ba01c10b78003043191fc3c1dc1cec7d8ae9eec15ed62897115603fa00f21f37255b4995c"' : 'data-target="#xs-controllers-links-module-ToppingModule-e1ac3211f95b85f9ca26a2a3000bf69e022f0bab2cb470e1a6713d9ba01c10b78003043191fc3c1dc1cec7d8ae9eec15ed62897115603fa00f21f37255b4995c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ToppingModule-e1ac3211f95b85f9ca26a2a3000bf69e022f0bab2cb470e1a6713d9ba01c10b78003043191fc3c1dc1cec7d8ae9eec15ed62897115603fa00f21f37255b4995c"' :
                                            'id="xs-controllers-links-module-ToppingModule-e1ac3211f95b85f9ca26a2a3000bf69e022f0bab2cb470e1a6713d9ba01c10b78003043191fc3c1dc1cec7d8ae9eec15ed62897115603fa00f21f37255b4995c"' }>
                                            <li class="link">
                                                <a href="controllers/ToppingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToppingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ToppingModule-e1ac3211f95b85f9ca26a2a3000bf69e022f0bab2cb470e1a6713d9ba01c10b78003043191fc3c1dc1cec7d8ae9eec15ed62897115603fa00f21f37255b4995c"' : 'data-target="#xs-injectables-links-module-ToppingModule-e1ac3211f95b85f9ca26a2a3000bf69e022f0bab2cb470e1a6713d9ba01c10b78003043191fc3c1dc1cec7d8ae9eec15ed62897115603fa00f21f37255b4995c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ToppingModule-e1ac3211f95b85f9ca26a2a3000bf69e022f0bab2cb470e1a6713d9ba01c10b78003043191fc3c1dc1cec7d8ae9eec15ed62897115603fa00f21f37255b4995c"' :
                                        'id="xs-injectables-links-module-ToppingModule-e1ac3211f95b85f9ca26a2a3000bf69e022f0bab2cb470e1a6713d9ba01c10b78003043191fc3c1dc1cec7d8ae9eec15ed62897115603fa00f21f37255b4995c"' }>
                                        <li class="link">
                                            <a href="injectables/ToppingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToppingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseSaladDto.html" data-type="entity-link" >BaseSaladDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseToppingDTO.html" data-type="entity-link" >BaseToppingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDressingDto.html" data-type="entity-link" >CreateDressingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSaladDto.html" data-type="entity-link" >CreateSaladDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateToppingDto.html" data-type="entity-link" >CreateToppingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dressing.html" data-type="entity-link" >Dressing</a>
                            </li>
                            <li class="link">
                                <a href="classes/Salad.html" data-type="entity-link" >Salad</a>
                            </li>
                            <li class="link">
                                <a href="classes/Topping.html" data-type="entity-link" >Topping</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToppingDTO.html" data-type="entity-link" >ToppingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSaladDto.html" data-type="entity-link" >UpdateSaladDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateToppingDto.html" data-type="entity-link" >UpdateToppingDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});