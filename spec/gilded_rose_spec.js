const Shop = require('../src/gilded_rose.js')
const Item = require('../src/Item')

describe('Gilded Rose', function () {
  let newShop

  beforeEach(() => {
    newShop = new Shop([])
  })

  it('New Shop is empty', function () {
    // toBe string or number
    // toEqual => arrays or objects
    expect(newShop.items.length).toBe(0)
  })

  it('new standard item', function () {
    // setup
    const shop = new Shop([new Item('Limited Edition Chocolate treats', 30, 1)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Limited Edition Chocolate treats')
    expect(items[0].sellIn).toEqual(29)
    expect(items[0].quality).toEqual(0)
  })

  it('new standard item, quality decreases by 2 when sellIn is less than 0', function () {
    // setup
    const shop = new Shop([new Item('Limited Edition Chocolate treats', 0, 3)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Limited Edition Chocolate treats')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(1)
  })

  it('Aged Brie, quality increments by 1', function () {
    // setup
    const shop = new Shop([new Item('Aged Brie', 2, 0)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(1)
  })

  it('Aged Brie, quality increases by 2', function () {
    // setup
    const shop = new Shop([new Item('Aged Brie', 0, 5)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(7)
  })

  it('Aged Brie, quality never exceeds 50 ', function () {
    // setup
    const shop = new Shop([new Item('Aged Brie', 1, 50)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(50)
  })

  it('Sulfuras, quality remains the same', function () {
    // setup
    const shop = new Shop([new Item('Sulfuras, Hand of Ragnaros', 3, 80)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(80)
  })

  it('Sulfuras, quality remains the same', function () {
    // setup
    const shop = new Shop([new Item('Sulfuras, potion', 3, 80)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Sulfuras, potion')
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(80)
  })

  it('Backstage passes to a TAFKAL80ETC concert, quality increase by 2 when sellIn < 11 and quality < 50', function () {
    // setup
    const shop = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)
    ])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(42)
  })

  it('Backstage passes to a TAFKAL80ETC concert, quality increase by 3 when sellIn < 11 , sellIn < 6 and quality < 50', function () {
    // setup
    const shop = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40)
    ])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(43)
  })

  it('Backstage passes to a TAFKAL80ETC concert, sellIn decreases by 1 and quality stays the same when above 50', function () {
    // setup
    const shop = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 51)
    ])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(51)
  })

  it('Backstage passes to drake concert, sellIn decreases by 1 and quality stays the same when above 50', function () {
    // setup
    const shop = new Shop([
      new Item('Backstage passes to a drake concert', 10, 51)
    ])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a drake concert')
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(51)
  })

  it('Conjured item decreases in quality twice as fast as any other items', function () {
    // setup
    const shop = new Shop([new Item('Conjured Mana Cake', 3, 6)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Conjured Mana Cake')
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(4)
  })

  it('Conjured item decreases in quality four times faster when sellIn < 0', function () {
    // setup
    const shop = new Shop([new Item('Conjured Mana Berries', 0, 6)])
    // execute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Conjured Mana Berries')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(2)
  })
})
