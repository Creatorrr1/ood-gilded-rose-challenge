class AgedBrie {
  update(item) {
    item.sellIn = item.sellIn - 1

    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
}
// Inheritence => Inheriting methods or updated constructors or the default
// composition => When you include instances of other classes in a class

module.exports = AgedBrie
