# rarityhead

RarityHead NFT rarity calculator package optimized for speed

## How fast is this?

```
Intel i5 @ 4 Ghz and Collection with 12 traits

10.000 entry finish in:
~ 40ms
50.000 entry finish in:
~ 150ms
1.000.000 entry finish in:
~ 3000ms
```

## How to use:

```
import { RarityCalculator } from "rarityhead";

const calculator = new RarityCalculator(collection);
const result = calculator.TokenScore();

/*
Output:
{
        // Remain as input
        image: '...',
        tokenId: ...,
        name: "...",
        description: "....",
        attributes: [...],
        // New fields
        tokenScore: 27, // Higher is more rare
        tokenRank: 3 // 1 is the rarest
}
*/

```

## What calculation is it using?

This rarity calculation is based on the "similar" method as used on e.g. raritysniper.com , it is slightly different from OpenRarity what is used on OpenSea, but result are very similar.

Calculation depend on how we handle unique traits or traits with numeric values and other factors like image is a video etc.
