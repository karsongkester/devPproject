var asset = require('../testAssets/wyzeAssets')
var wyze = {}
module.exports = {
    before: browser => {
        wyze = browser.page.wyzeObjects()
        wyze
        .navigate()
    },
    after: browser => {
        wyze
        .end()
    },
    'min': browser => {
        wyze
        .minTabs()
    },
    'max': browser => {
        wyze
        .maxTabs()
    },
    'searchBar': browser => {
        wyze
        .search(asset[0])
    },
    'links': browser => {
        wyze
        .sectionLinks()
    },
    'shoppingCart': browser => {
        wyze
        .cart()
    }
}