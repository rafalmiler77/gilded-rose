import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    let days = 0;
    let name = '';
    const testQuality = (name: string, sellIn: number, quality: number, days: number): Item => {
        const gildedRose = new GildedRose([ 
            new Item(name, sellIn, quality)
        ]);
        for (let i = 0; i < days; i++) {
            gildedRose.updateQuality();
        }
        return gildedRose.items[0];
    }

    it('should properly handle Dexterity West', function() {
        name = 'Dexterity West';
        let dexterityWest: Item;

        days = 1;
        dexterityWest = testQuality(name, 10, 20, days);
        expect(dexterityWest.name).to.equal('Dexterity West');
        expect(dexterityWest.sellIn).to.equal(9);
        expect(dexterityWest.quality).to.equal(19);

        days = 30;
        dexterityWest = testQuality(name, 10, 20, days);
        expect(dexterityWest.sellIn).to.equal(-20);
        expect(dexterityWest.quality).to.equal(0);
    });

    it('should properly handle Elixir of the Mongoose', function() {
        name = 'Elixir of the Mongoose';
        let elixirMongoose: Item;

        days = 1;
        elixirMongoose = testQuality(name, 5, 7, days);
        expect(elixirMongoose.name).to.equal('Elixir of the Mongoose');
        expect(elixirMongoose.sellIn).to.equal(4);
        expect(elixirMongoose.quality).to.equal(6);

        days = 30;
        elixirMongoose = testQuality(name, 5, 7, days);
        expect(elixirMongoose.sellIn).to.equal(-25);
        expect(elixirMongoose.quality).to.equal(0);
    });

    it('should properly handle Aged Brie', function() {
        name = 'Aged Brie';
        let agedBrie: Item;

        days = 1;
        agedBrie = testQuality(name, 2, 0, days);
        expect(agedBrie.name).to.equal('Aged Brie');
        expect(agedBrie.sellIn).to.equal(1);
        expect(agedBrie.quality).to.equal(1);

        days = 30;
        agedBrie = testQuality(name, 2, 0, days);
        expect(agedBrie.sellIn).to.equal(-28);
        expect(agedBrie.quality).to.equal(50);
    });

    it('should properly handle Sulfuras', function() {
        name = 'Sulfuras, Hand of Ragnaros';
        let Sulfuras: Item;

        days = 1;
        Sulfuras = testQuality(name, 0, 80, days);
        expect(Sulfuras.name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(Sulfuras.sellIn).to.equal(0);
        expect(Sulfuras.quality).to.equal(80);

        days = 30;
        Sulfuras = testQuality(name, 0, 80, days);
        expect(Sulfuras.sellIn).to.equal(0);
        expect(Sulfuras.quality).to.equal(80);

        days = 1;
        Sulfuras = testQuality(name, -1, 80, days);
        expect(Sulfuras.sellIn).to.equal(-1);
        expect(Sulfuras.quality).to.equal(80);

        days = 30;
        Sulfuras = testQuality(name, -1, 80, days);
        expect(Sulfuras.sellIn).to.equal(-1);
        expect(Sulfuras.quality).to.equal(80);
    });

    it('should properly handle Backstage passes', function() {
        name = 'Backstage passes to a TAFKAL80ETC concert';
        let BackstagePasses: Item;

        days = 1;
        BackstagePasses = testQuality(name, 15, 20, days);
        expect(BackstagePasses.name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(BackstagePasses.sellIn).to.equal(14);
        expect(BackstagePasses.quality).to.equal(21);

        days = 30;
        BackstagePasses = testQuality(name, 15, 20, days);
        expect(BackstagePasses.sellIn).to.equal(-15);
        expect(BackstagePasses.quality).to.equal(0);

        days = 1;
        BackstagePasses = testQuality(name, 10, 49, days);
        expect(BackstagePasses.sellIn).to.equal(9);
        expect(BackstagePasses.quality).to.equal(50);

        days = 30;
        BackstagePasses = testQuality(name, 10, 49, days);
        expect(BackstagePasses.sellIn).to.equal(-20);
        expect(BackstagePasses.quality).to.equal(0);

        days = 1;
        BackstagePasses = testQuality(name, 5, 49, days);
        expect(BackstagePasses.sellIn).to.equal(4);
        expect(BackstagePasses.quality).to.equal(50);

        days = 30;
        BackstagePasses = testQuality(name, 5, 49, days);
        expect(BackstagePasses.sellIn).to.equal(-25);
        expect(BackstagePasses.quality).to.equal(0);
    });

    it('should properly handle Conjured Mana Cake', function() {
        name = 'Conjured Mana Cake';
        let conjured: Item;

        days = 1;
        conjured = testQuality(name, 3, 6, days);
        expect(conjured.name).to.equal('Conjured Mana Cake');
        expect(conjured.sellIn).to.equal(2);
        expect(conjured.quality).to.equal(4);

        days = 30;
        conjured = testQuality(name, 3, 6, days);
        expect(conjured.sellIn).to.equal(-27);
        expect(conjured.quality).to.equal(0);
    });

});
