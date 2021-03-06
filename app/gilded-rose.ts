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
        const getOlder = (item: Item) => {
            item.sellIn -= 1;
        };
        const preventNegativeQuality = (item: Item) => {
            if (item.sellIn < 0) {
                item.quality = 0;
            }
        };
        const degradeInQualityBy = (item: Item, degradeFactor: number) => {
            if (item.quality > 0) {
                changeQualityBy(item, degradeFactor);
            }
        };
        const ensureHighQuality = (item: Item, callback?: Function | undefined)  => {
            if (item.quality < 50) {
                changeQualityBy(item, 1)
            }
            if (callback) callback();
        };
        const ensureHighQualityDependingOnSellIn = (item: Item, sellInBorder: number) => {
            if (item.sellIn < sellInBorder) {
                ensureHighQuality(item);
            }
        };
        const sellInDays = [11, 6];
        const handleBackstageQuality = (sellInDays: number[], item: Item) => sellInDays.forEach((sellInDay: number) =>
            ensureHighQualityDependingOnSellIn(item, sellInDay)
        )

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];

            switch(item.name) {
                case 'Sulfuras, Hand of Ragnaros':
                    return this.items;

                case 'Backstage passes to a TAFKAL80ETC concert':
                    ensureHighQuality(item, () => handleBackstageQuality(sellInDays, item));
                    getOlder(item);
                    preventNegativeQuality(item);
                    return this.items;
                
                case 'Aged Brie':
                    ensureHighQuality(item);
                    getOlder(item);
                    ensureHighQualityDependingOnSellIn(item, 0);
                    return this.items;

                case 'Conjured Mana Cake':
                    degradeInQualityBy(item, -2);
                    getOlder(item);
                    preventNegativeQuality(item);
                    return this.items;

                default:
                    degradeInQualityBy(item, -1);
                    getOlder(item);
                    preventNegativeQuality(item);
                    return this.items;
              }
        }
    }
}
