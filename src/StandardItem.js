class StandardItem {
  update(item) {
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
}
module.exports = StandardItem
