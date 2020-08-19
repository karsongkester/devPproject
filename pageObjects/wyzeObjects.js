const wyze = require("../tests/wyze")

var Cam = {
    'minTabs': function() {
        var self = this
        this
            .pause(2000)
            .resizeWindow(800, 600)
            .pause(2000)
            .click('@bMenu')
            .pause(2000)
            .click('@shopBmenu')
            .verify.visible('@new')
            .verify.visible('@smartCameras')
            .verify.visible('@inResponse')
            .verify.visible('@connectedHome')
            .verify.visible('@accessories')
            .verify.visible('@bundle')
            .click('@bMenu')
            .pause(2000)
            .click('@forumsBmenu')
            .api.windowHandles(function(result) {
                var handle = result.value[1]
                self.api.switchWindow(handle)
              })
        this
            .verify.visible('@forumsWelcome')
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://forums.wyzecam.com/')
                self.closeWindow()
            })
        this
            .api.windowHandles(function(result) {
                var handle = result.value[0]
                self.api.switchWindow(handle)
            })
        this
            .pause(2000)
            .click('@supportBmenu')
            .pause(2000)
            .verify.visible('@supportList')
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://support.wyzecam.com/hc/en-us')
            })
        this
            .pause(2000)
            .click('@logoLink')
            .pause(2000)
            .click('@bMenu')
            .pause(2000)
            .click('@exploreBmenu')
            .verify.visible('@exploreList')
        .api.windowHandle(function() {
            self.expect.url().to.contain('https://wyze.com/inspired-by-wyze')
        })
    this
            .pause(2000)
            .click('@bMenu')
            .pause(2000)
            .click('@servicesBmenu')
            .api.windowHandles(function(result) {
                var handle = result.value[1]
                self.api.switchWindow(handle)
              })
        this
            .verify.visible('@servicesList')
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://services.wyze.com/detail/camplus')
                self.closeWindow()
            })
        this
            .api.windowHandles(function(result) {
                var handle = result.value[0]
                self.api.switchWindow(handle)
            })
        this
            .pause(2000)
            .click('@account')
            .pause(2000)
            .click('@myAccount')
            .verify.visible('@myAccountLogin')
            .verify.visible('@myAccountNew')
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://wyze.com/customer/account/login/referer/aHR0cHM6Ly93eXplLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/')
            })
        this
            .pause(2000)
            .click('@bMenu')
            .pause(2000)
            .click('@account')
            .click('@checkout')
            .pause(2000)
            .verify.visible('@empty')
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://wyze.com/checkout/cart/')
            })
        this
            .pause(2000)
            .click('@logoLink2')
            .pause(2000)
            .click('@bMenu')
            .pause(2000)
            .click('@account')
            .click('@logIn')
            .verify.visible('@myAccountLogin')
            .verify.visible('@myAccountNew')
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://wyze.com/customer/account/login/')
            })
        this
            .pause(2000)
            .click('@bMenu2')
            .pause(2000)
            .click('@account2')
            .pause(2000)
            .click('@createAnAccount2')
            .pause(2000)
            .verify.visible('@createAccountBlock')
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://wyze.com/customer/account/create/')
            })
    },
    'maxTabs': function() {
        var self = this
        this
            .pause(2000)
            .resizeWindow(1923, 1083)
            .click('@shop')
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://wyze.com/shop-wyze')
            })
        this
            .click('@forumsBmenu')
            .api.windowHandles(function(result) {
                var handle = result.value[1]
                self.api.switchWindow(handle)
            })
        this
            .api.windowHandle(function() {
                self.expect.url().to.contain('https://forums.wyzecam.com/')
                self.closeWindow()
            })
        this
            .api.windowHandles(function(result) {
                var handle = result.value[0]
                self.api.switchWindow(handle)
            })
        this
            .pause(2000)
            .click('@supportBmenu')
            .pause(2000)
            .api.windowHandles(function(result) {
                var handle = result.value[1]
                self.api.switchWindow(handle)
            })
        this
            .verify.visible('@supportList')
            .api.closeWindow(function() {
                })
        this
            .api.windowHandles(function(result) {
                var handle = result.value[0]
                self.api.switchWindow(handle)
            })
        this
            .pause(2000)
            .click('@exploreBmenu')
            .pause(2000)
            .api.windowHandle(function(result) {
                self.expect.url().to.contain('https://wyze.com/inspired-by-wyze')
            })
        this
            .click('@servicesBmenu')
            .api.windowHandles(function(result) {
                var handle = result.value[1]
                self.api.switchWindow(handle)
            })
        this
            .verify.visible('@servicesList')
        this
            .api.closeWindow(function() {
                })
        this
            .api.windowHandles(function(result) {
                var handle = result.value[0]
                self.api.switchWindow(handle)
            })
    },
    'search': function(data) {
        var self= this
        this
            .resizeWindow(1980, 1033)
            .pause(2000)
            .click('@search')
            .pause(2000)
            .setValue('@searchInput', data.search1)
            .pause(2000)
            .click('@go')
            .pause(2000)
            .verify.visible('@wyzeScale')
            .saveScreenshot('C:\Users\Karso\Pictures\Screenshots\wyzeScale.png')
            .pause(2000)
            .click('@scaleVid')
            .pause(500)
            .click('@scaleClose')
            .click('@search')
            .pause(2000)
            .setValue('@searchInput', data.search2)
            .pause(2000)
            .click('@go')
            .pause(2000)
            .saveScreenshot('C:\Users\Karso\Pictures\Screenshots\wyzeBand1.png')
            .click('@band')
            .pause(2000)
            .verify.visible('@wyzeBand')
            .saveScreenshot('C:\Users\Karso\Pictures\Screenshots\wyzeBand2.png')
            .pause(2000)
    },
    'sectionLinks': function(){
        var self = this
        this
            .pause(2000)
            .resizeWindow(1933, 1029)
            .click('@wyzeCam')
            .pause(2000)
            .verify.visible('@wyzeCamPage')
            .click('@wyzeCamB')
            .pause(2000)
            .verify.visible('@wyzeCamBpage')
            .click('@wyzeCamPan')
            .pause(2000)
            .verify.visible('@wyzeCamPanPage')
            .click('@wyzeBulb')
            .pause(2000)
            .verify.visible('@wyzeBulbPage')
            .click('@wyzeSense')
            .pause(2000)
            .verify.visible('@wyzeSensePage')
            .click('@wyzePlug')
            .pause(2000)
            .verify.visible('@wyzePlugPage')
            .click('@smartHome')
            .pause(2000)
            .verify.visible('@smartHomePage')
            .pause(2000)
            .waitForElementVisible('@accessories')
            .click('@accessories')
            .pause(2000)
            .waitForElementVisible('@accessoriesPage')
            .click('@orderTrack')
            .pause(2000)
            .verify.visible('@myAccountLogin')
            .click('@returns')
            .pause(2000)
            .verify.visible('@returnsPage')
            .click('@help')
            .pause(2000)
            .verify.visible('@supportList')
            .click('@logoLink')
            .pause(2000)
            .click('@community')
            .api.windowHandles(function(result) {
                var handle = result.value[1];
                self.api.switchWindow(handle);
            })
        this
            .pause(2000)
            .verify.visible('@ask')
            .api.closeWindow(function() {
            })
        this
            .api.windowHandles(function(result) {
                var handle = result.value[0]
                self.api.switchWindow(handle)
            })
        this
            .pause(2000)
            .click('@security')
            .pause(2000)
            .verify.visible('@securityPage')
            .click('@about')
            .pause(2000)
            .verify.visible('@aboutPage')
            .click('@shop')
            .pause(2000)
            .click('@privacy')
            .pause(2000)
            .verify.visible('@privacyPage')
            .click('@careers')
            .api.windowHandles(function(result) {
                var handle = result.value[1];
                self.api.switchWindow(handle);
            })
        this
            .api.windowHandle(function(result) {
                self.expect.url().to.contain('https://jobs.lever.co/wyze')
            })
        this
            .api.windowHandles(function(result) {
                var handle = result.value[0]
                self.api.switchWindow(handle)
            })
        this
            .pause(2000)
            .click('@terms')
            .verify.visible('@termsPage')
            .click('@contact')
            .verify.visible('@contactPage')
            .click('@report')
            .pause(2000)
            .api.windowHandle(function(result) {
                self.expect.url().to.contain('https://wyze.com/security-report')
            })
        this
            .click('@early')
            .verify.visible('@earlyPage')
            .click('@join')
            .verify.visible('@joinPage')
            .click('@tester')
            .verify.visible('@testerPage')
            .click('@inspired')
            .api.windowHandle(function(result) {
                self.expect.url().to.contain('https://wyze.com/inspired-by-wyze')
            })
    },
    'cart': function() {
        var self = this
        this
            .waitForElementVisible('@shop')
            .pause(1000)
            .click('@shop')
            .pause(1000)
            .click('@outdoorBundle')
            .pause(1000)
            .click('@preOrder1')
            .pause(2000)
            .click('@preOrder2')
            .pause(2000)
            .verify.visible('@prodMessage')
            .verify.visible('@outdoorBundle2')
            .pause(2000)
            .click('@plus')
            .click('@update')
            .pause(9000)
            .verify.visible('@two')
            .pause(2000)
            .click('@subtract')
            .pause(2000)
            .click('@update')
            .pause(9000)
            .verify.visible('@one')
            .click('@shop')
            .pause(1000)
            .click('@lock')
            .pause(2000)
            .click('@buy')
            .pause(2000)
            .click('@addTo')
            .pause(2000)
            .click('@delete')
            .pause(2000)
            .click('@clear')
    }
}
module.exports = {
    url:('https://wyze.com/'),
    commands: [Cam],
    elements: {
        logo: 'a[class="logo"]',
        logoLink: 'a[href="https://www.wyzecam.com/"]',
        empty: '[class="cart-empty-big-text"]',
        logoLink2: 'a[class="logo"]',
        shop:'a[href="/shop-wyze"]',
        overview1: 'a[id="linkOverview"]',
        details1: 'a[id="linkDetails"]',
        prodMessage: '[data-bind="html: $parent.prepareMessageForHtml(message.text)"]',
        preOrder1: 'button[title="Pre-Order"]',
        bMenu: 'div[class="hamburger-menu-icon-small"]',
        bMenu2: 'div[data-action="toggle-mobile-nav"]',
        shopBmenu: 'a[href="/shop-wyze"]',
        exploreList: 'div[class="col-12"]',
        forumsBmenu: 'a[href="https://forums.wyzecam.com/"]',
        checkoutList: 'div[class="opc-wrapper-boxed"]',
        search: 'a[class="button action-search-slideout"]',
        searchInput: 'input[class="input-text js-input-focus"]',
        go: 'button[title="Go"]',
        scaleVid: 'a[class="btn-product btn-video"]',
        wyzeScale: 'div[class="row navigation-top product-page-nav"]',
        scaleClose: 'a[class="btn-close"]',
        scaleVid2: 'div[style="left: 0px; transform: scaleX(0.636265);"]',
        band: 'a[href="https://wyze.com/wyzeband.html"]',
        miniC: '[class="minicart-icon-1"]',
        plus: '[class="icon-plus qty-plus"]',
        subtract: '[class="icon-minus qty-minus"]',
        delete: '[class="action action-delete"]',
        buy: '[class="buy-btn"]',
        addTo: '[type="submit"]',
        clear: '[class="action clear"]',
        update: '[class="action update"]',
        error: '[class="message-error error message"]',
        servicesList: 'section[class="section-features"]',
        myAccount: 'a[href="https://wyze.com/customer/account/"]',
        wyzeCamB: 'a[href="/wyze-cam-black.html"]',
        wyzeCamBpage: 'img[alt="Wyze Cam Black"]',
        wyzeCamPan: 'a[href="/wyze-cam-pan.html"]',
        wyzeSense: 'a[href="/wyze-sense.html"]',
        lock: '[title="Wyze Lock"]',
        wyzeCam: 'a[href="/wyze-cam.html"]',
        wyzeBulb: 'a[href="/wyze-bulb.html"]',
        wyzePlug: 'a[href="/wyze-plug.html"]',
        wyzePlugPage: 'span[id="btnLaunch"]',
        smartHome: 'a[href="/wyze-smart-home-starter-pack.html"]',
        accessories: 'a[href="/accessories.html"]',
        orderTrack: 'a[href="/sales/order/history/"]',
        returns: 'a[href="/return-warranty-policy"]',
        help: 'a[href="https://support.wyzecam.com/"]',
        community: 'a[href="https://forums.wyzecam.com/c/ask-the-community"]',
        security: 'a[href="/wyze-security-and-trust"]',
        about: 'a[href="/our-story"]',
        careers: 'a[href="https://jobs.lever.co/wyze"]',
        terms: 'a[href="/term-conditions"]',
        contact: 'a[href="/contact"]',
        inspired: 'a[href="/inspired-by-wyze"]',
        report: 'a[href="/security-report"]',
        reportPage: 'h2[id="header_1"]',
        early: 'a[href="/early-access"]',
        join: 'a[href="/community"]',
        tester: 'a[href="/become-a-beta-tester"]',
        checkout: 'a[href="https://wyze.com/checkout/"]',
        logIn: 'a[href="https://wyze.com/customer/account/login/"]',
        createAccountBlock: 'form[class="form create account form-create-account"]',
        one: {
            selector:'//input[@value="1"]',
            locateStrategy: 'xpath'
        },
        two: {
            selector:'//input[@value="2"]',
            locateStrategy: 'xpath'
        },
        ask: { 
            selector:'(//div[@data-name="Ask the Community"])[2]',
            locateStrategy: 'xpath'
        },
        wyzeCamPage: {
            selector: '//h6[contains(text(), "Clearly see the moments that matter.")]',
            locateStrategy: 'xpath'
        },
        wyzeCamPanPage: {
            selector: '//h6[contains(text(), "Take it for a spin.")]',
            locateStrategy: 'xpath'
        },
        wyzeSensePage: {
            selector: '//h6[contains(text(), "Impossibly small contact and motion sensors for your home.")]',
            locateStrategy: 'xpath'
        },
        wyzeBulbPage: {
            selector: '(//span[contains(text(), "Wyze Bulb")])[2]',
            locateStrategy: 'xpath'
        },
        smartHomePage: {
            selector: '//span[contains(text(), "Smart Home Starter")]',
            locateStrategy: 'xpath'
        },
        accessoriesPage: {
            selector: '//span[contains(text(), "Accessories")]',
            locateStrategy: 'xpath'
        },
        returnsPage: {
            selector: '//h2[contains(text(), "Return Policy and Limited Warranty Terms")]',
            locateStrategy: 'xpath'
        },
        securityPage: {
            selector: '//h2[contains(text(), "Security & Trust")]',
            locateStrategy: 'xpath'
        },
        aboutPage: {
            selector: '//h3[contains(text(), "HOW WE STARTED")]',
            locateStrategy: 'xpath'
        },
        privacy: {
            selector:'//a[contains(text(), "Privacy Statements")]',
            locateStrategy: 'xpath'
        },
        privacyPage: {
            selector: '//h2[contains(text(), "Wyze Privacy Statement")]',
            locateStrategy: 'xpath'
        },
        termsPage: {
            selector: '//h2[contains(text(), "Wyze Terms of Service")]',
            locateStrategy: 'xpath'
        },
        contactPage: {
            selector: '//h1[contains(text(), "Contact Us")]',
            locateStrategy: 'xpath'
        },
        earlyPage: {
            selector: '//h2[contains(text(), "Early Access Program")]',
            locateStrategy: 'xpath'
        },
        joinPage: {
            selector: '//h2[contains(text(), "Join Our Community")]',
            locateStrategy: 'xpath'
        },
        testerPage: {
            selector: '//h2[contains(text(), "Become a Beta Tester")]',
            locateStrategy: 'xpath'
        },
        wyzeBand: {
            selector:'(//span[@itemprop="name"])[2]',
            locateStrategy: 'xpath'
        },
        forumsWelcome: {
            selector: '//h1[contains(text(),"Welcome to Wyze Communities")]',
            locateStrategy: 'xpath'
        },
        forumsWelcome2: {
            selector: '//a[contains(text(),"Welcome to Wyze Communities")]',
            locateStrategy: 'xpath'
        },
        supportBmenu: {
            selector: '(//a[@href="https://support.wyzecam.com/"])[2]',
            locateStrategy: 'xpath'
            },
        supportList: {
            selector: '(//ul[@class="blocks-list"])[1]',
            locateStrategy: 'xpath'
        },
        exploreBmenu: {
            selector: '(//a[@href="/inspired-by-wyze"])[2]',
            locateStrategy: 'xpath'
            },
        servicesBmenu: {
            selector: '(//a[@href="https://services.wyze.com"])[1]',
            locateStrategy: 'xpath'
            },
        myAccountLogin: {
            selector: '(//div[@class="block block-customer-login"])[1]',
            locateStrategy: 'xpath'
        },
        myAccountNew: {
            selector: '(//div[@class="block block-new-customer"])[1]',
            locateStrategy: 'xpath'
        },
        createAnAccount: {
            selector:'(//a[@href="https://wyze.com/customer/account/create/"])[2]',
            locateStrategy: 'xpath'
        },
        createAnAccount2: {
            selector: '(//a[@href="https://wyze.com/customer/account/create/"])[3]',
            locateStrategy: 'xpath'
        },
        menu: {
            selector:'//a[contains(text(), "Menu")]',
            locateStrategy: 'xpath'
            },
        account: {
            selector:'//a[contains(text(), "Account")]',
            locateStrategy: 'xpath'
            },
        account2: {
            selector: '(//div[@class="ox-section-item-title ox-nav-sections-item-title"])[1]',
            locateStrategy: 'xpath'
        },
        preOrder2: {
            selector: '(//button[@class="action primary btn-product"])[1]',
            locateStrategy: 'xpath'
            },
        new: {
            selector: '//h5[contains(text(), "New")]',
            locateStrategy: 'xpath'
            },
        smartCameras: {
            selector: '//h5[contains(text(), "Smart Cameras")]',
            locateStrategy: 'xpath'
            },
        inResponse: {
            selector: '//h5[contains(text(), "In Response")]',
            locateStrategy: 'xpath'
            },
        connectedHome: {
            selector: '//h5[contains(text(), "Connected Home")]',
            locateStrategy: 'xpath'
            },
        bundle: {
            selector: '//h5[contains(text(), "Bundles/Gift Sets")]',
            locateStrategy: 'xpath'
            },
        outdoorBundle: {
            selector: '(//a[@title="Outdoor Starter Bundle"])[1]',
            locateStrategy: 'xpath'
        },
        outdoorBundle2: {
            selector: '//a[contains(text(), "Outdoor Starter Bundle")]',
            locateStrategy: 'xpath'
        },
    }
}