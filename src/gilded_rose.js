// const Item = require('./Item')
const AgedBrie = require('./AgedBrie')
const BackStagePass = require('./BackstagePass')
const ConjuredItem = require('./ConjureItem')
const StandardItem = require('./StandardItem')

class Shop {
  constructor(items = []) {
    this.items = items
    this.agedBrie = new AgedBrie()
    this.backStagePass = new BackStagePass()
    this.conjuredItem = new ConjuredItem()
    this.standardItem = new StandardItem()
  }

  updatedSulfuras(item) {
    // no change required
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      if (item.name === 'Aged Brie') {
        this.agedBrie.update(item)
      } else if (item.name.includes('Backstage passes')) {
        // this.updatedBackStagePass(item)
        this.backStagePass.update(item)
      } else if (item.name.includes('Sulfuras')) {
        this.updatedSulfuras(item)
      } else if (item.name.includes('Conjured')) {
        // this.updatedConjuredItem(item)
        this.conjuredItem.update(item)
      } else {
        // this.updatedStandardItem(item)
        this.standardItem.update(item)
      }
    }

    return this.items
  }
}

module.exports = Shop
