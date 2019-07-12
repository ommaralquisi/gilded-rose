import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe("Gilded Rose", function() {
    describe("item after day 1", function() {
        let gildedRose;
        let items: Item[];
        before(function() {
            gildedRose = createItems();
            items = gildedRose.updateQuality();
        });
        after(function() {
            gildedRose = [];
        });

        it("5 Dexterity Vest sellIn should decrease by 1 and quality should decrees by 1", () => {
            expect(items[0].name).to.equal("+5 Dexterity Vest");
            expect(items[0].sellIn).to.equal(9);
            expect(items[0].quality).to.equal(19);
        });
        it("Aged Brie sellIn sellIn should decrease by 1 and quality should increase by 1", function() {
            expect(items[1].name).to.equal("Aged Brie");
            expect(items[1].sellIn).to.equal(1);
            expect(items[1].quality).to.equal(1);
        });

        it("Elixir of the Mongoose sellIn should decrease by 1 and quality should decrees by 1", function() {
            expect(items[2].name).to.equal("Elixir of the Mongoose");
            expect(items[2].sellIn).to.equal(4);
            expect(items[2].quality).to.equal(6);
        });

        it("Sulfuras, Hand of Ragnaros sellIn should stay the same and quality should stay the same", function() {
            expect(items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(items[3].sellIn).to.equal(0);
            expect(items[3].quality).to.equal(80);
        });
    });

    describe("item after day 2", function() {
        let gildedRose;
        let items: Item[];
        before(function() {
            gildedRose = createItems();
            items = gildedRose.updateQuality();
            items = gildedRose.updateQuality();
        });
        after(function() {
            gildedRose = [];
        });
        it("5 Dexterity Vest sellIn should decrease by 1 and quality should decrees by 1", () => {
            expect(items[0].name).to.equal("+5 Dexterity Vest");
            expect(items[0].sellIn).to.equal(8);
            expect(items[0].quality).to.equal(18);
        });
        it("Aged Brie sellIn should decrease by 1 and quality should increase by 1", function() {
            expect(items[1].name).to.equal("Aged Brie");
            expect(items[1].sellIn).to.equal(0);
            expect(items[1].quality).to.equal(2);
        });

        it("Elixir of the Mongoose Elixir of the Mongoose sellIn should decrease by 1 and quality should decrees by 1", function() {
            expect(items[2].name).to.equal("Elixir of the Mongoose");
            expect(items[2].sellIn).to.equal(3);
            expect(items[2].quality).to.equal(5);
        });

        it("Sulfuras, Hand of Ragnaros sellIn should stay the same and quality should stay the same", function() {
            expect(items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(items[3].sellIn).to.equal(0);
            expect(items[3].quality).to.equal(80);
        });
    });
});

const createItems = () => {
    return new GildedRose([
        new Item("+5 Dexterity Vest", 10, 20),
        new Item("Aged Brie", 2, 0),
        new Item("Elixir of the Mongoose", 5, 7),
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
    ]);
};

