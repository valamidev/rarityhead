import { CollectionTokens, RarityCalculator } from "..";


describe('RarityCalculator', () => {
    const collection: CollectionTokens[] = [
        {
            "image": "ipfs://QmSNhSutGprVFUE3hxCfytyC71AHQuDhM1faJufZzknm5V/3865.png",
            "tokenId": 3865,
            "name": "Polygon's Flaming Phenix Club #3865",
            "description": "Polygon's Flaming Phenix Club is a prestigious collection of 6,666 stunningly beautiful, fiery, and unique creatures apart of the Phenix Finance Ecosystem.",
            "attributes": [
                {
                    "trait_type": "Legendary",
                    "value": "Cyberpunk"

                }
            ]
        },
        {
            "image": "ipfs://QmSNhSutGprVFUE3hxCfytyC71AHQuDhM1faJufZzknm5V/2463.png",
            "tokenId": 2463,
            "name": "Polygon's Flaming Phenix Club #2463",
            "description": "Polygon's Flaming Phenix Club is a prestigious collection of 6,666 stunningly beautiful, fiery, and unique creatures apart of the Phenix Finance Ecosystem.",
            "attributes": [
                {
                    "trait_type": "Accessory",
                    "value": "Fire"
                },
                {
                    "trait_type": "Aura",
                    "value": "Transparent"
                },
                {
                    "trait_type": "Background",
                    "value": "Dark Clouds"
                },
                {
                    "trait_type": "Eyes",
                    "value": "Normal"
                },
                {
                    "trait_type": "Feather Colors",
                    "value": "Vermillion"
                },
                {
                    "trait_type": "Head",
                    "value": "Aviator Hat"
                },
                {
                    "trait_type": "Head Feathers",
                    "value": "Fire Features"
                },
                {
                    "trait_type": "Mouth",
                    "value": "Deafult"
                },
                {
                    "trait_type": "Neck",
                    "value": "Bandana"
                }
            ]
        },
        {
            "image": "ipfs://QmSNhSutGprVFUE3hxCfytyC71AHQuDhM1faJufZzknm5V/4454.png",
            "tokenId": 4454,
            "name": "Polygon's Flaming Phenix Club #4454",
            "description": "Polygon's Flaming Phenix Club is a prestigious collection of 6,666 stunningly beautiful, fiery, and unique creatures apart of the Phenix Finance Ecosystem.",
            "attributes": [
                {
                    "trait_type": "Accessory",
                    "value": "Earphones"
                },
                {
                    "trait_type": "Aura",
                    "value": "Without Aura"
                },
                {
                    "trait_type": "Background",
                    "value": "Black"
                },
                {
                    "trait_type": "Eyes",
                    "value": "Normal"
                },
                {
                    "trait_type": "Feather Colors",
                    "value": "Yellow Orchre"
                },
                {
                    "trait_type": "Head",
                    "value": "Bowler Hat"
                },
                {
                    "trait_type": "Head Feathers",
                    "value": "Default"
                },
                {
                    "trait_type": "Mouth",
                    "value": "Tongue Out"
                },
                {
                    "trait_type": "Neck",
                    "value": "Without Necklace"
                }
            ]
        }
        // Add more entries here
    ];

    it('should calculate token scores correctly', () => {
        const calculator = new RarityCalculator(collection);
        const tokens = calculator.TokenScore();

        expect(tokens[0].tokenId).toBe(3865);
        expect(tokens[1].tokenId).toBe(2463);
        expect(tokens[2].tokenId).toBe(4454);
    });


});