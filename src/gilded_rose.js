class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateAgedBrie(item) {
    item.sellIn = item.sellIn - 1

    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1
    }
  }

  updatedBackStagePass(item) {
    item.sellIn = item.sellIn - 1

    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 0) {
      item.quality = 0
    }
  }

  updatedSulfuras(item) {
    // no change required
  }

  updatedConjuredItem(item) {
    // quality decreases twice as fast
    item.sellIn = item.sellIn - 1

    if (item.sellIn < 0) {
      item.quality = item.quality - 4
    } else {
      item.quality = item.quality - 2
    }
  }

  updatedStandardItem(item) {
    // any other unspecified items
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }

    item.sellIn = item.sellIn - 1

    // when sell is less then zero than quality decrease again
    if (item.sellIn < 0) {
      if (item.quality > 0) {
        item.quality = item.quality - 1
      }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      if (item.name === 'Aged Brie') {
        this.updateAgedBrie(item)
      } else if (item.name.includes('Backstage passes')) {
        this.updatedBackStagePass(item)
      } else if (item.name.includes('Sulfuras')) {
        this.updatedSulfuras(item)
      } else if (item.name.includes('Conjured')) {
        this.updatedConjuredItem(item)
      } else {
        this.updatedStandardItem(item)
      }
    }

    return this.items
  }
}

module.exports = {
  Item,
  Shop
}
