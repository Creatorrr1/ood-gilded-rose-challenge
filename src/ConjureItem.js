class ConjuredItem {
  update(item) {
    // quality decreases twice as fast
    item.sellIn = item.sellIn - 1

    if (item.sellIn < 0) {
      item.quality = item.quality - 4
    } else {
      item.quality = item.quality - 2
    }
  }
}
module.exports = ConjuredItem
