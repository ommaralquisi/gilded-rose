import {Item} from "./gilded-rose";

export class ItemCategory {
    updateItem(item: Item) {
        this.updateItemQuality(item);
        this.updateItemSellIn(item);
        if (this.hasExpired(item)) {
            this.updateExpired(item);
        }
    }

    increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality = item.quality + 1;
        }
    }

    decreaseQuality(item: Item) {
        item.quality = item.quality - 1;
    }

    hasExpired(item: Item): boolean {
        return item.sellIn < 0;
    }

    updateItemSellIn(item: Item): void {
        item.sellIn = item.sellIn - 1;
    }

    updateExpired(item: Item): void {
        this.decreaseQuality(item);
    }

    updateItemQuality(item: Item): void {
        this.decreaseQuality(item);
    }
}

export class Based extends ItemCategory {
    updateExpired(item: Item): void {
    }

    updateItemSellIn(item: Item): void {
    }

    updateItemQuality(item: Item): void {
    }
}

export class Cheese extends ItemCategory {
    updateExpired(item: Item): void {
        this.increaseQuality(item);
    }

    updateItemQuality(item: Item): void {
        this.increaseQuality(item);
    }
}

export class BackstagePass extends ItemCategory {
    updateExpired(item: Item): void {
        item.quality = 0;
    }

    updateItemQuality(item: Item): void {
        this.increaseQuality(item);
        if (item.sellIn < 11) {
            this.increaseQuality(item)
        }
        if (item.sellIn < 6) {
            this.increaseQuality(item)
        }
    }
}

export class Conjured extends ItemCategory{

}
