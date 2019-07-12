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
            this.updateItem(item);
        }
        return this.items;
    }

    private updateItem(item: Item) {
        this.updateItemQuality(item);
        this.updateItemSellIn(item);
        if (this.hasExpired(item)) {
            this.updateExpired(item);
        }
    }

    private updateItemQuality(item: Item): void {
        if (item.name === 'Aged Brie') {
            this.increaseQuality(item);
        } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.increaseQuality(item);
            if (item.sellIn < 11) {
                this.increaseQuality(item)
            }
            if (item.sellIn < 6) {
                this.increaseQuality(item)
            }
        } else if (item.name != 'Sulfuras, Hand of Ragnaros' && item.quality > 0) {
            this.decreaseQuality(item);
        }
    }

    private increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality = item.quality + 1;
        }
    }

    private decreaseQuality(item: Item) {
        item.quality = item.quality - 1;
    }

    private updateItemSellIn(item: Item): void {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1;
        }
    }

    private hasExpired(item: Item): boolean {
        return item.sellIn < 0;
    }

    private updateExpired(item: Item): void {
        if (item.name == 'Aged Brie') {
            this.increaseQuality(item);
        } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            item.quality = 0;
        } else if (item.name != 'Sulfuras, Hand of Ragnaros' && item.quality > 0) {
            this.decreaseQuality(item);
        }
    }
}
