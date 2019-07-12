import {ItemCategory, Cheese, Based, BackstagePass} from "./ItemCategory";

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
        for (let item of this.items) {
            let category: ItemCategory = this.getItemCategory(item);
            category.updateItem(item);
        }
        return this.items;
    }

    private getItemCategory(item: Item) {
        if (item.name === 'Sulfuras, Hand of Ragnaros') {
            return new Based();
        } else if (item.name === 'Aged Brie') {
            return new Cheese()
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            return new BackstagePass();
        } else {
            return new ItemCategory();
        }
    }
}
