export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        const changeQualityBy = (item: Item, quantity: number) => {
            item.quality += quantity;
        };

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];

            if (item.name == 'Sulfuras, Hand of Ragnaros') {
                return this.items;
            }
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality < 50) {
                    changeQualityBy(item, 1);
                        if (item.sellIn < 11) {
                            if (item.quality < 50) {
                                changeQualityBy(item, 1)
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.quality < 50) {
                                changeQualityBy(item, 1)
                            }
                        }
                }
                item.sellIn = item.sellIn - 1;
                if (item.sellIn < 0) {
                    item.quality = 0;
                }
                return this.items;
            }

            if (item.name == 'Aged Brie') {
                if (item.quality < 50) {
                    changeQualityBy(item, 1)
                }
                item.sellIn = item.sellIn - 1;
                if (item.sellIn < 0) {
                    if (item.quality < 50) {
                        changeQualityBy(item, 1)
                    }
                }
                return this.items;
            }

            if (item.quality > 0) {
                changeQualityBy(item, -1)
            }

            item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0) {
                item.quality = 0
            }
        }

        return this.items;
    }
}
