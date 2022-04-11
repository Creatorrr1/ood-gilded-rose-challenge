class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateAgedBrie(item) {
    item.sellIn = item.sellIn - 1;

    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  updatedBackStagePass (item) {
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

  updatedSulfuras (item) {
    // no change required
  }

  updatedConjuredItem (item) {
    // quality decreases twice as fast
      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0 ) {
        item.quality = item.quality - 4
      } else {
        item.quality = item.quality - 2
      }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      // looks at the individual item
      if (this.items[i].name === 'Aged Brie') {
        this.updateAgedBrie(item)
      } 
      else if (this.items[i].name ==='Backstage passes to a TAFKAL80ETC concert') {
        this.updatedBackStagePass(item)
      } 
      else if (this.items[i].name === 'Sulfuras, Hand of Ragnaros' ) {
        this.updatedSulfuras(item)
      }
      else {
        // if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          // filters the item name and makes sure that the items doesn't have those names
          if (this.items[i].quality > 0) {
            // a condition is set with the quality being above 0
            // if (/*this.items[i].name != 'Sulfuras, Hand of Ragnaros' */ true) {
              // if the item doesn't contain that name and its quality is above 0
              this.items[i].quality = this.items[i].quality - 1;
              // affects new item
            // }
          }
        // } else {
        //   if (this.items[i].quality < 50) {
        //     this.items[i].quality = this.items[i].quality + 1;
        //     // quality increases by 1 because in this else statement items[i] == 'Aged Brie' and == 'Backstage passes to a TAFKAL80ETC concert'
        //     if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        //       if (this.items[i].sellIn < 11) {
        //         if (this.items[i].quality < 50) {
        //           this.items[i].quality = this.items[i].quality + 1;
        //           // increases in quality again when sellIn less than 11 days and quality less than 50
        //           // but only for 'Backstage passes to a TAFKAL80ETC concert' item
        //         }
        //       }
        //       if (this.items[i].sellIn < 6) {
        //         // increases in quality for the third time when sellIn < 6
        //         if (this.items[i].quality < 50) {
        //           this.items[i].quality = this.items[i].quality + 1;
        //         }
        //       }
        //     }
        //   }
        // }
        // if (/*this.items[i].name != 'Sulfuras, Hand of Ragnaros'*/ true) {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          // decreases the sellIn days by 1
          // affects new item
          // when sell is less then zero than quality decrease again
        // }
        if (this.items[i].sellIn < 0) {
          // if (/*this.items[i].name != 'Aged Brie'*/ true) {
            // if (/*this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'*/ true) {
              if (this.items[i].quality > 0) {
                // if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1;
                  // quality is decreased again
                // }
              }
            // } 
            // else {
            //   this.items[i].quality = this.items[i].quality - this.items[i].quality;
            // }
          // } 
          // else {
          //   if (this.items[i].quality < 50) {
          //     this.items[i].quality = this.items[i].quality + 1;
          //   }
          // }
        }
      }
      
      return this.items;
    }
  }
}
  module.exports = {
    Item,
  Shop
}
