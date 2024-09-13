const games = [
    {
        "gameID": "612",
        "steamAppID": null,
        "cheapest": "15.95",
        "cheapestDealID": "0f%2B4gT2VVUn4UcmFzPxXnuqoXKAOYoJ5mpFZRWNyohc%3D",
        "external": "LEGO Batman",
        "internalName": "LEGOBATMAN",
        "thumb": "https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg"
    },
    {
        "gameID": "167613",
        "steamAppID": null,
        "cheapest": "15.95",
        "cheapestDealID": "2XSMlnYtPjLoKI9g2vhZch9deHZ%2BE%2BpL7IoBprkWtgM%3D",
        "external": "LEGO Batman 2",
        "internalName": "LEGOBATMAN2",
        "thumb": "https://cdn.fanatical.com/production/product/400x225/4cf0701e-77bf-4539-bda7-129ab3e81f8b.jpeg"
    },
    {
        "gameID": "167910",
        "steamAppID": "502820",
        "cheapest": "4.99",
        "cheapestDealID": "Vv2BkWU%2FEoIlHNbYtLBFjLJP8noeCUodfp1IXbQJZ6w%3D",
        "external": "Batman: Arkham VR",
        "internalName": "BATMANARKHAMVR",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/502820/capsule_sm_120.jpg?t=1684483128"
    },
    {
        "gameID": "136751",
        "steamAppID": null,
        "cheapest": "49.99",
        "cheapestDealID": "tWdHYhBxTi%2Boen9dGX6I0I%2BfklTJOHB0SykaLcbpsqk%3D",
        "external": "LEGO Batman Trilogy",
        "internalName": "LEGOBATMANTRILOGY",
        "thumb": "https://hb.imgix.net/fec566de2b11fbe22a542086fb3758652f790551.jpg?auto=compress,format&fit=crop&h=84&w=135&s=1159b53389e7c72d23ef72b5c883d725"
    },
    {
        "gameID": "107598",
        "steamAppID": "208650",
        "cheapest": "3.99",
        "cheapestDealID": "%2BRR8iNYa2ZB%2FIhfZml8B1USYGhQVeYAv0Tl8JPkZ8UM%3D",
        "external": "Batman: Arkham Knight",
        "internalName": "BATMANARKHAMKNIGHT",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/capsule_sm_120.jpg?t=1702934528"
    },
    {
        "gameID": "97941",
        "steamAppID": "209000",
        "cheapest": "3.99",
        "cheapestDealID": "6YSaSYFA%2Bjmj9L4HsCBLThDoYEUhWPQ1ssIZ0t2k%2BnU%3D",
        "external": "Batman: Arkham Origins",
        "internalName": "BATMANARKHAMORIGINS",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209000/capsule_sm_120.jpg?t=1681234740"
    },
    {
        "gameID": "198190",
        "steamAppID": null,
        "cheapest": "15.99",
        "cheapestDealID": "DnVEZriqpYWyJoC4CN2%2Fe07Su8RZ61DATyjmfNk%2FwKI%3D",
        "external": "Batman Arkham City GOTY",
        "internalName": "BATMANARKHAMCITYGOTY",
        "thumb": "https://us.gamesplanet.com/acache/15/46/1/us/packshot-92b3116edd0584b61a131fa716d0a766.jpg"
    },
    {
        "gameID": "2425",
        "steamAppID": "21000",
        "cheapest": "2.99",
        "cheapestDealID": "uCO441gpSEGJP6K9x66LeC7yi7ILolaTmvo8lOMCdIc%3D",
        "external": "LEGO Batman: The Videogame",
        "internalName": "LEGOBATMANTHEVIDEOGAME",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/capsule_sm_120.jpg?t=1681923978"
    },
    {
        "gameID": "198317",
        "steamAppID": "320795",
        "cheapest": "8.99",
        "cheapestDealID": "g5zcqhDot%2FhT5s%2BIfHgygYaagbxBH09cSgR5xdyVS5g%3D",
        "external": "Batman: Arkham Collection",
        "internalName": "BATMANARKHAMCOLLECTION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/subs/320795/capsule_sm_120.jpg?t=1636658684"
    },
    {
        "gameID": "199261",
        "steamAppID": null,
        "cheapest": "39.98",
        "cheapestDealID": "vVlFdl8%2BVYZuEwKlNPy7iUrK49IXdqtNSKDgTrhw4sM%3D",
        "external": "Batman Game of the Year Pack",
        "internalName": "BATMANGAMEOFTHEYEARPACK",
        "thumb": "https://images.greenmangaming.com/9c282eceace145df99f76f0d08febdfe/1fbba96f5f8a4ffbb135e320bcc2346c.jpg"
    },
    {
        "gameID": "155074",
        "steamAppID": "498240",
        "cheapest": "5.99",
        "cheapestDealID": "uSsyxlu%2BfwGY%2FuhQ813YGUsHJmjOSI%2B7wANjAMlsbtw%3D",
        "external": "Batman - The Telltale Series",
        "internalName": "BATMANTHETELLTALESERIES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/498240/capsule_sm_120.jpg?t=1686747257"
    },
    {
        "gameID": "126255",
        "steamAppID": "313690",
        "cheapest": "2.99",
        "cheapestDealID": "%2BA3ge6nu7jMLKH1mWUj9rq6VYWRTsENzY%2B08DdMR1FE%3D",
        "external": "LEGO Batman 3: Beyond Gotham",
        "internalName": "LEGOBATMAN3BEYONDGOTHAM",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/313690/capsule_sm_120.jpg?t=1573510385"
    },
    {
        "gameID": "88269",
        "steamAppID": "213330",
        "cheapest": "2.99",
        "cheapestDealID": "PLK%2BInMYUooml%2FkEGWW%2Bw8MluNwy5q9ZSzKcLaciTU4%3D",
        "external": "LEGO Batman 2: DC Super Heroes",
        "internalName": "LEGOBATMAN2DCSUPERHEROES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/213330/capsule_sm_120.jpg?t=1681923916"
    },
    {
        "gameID": "262248",
        "steamAppID": null,
        "cheapest": "14.99",
        "cheapestDealID": "OKARgK1wBMW6W6Mod6tfJ%2FS582x6mmaZzcsrhKNN9zw%3D",
        "external": "HOT WHEELS - Batman Expansion",
        "internalName": "HOTWHEELSBATMANEXPANSION",
        "thumb": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSBatmanExpansion_MilestoneSrl_DLC_S2_1200x1600-eb509c7f016c85c206fb702fe7483ebf"
    },
    {
        "gameID": "214905",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "OTJxScRuO1D3hoLSFDjrWKZKm%2FrcXvSACoDDGijZjrY%3D",
        "external": "Telltale Batman Shadows Mode",
        "internalName": "TELLTALEBATMANSHADOWSMODE",
        "thumb": "https://images.gog-statics.com/e60c4596e9f9a74ca587efcb561b94d0e61e80648bd478a7e74ec8f6cd93c44a_product_tile_117h.webp"
    },
    {
        "gameID": "89107",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "yPE8bI5eH%2FFwI0L7KaEUTfOzYmWLPj%2F76DHrJEnFWeY%3D",
        "external": "Batman: Arkham City GOTY Edition",
        "internalName": "BATMANARKHAMCITYGOTYEDITION",
        "thumb": "https://hb.imgix.net/08abd0c1b25f2ffc652ae7d6537443cee7eccf94.jpg?auto=compress,format&fit=crop&h=84&w=135&s=6ae6339224425ee6e7b7e48ddea68e1d"
    },
    {
        "gameID": "143771",
        "steamAppID": null,
        "cheapest": "5.00",
        "cheapestDealID": "N0aiUBib2nX52PNBU37BWWfDDD%2FhkbcYlPHCQUxmuQ8%3D",
        "external": "Batman: Arkham Knight - Season Pass",
        "internalName": "BATMANARKHAMKNIGHTSEASONPASS",
        "thumb": "https://sttc.gamersgate.com/images/product/batmantm-arkham-knight-season-pass/cover-180-5d9655.jpg"
    },
    {
        "gameID": "214906",
        "steamAppID": null,
        "cheapest": "14.98",
        "cheapestDealID": "A3hjhaYvTj0ZcYKpdslQ4PASVGEwe0Zwfrd61gkWLXE%3D",
        "external": "Telltale Batman Shadows Edition",
        "internalName": "TELLTALEBATMANSHADOWSEDITION",
        "thumb": "https://images.greenmangaming.com/bb1f86edd3be41e3bb8948c00523e5ef/bd6b538c1a7b4f138b862d3c825ff005.jpg"
    },
    {
        "gameID": "87778",
        "steamAppID": null,
        "cheapest": "16.99",
        "cheapestDealID": "uppD8xHMJiqlB88HAnAVeVuInMdQh8eIXN0r2eaC6VI%3D",
        "external": "Batman Arkham Asylum GOTY Edition",
        "internalName": "BATMANARKHAMASYLUMGOTYEDITION",
        "thumb": "https://hb.imgix.net/2a07e9e90c9af53c5120151c9ff4e0aa3771ce99.jpeg?auto=compress,format&fit=crop&h=84&w=135&s=0f42069b4949098d7d589d28a9f66311"
    },
    {
        "gameID": "246183",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "3VlwNpcd%2FDMETYgzpXd1WDzLWBTn9qHFBhtkSUbnCMs%3D",
        "external": "Batman Arkham City: Game of the Year",
        "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAR",
        "thumb": "https://images.greenmangaming.com/3e529338224949f280276fa6a5b75fec/933b9d36ea2d49b4b389899814729378.jpg"
    },
    {
        "gameID": "102510",
        "steamAppID": null,
        "cheapest": "14.99",
        "cheapestDealID": "%2BThIUJIoyxRy9u7NDjuvidcljQ6heP%2FiEmWT%2FkUc5aE%3D",
        "external": "Batman Arkham Origins Season Pass",
        "internalName": "BATMANARKHAMORIGINSSEASONPASS",
        "thumb": "https://images.greenmangaming.com/1c43fd1ff43744c08e854d6ff963c91d/2c8b09a294f4401ab3747b99b6d828f1.jpg"
    },
    {
        "gameID": "221906",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "E7P6Oz50WDEWzQZZjj8b1l6e7C3S0sr43hOQnoDCtqk%3D",
        "external": "Batman - The Enemy Within Shadows Mode",
        "internalName": "BATMANTHEENEMYWITHINSHADOWSMODE",
        "thumb": "https://images.greenmangaming.com/85ad7081bac34a3cb4151daeb6540b50/9e93071c54604454974132c72bab146f.jpg"
    },
    {
        "gameID": "246576",
        "steamAppID": null,
        "cheapest": "29.99",
        "cheapestDealID": "Fi5iMIssmS3PtiA3m42zXTR22B9GvIcr2NE8Csb5kFw%3D",
        "external": "The Telltale Batman Shadows Edition",
        "internalName": "THETELLTALEBATMANSHADOWSEDITION",
        "thumb": "https://cdn1.epicgames.com/f2bfff793b224f6190a394f461c9a4b8/offer/TheTelltaleBatmanShadowsEdition-2560x1440-1ababb36a948b5c732ab85a330787e85.jpg"
    },
    {
        "gameID": "225758",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "PUPfxJiMyt4dbcslwvOVad0v%2BgtknEhy8c90qOpVp9w%3D",
        "external": "Telltale Batman Shadows Mode Bundle",
        "internalName": "TELLTALEBATMANSHADOWSMODEBUNDLE",
        "thumb": "https://hb.imgix.net/bcd6694f5442c730d3b16bdb07e956e52fe17b32.png?auto=compress,format&fit=crop&h=84&w=135&s=748daa2aa04096c42a24db2baf8320ff"
    },
    {
        "gameID": "250727",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "WT%2FMFjw1bIOhh5gs6slTqvwUdrGR2W4wEwyYGlT1G98%3D",
        "external": "Batman: Arkham Asylum Game of the Year",
        "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAR",
        "thumb": "https://images.greenmangaming.com/0c2b457baa0a4e778c31771ead715300/88c9e725b8ff4610a2e1970e0f4a08f1.jpg"
    },
    {
        "gameID": "214907",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "lBW7zyO4rDYgP9peypdBSZC%2B6dp8bUJMtwXlUVt9ghY%3D",
        "external": "Batman Shadows Mode: The Enemy Within",
        "internalName": "BATMANSHADOWSMODETHEENEMYWITHIN",
        "thumb": "https://images.gog-statics.com/70d653226ede85bb70a8d4022a2d02b6c2e2bb9775e87b6a9ca5c30d6ac7f815_product_tile_117h.webp"
    },
    {
        "gameID": "108605",
        "steamAppID": null,
        "cheapest": "8.49",
        "cheapestDealID": "1kwCcJiqxMJJyas58G3FQ4Od%2BbujQrxSF19FRSAmcPE%3D",
        "external": "Batman: Arkham Origins - Cold, Cold Heart",
        "internalName": "BATMANARKHAMORIGINSCOLDCOLDHEART",
        "thumb": "https://images.greenmangaming.com/ba8d4cd6e14e40fca132f346e2d0d3b4/44f1b54092f3498f88b3d7c1df88451b.jpg"
    },
    {
        "gameID": "143817",
        "steamAppID": null,
        "cheapest": "31.88",
        "cheapestDealID": "5Cwq5t9J3RKsRCP3EYIktz2QNQkzl%2FZ9ZvqHJz8N7Ik%3D",
        "external": "Batman: Arkham Knight - Premium Edition",
        "internalName": "BATMANARKHAMKNIGHTPREMIUMEDITION",
        "thumb": "https://images.greenmangaming.com/b47c3b1bc8a5468ab3ada8832be8355c/4de3b472f988463abf6a869bcdda44d7.jpg"
    },
    {
        "gameID": "136749",
        "steamAppID": null,
        "cheapest": "3.00",
        "cheapestDealID": "k1S33Cgc2ot%2BV%2BxJVUyBogaB0PxBSNK5mFY32oX8npU%3D",
        "external": "LEGO Batman 3: Beyond Gotham Season Pass",
        "internalName": "LEGOBATMAN3BEYONDGOTHAMSEASONPASS",
        "thumb": "https://sttc.gamersgate.com/images/product/lego-batman-3-beyond-gotham-season-pass/cover-180-e8ad17.jpg"
    },
    {
        "gameID": "221904",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "oWzY%2BWDZExyELDQrL4xy3kd6P1p%2BOQMQ%2FIOeMaN0QaU%3D",
        "external": "Batman - The Telltale Series Shadows Mode",
        "internalName": "BATMANTHETELLTALESERIESSHADOWSMODE",
        "thumb": "https://images.greenmangaming.com/9cc80f2eb57e4588b159b818fed76288/7afd0ac5cde2472b8fde02a4720dc0ad.jpg"
    },
    {
        "gameID": "89095",
        "steamAppID": "200260",
        "cheapest": "3.99",
        "cheapestDealID": "RPqJV%2BI3Cw5NOoq%2B89MzssePMS%2BQgv2M1OnDzsdR0Jo%3D",
        "external": "Batman Arkham City Game of the Year Edition",
        "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAREDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/capsule_sm_120.jpg?t=1702934622"
    },
    {
        "gameID": "178376",
        "steamAppID": null,
        "cheapest": "34.99",
        "cheapestDealID": "pTeQKzHuRK4TDqHYLY4xolVHA5s%2BVlwXQrlqzqnLCks%3D",
        "external": "LEGO Batman 3: Beyond Gotham Premium Edition",
        "internalName": "LEGOBATMAN3BEYONDGOTHAMPREMIUMEDITION",
        "thumb": "https://images.gog-statics.com/0d81cdadc840148cbd6e1f1a6897bdf9d38994b3045c7a394f8426a82775b9f4_product_tile_117h.webp"
    },
    {
        "gameID": "171102",
        "steamAppID": "675260",
        "cheapest": "5.99",
        "cheapestDealID": "O3R9Lb8H5%2FOde%2BYxvObV4bHESrZT7WooRK6Re4QKtLw%3D",
        "external": "Batman: The Enemy Within - The Telltale Series",
        "internalName": "BATMANTHEENEMYWITHINTHETELLTALESERIES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/675260/capsule_sm_120.jpg?t=1686747613"
    },
    {
        "gameID": "146",
        "steamAppID": "35140",
        "cheapest": "3.99",
        "cheapestDealID": "HR5V6hEl39sGwYodeqwwWuo8dKtKukteV0W9we9pI7I%3D",
        "external": "Batman: Arkham Asylum Game of the Year Edition",
        "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAREDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/35140/capsule_sm_120.jpg?t=1702934705"
    },
    {
        "gameID": "107869",
        "steamAppID": "267490",
        "cheapest": "3.99",
        "cheapestDealID": "6aW%2BsA5i2cZ8pb2wvI0kuSfspYxuaeFKWl2iWWoCU7k%3D",
        "external": "Batman: Arkham Origins Blackgate - Deluxe Edition",
        "internalName": "BATMANARKHAMORIGINSBLACKGATEDELUXEEDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/267490/capsule_sm_120.jpg?t=1651865751"
    },
    {
        "gameID": "250195",
        "steamAppID": null,
        "cheapest": "2.99",
        "cheapestDealID": "A2XgGTglsm6iTyN%2BzxnWqIrErGb1uxYlGt4vUZyeG0k%3D",
        "external": "LEGO DC Super-Villains Batman: The Animated Series Level Pack",
        "internalName": "LEGODCSUPERVILLAINSBATMANTHEANIMATEDSERIESLEVELPACK",
        "thumb": "https://images.gog-statics.com/7b55f49b5d2898986176e45d97391b263cc46b804ce7e8dc81ecb242c72f1e7d_product_tile_117h.webp"
    }
]

const  cheapest = games.filter(function(element, index){
       return Number(element.cheapest) < 5
       
}) 

console.log(cheapest)



const person = {
    firstName:'cat',
    lastName: 'solo',
    age: 99,
    job:'ceo',
    fullName:function(){
        return this.firstName + " " + this.lastName
    
    }

}

console.log(person.fullName())

function A() {
    console.log(person.firstName + " " + person.lastName)
}

function B() {
    console.log(person.firstName + " " + person.lastName)
}





const  gintamaAnime = {

    "data": [
        {
            "mal_id": 9969,
            "url": "https://myanimelist.net/anime/9969/Gintama",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/50361.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/50361t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/50361l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/50361.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/50361t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/50361l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama'"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama (2011)"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂'"
                },
                {
                    "type": "English",
                    "title": "Gintama Season 2"
                },
                {
                    "type": "German",
                    "title": "Gintama Staffel 2"
                },
                {
                    "type": "Spanish",
                    "title": "Gintama Temporada 2"
                },
                {
                    "type": "French",
                    "title": "Gintama Saison 2"
                }
            ],
            "title": "Gintama'",
            "title_english": "Gintama Season 2",
            "title_japanese": "銀魂'",
            "title_synonyms": [
                "Gintama (2011)"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 51,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2011-04-04T00:00:00+00:00",
                "to": "2012-03-26T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 4,
                        "year": 2011
                    },
                    "to": {
                        "day": 26,
                        "month": 3,
                        "year": 2012
                    }
                },
                "string": "Apr 4, 2011 to Mar 26, 2012"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 9.03,
            "scored_by": 241419,
            "rank": 7,
            "popularity": 397,
            "members": 568013,
            "favorites": 8198,
            "synopsis": "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child.\n\nBewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it.\n\nWith even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya team through more of their misadventures in the vibrant, alien-filled world of Edo.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "spring",
            "year": 2011,
            "broadcast": {
                "day": "Mondays",
                "time": "18:00",
                "timezone": "Asia/Tokyo",
                "string": "Mondays at 18:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 643,
                    "type": "anime",
                    "name": "Trinity Sound",
                    "url": "https://myanimelist.net/anime/producer/643/Trinity_Sound"
                },
                {
                    "mal_id": 763,
                    "type": "anime",
                    "name": "Miracle Robo",
                    "url": "https://myanimelist.net/anime/producer/763/Miracle_Robo"
                },
                {
                    "mal_id": 829,
                    "type": "anime",
                    "name": "Studio Jack",
                    "url": "https://myanimelist.net/anime/producer/829/Studio_Jack"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 34096,
            "url": "https://myanimelist.net/anime/34096/Gintama",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/83528.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/3/83528t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/3/83528l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/83528.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/3/83528t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/3/83528l.webp"
                }
            },
            "trailer": {
                "youtube_id": "LOdAAEJiebM",
                "url": "https://www.youtube.com/watch?v=LOdAAEJiebM",
                "embed_url": "https://www.youtube.com/embed/LOdAAEJiebM?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/LOdAAEJiebM/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/LOdAAEJiebM/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/LOdAAEJiebM/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/LOdAAEJiebM/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/LOdAAEJiebM/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama."
                },
                {
                    "type": "Synonym",
                    "title": "Gintama (2017)"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂。"
                },
                {
                    "type": "English",
                    "title": "Gintama Season 5"
                }
            ],
            "title": "Gintama.",
            "title_english": "Gintama Season 5",
            "title_japanese": "銀魂。",
            "title_synonyms": [
                "Gintama (2017)"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2017-01-09T00:00:00+00:00",
                "to": "2017-03-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 1,
                        "year": 2017
                    },
                    "to": {
                        "day": 27,
                        "month": 3,
                        "year": 2017
                    }
                },
                "string": "Jan 9, 2017 to Mar 27, 2017"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.98,
            "scored_by": 148849,
            "rank": 14,
            "popularity": 775,
            "members": 321187,
            "favorites": 2750,
            "synopsis": "After joining the resistance against the bakufu, Gintoki and the gang are in hiding, along with Katsura and his Joui rebels. The Yorozuya is soon approached by Nobume Imai and two members of the Kiheitai, who explain that the Harusame pirates have turned against 7th Division Captain Kamui and their former ally Takasugi. The Kiheitai present Gintoki with a job: find Takasugi, who has been missing since his ship was ambushed in a Harusame raid. Nobume also makes a stunning revelation regarding the Tendoushuu, a secret organization pulling the strings of numerous factions, and their leader Utsuro, the shadowy figure with an uncanny resemblance to Gintoki's former teacher.\n\nHitching a ride on Sakamoto's space ship, the Yorozuya and Katsura set out for Rakuyou, Kagura's home planet, where the various factions have gathered and tensions are brewing. Long-held grudges, political infighting, and the Tendoushuu's sinister overarching plan finally culminate into a massive, decisive battle on Rakuyou.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2017,
            "broadcast": {
                "day": "Mondays",
                "time": "01:35",
                "timezone": "Asia/Tokyo",
                "string": "Mondays at 01:35 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 918,
            "url": "https://myanimelist.net/anime/918/Gintama",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/73274t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/73274l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/73274.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/73274t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/73274l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama"
                },
                {
                    "type": "Synonym",
                    "title": "Gin Tama"
                },
                {
                    "type": "Synonym",
                    "title": "Silver Soul"
                },
                {
                    "type": "Synonym",
                    "title": "Yorinuki Gintama-san"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂"
                },
                {
                    "type": "English",
                    "title": "Gintama"
                }
            ],
            "title": "Gintama",
            "title_english": "Gintama",
            "title_japanese": "銀魂",
            "title_synonyms": [
                "Gin Tama",
                "Silver Soul",
                "Yorinuki Gintama-san"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 201,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2006-04-04T00:00:00+00:00",
                "to": "2010-03-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 4,
                        "year": 2006
                    },
                    "to": {
                        "day": 25,
                        "month": 3,
                        "year": 2010
                    }
                },
                "string": "Apr 4, 2006 to Mar 25, 2010"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.93,
            "scored_by": 401705,
            "rank": 17,
            "popularity": 143,
            "members": 1084666,
            "favorites": 59436,
            "synopsis": "Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan's surrender to powerful aliens known as the \"Amanto,\" those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public. \n\nEnter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways. \n\nAssisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people's heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-changing world of Edo.\n\n[Written by MAL Rewrite]",
            "background": "Gintama adapts chapters 1-292 of original manga. Several games based on Gintama have been released on a variety of platforms, such as the PlayStation 2, PlayStation Portable, and Nintendo DS. Characters from the series have also appeared in Weekly Shounen Jump's crossover titles, including Jump Super Stars and Jump Ultimate Stars. The series received high-definition reruns of older episodes by TV Tokyo from April 5, 2010 to March 28, 2011 under the name Yorinuki Gintama-san, which included 51 selected episodes as well as four new opening and ending songs. Gintama received a live-action movie adaptation that premiered on July 14, 2017. Shortly after the film's release, a sequel was announced in November 2017 and was later released on August 17, 2018.",
            "season": "spring",
            "year": 2006,
            "broadcast": {
                "day": "Thursdays",
                "time": "18:00",
                "timezone": "Asia/Tokyo",
                "string": "Thursdays at 18:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 643,
                    "type": "anime",
                    "name": "Trinity Sound",
                    "url": "https://myanimelist.net/anime/producer/643/Trinity_Sound"
                },
                {
                    "mal_id": 645,
                    "type": "anime",
                    "name": "Audio Highs",
                    "url": "https://myanimelist.net/anime/producer/645/Audio_Highs"
                },
                {
                    "mal_id": 763,
                    "type": "anime",
                    "name": "Miracle Robo",
                    "url": "https://myanimelist.net/anime/producer/763/Miracle_Robo"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https://myanimelist.net/anime/producer/376/Sentai_Filmworks"
                },
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
                }
            ],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 28977,
            "url": "https://myanimelist.net/anime/28977/Gintama°",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/3/72078t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/3/72078l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/72078.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/3/72078t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/3/72078l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama°"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama' (2015)"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂°"
                },
                {
                    "type": "English",
                    "title": "Gintama Season 4"
                },
                {
                    "type": "German",
                    "title": "Gintama Season 4"
                },
                {
                    "type": "Spanish",
                    "title": "Gintama Temporada 4"
                },
                {
                    "type": "French",
                    "title": "Gintama Saison 4"
                }
            ],
            "title": "Gintama°",
            "title_english": "Gintama Season 4",
            "title_japanese": "銀魂°",
            "title_synonyms": [
                "Gintama' (2015)"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 51,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2015-04-08T00:00:00+00:00",
                "to": "2016-03-30T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 8,
                        "month": 4,
                        "year": 2015
                    },
                    "to": {
                        "day": 30,
                        "month": 3,
                        "year": 2016
                    }
                },
                "string": "Apr 8, 2015 to Mar 30, 2016"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 9.06,
            "scored_by": 255713,
            "rank": 4,
            "popularity": 342,
            "members": 643783,
            "favorites": 16794,
            "synopsis": "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "spring",
            "year": 2015,
            "broadcast": {
                "day": "Wednesdays",
                "time": "18:00",
                "timezone": "Asia/Tokyo",
                "string": "Wednesdays at 18:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                },
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
                }
            ],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 15417,
            "url": "https://myanimelist.net/anime/15417/Gintama__Enchousen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1452/123686.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1452/123686t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1452/123686l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1452/123686.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1452/123686t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1452/123686l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama': Enchousen"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama' (2012)"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama' Overdrive"
                },
                {
                    "type": "Synonym",
                    "title": "Kintama"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂' 延長戦"
                },
                {
                    "type": "English",
                    "title": "Gintama: Enchousen"
                }
            ],
            "title": "Gintama': Enchousen",
            "title_english": "Gintama: Enchousen",
            "title_japanese": "銀魂' 延長戦",
            "title_synonyms": [
                "Gintama' (2012)",
                "Gintama' Overdrive",
                "Kintama"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2012-10-04T00:00:00+00:00",
                "to": "2013-03-28T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 10,
                        "year": 2012
                    },
                    "to": {
                        "day": 28,
                        "month": 3,
                        "year": 2013
                    }
                },
                "string": "Oct 4, 2012 to Mar 28, 2013"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 9.02,
            "scored_by": 168143,
            "rank": 10,
            "popularity": 750,
            "members": 331557,
            "favorites": 3055,
            "synopsis": "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character?\n\nIn addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2012,
            "broadcast": {
                "day": "Thursdays",
                "time": "18:00",
                "timezone": "Asia/Tokyo",
                "string": "Thursdays at 18:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                },
                {
                    "mal_id": 1406,
                    "type": "anime",
                    "name": "Miracle Bus",
                    "url": "https://myanimelist.net/anime/producer/1406/Miracle_Bus"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 15335,
            "url": "https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/51723.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/51723t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/51723l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/51723.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/51723t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/51723l.webp"
                }
            },
            "trailer": {
                "youtube_id": "UhJM5rVqaF8",
                "url": "https://www.youtube.com/watch?v=UhJM5rVqaF8",
                "embed_url": "https://www.youtube.com/embed/UhJM5rVqaF8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/UhJM5rVqaF8/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/UhJM5rVqaF8/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/UhJM5rVqaF8/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/UhJM5rVqaF8/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/UhJM5rVqaF8/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: The Final Chapter - Be Forever Yorozuya"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama Movie 2"
                },
                {
                    "type": "Japanese",
                    "title": "劇場版 銀魂 完結篇 万事屋よ永遠なれ"
                },
                {
                    "type": "English",
                    "title": "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya"
                },
                {
                    "type": "German",
                    "title": "Gintama the Movie 2"
                }
            ],
            "title": "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
            "title_english": "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya",
            "title_japanese": "劇場版 銀魂 完結篇 万事屋よ永遠なれ",
            "title_synonyms": [
                "Gintama: The Final Chapter - Be Forever Yorozuya",
                "Gintama Movie 2"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2013-07-06T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 7,
                        "year": 2013
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jul 6, 2013"
            },
            "duration": "1 hr 50 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.9,
            "scored_by": 137239,
            "rank": 21,
            "popularity": 1021,
            "members": 244782,
            "favorites": 2108,
            "synopsis": "When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the \"White Plague\" has ravished the world's population. It turns out that the movie pirate wasn't a pirate after all—it was an android time machine, and Gintoki has been hurtled five years into the future! Shinpachi and Kagura, his Yorozuya cohorts, have had a falling out and are now battle-hardened solo vigilantes and he himself has been missing for years, disappearing without a trace after scribbling a strange message in his journal.\n\nSetting out in the disguise given to him by the android time machine, Gintoki haphazardly reunites the Yorozuya team to investigate the White Plague, and soon discovers that the key to saving the future lies in the darkness of his own past. Determined to confront a powerful foe, he makes an important discovery—with a ragtag band of friends and allies at his side, he doesn't have to fight alone.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 230,
                    "type": "anime",
                    "name": "Bandai",
                    "url": "https://myanimelist.net/anime/producer/230/Bandai"
                },
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https://myanimelist.net/anime/producer/415/Warner_Bros_Japan"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                },
                {
                    "mal_id": 78,
                    "type": "anime",
                    "name": "Time Travel",
                    "url": "https://myanimelist.net/anime/genre/78/Time_Travel"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 35843,
            "url": "https://myanimelist.net/anime/35843/Gintama__Porori-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/88325.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/11/88325t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/11/88325l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/88325.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/11/88325t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/11/88325l.webp"
                }
            },
            "trailer": {
                "youtube_id": "sznFcl1O3GI",
                "url": "https://www.youtube.com/watch?v=sznFcl1O3GI",
                "embed_url": "https://www.youtube.com/embed/sznFcl1O3GI?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/sznFcl1O3GI/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/sznFcl1O3GI/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/sznFcl1O3GI/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/sznFcl1O3GI/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/sznFcl1O3GI/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama.: Porori-hen"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂。ポロリ編"
                },
                {
                    "type": "English",
                    "title": "Gintama.: Slip Arc"
                },
                {
                    "type": "German",
                    "title": "Gintama Staffel 6"
                },
                {
                    "type": "Spanish",
                    "title": "Gintama Temporada 6"
                },
                {
                    "type": "French",
                    "title": "Gintama Saison 6"
                }
            ],
            "title": "Gintama.: Porori-hen",
            "title_english": "Gintama.: Slip Arc",
            "title_japanese": "銀魂。ポロリ編",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2017-10-02T00:00:00+00:00",
                "to": "2017-12-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 2,
                        "month": 10,
                        "year": 2017
                    },
                    "to": {
                        "day": 25,
                        "month": 12,
                        "year": 2017
                    }
                },
                "string": "Oct 2, 2017 to Dec 25, 2017"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.52,
            "scored_by": 104716,
            "rank": 128,
            "popularity": 1205,
            "members": 206081,
            "favorites": 918,
            "synopsis": "Following the grim events of Iga, Kokujou Island, Rakuyou, and multiple fruitless confrontations with the Tenshouin Naraku and Tendoshuu, Gintama.: Porori-hen takes its viewers on a trip down memory lane to when Yorozuya were mostly doing what they did best—odd jobs. The great space hunter Umibouzu has returned to Edo and is livid when he finds out that his daughter Kagura has a boyfriend. He blames Gintoki for being an incompetent guardian, but has the time finally come for him to let go of his daughter?\n\nBack with shameless parodies, risqué humor, and lively camaraderie, Gintoki, Kagura, and Shinpachi are faced with unforeseen situations that manage to be both hilarious and emotionally stirring.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2017,
            "broadcast": {
                "day": "Mondays",
                "time": "01:35",
                "timezone": "Asia/Tokyo",
                "string": "Mondays at 01:35 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 37491,
            "url": "https://myanimelist.net/anime/37491/Gintama__Shirogane_no_Tamashii-hen_-_Kouhan-sen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1776/96566.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1776/96566t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1776/96566l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1776/96566.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1776/96566t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1776/96566l.webp"
                }
            },
            "trailer": {
                "youtube_id": "E2rzD37MCSg",
                "url": "https://www.youtube.com/watch?v=E2rzD37MCSg",
                "embed_url": "https://www.youtube.com/embed/E2rzD37MCSg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/E2rzD37MCSg/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/E2rzD37MCSg/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/E2rzD37MCSg/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/E2rzD37MCSg/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/E2rzD37MCSg/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama.: Silver Soul Arc 2"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂. 銀ノ魂篇 後半戦"
                },
                {
                    "type": "English",
                    "title": "Gintama.: Silver Soul Arc - Second Half War"
                }
            ],
            "title": "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
            "title_english": "Gintama.: Silver Soul Arc - Second Half War",
            "title_japanese": "銀魂. 銀ノ魂篇 後半戦",
            "title_synonyms": [
                "Gintama.: Silver Soul Arc 2"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 14,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-07-09T00:00:00+00:00",
                "to": "2018-10-08T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 7,
                        "year": 2018
                    },
                    "to": {
                        "day": 8,
                        "month": 10,
                        "year": 2018
                    }
                },
                "string": "Jul 9, 2018 to Oct 8, 2018"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.88,
            "scored_by": 98065,
            "rank": 24,
            "popularity": 1221,
            "members": 203943,
            "favorites": 1053,
            "synopsis": "Following the temporary retreat of the Altana Liberation Army from the Kabuki District, the state of the war has seemingly improved. However, as the Oniwaban, Shinsengumi, and residents of the district combat the army's remnants, Edo's greatest inventor Gengai Hiraga is abducted. Responsible for causing the enemy's withdrawal by rendering their weapons useless, Gengai's nanomachine virus is now at risk of being shut down.\n\nMeanwhile, a laser capable of obliterating a planet is activated in Earth's orbit on the Liberation Army's mother ship. Another battle ensues when Shinsuke Takasugi and the rest of the Kiheitai arrive on the vessel to stop the weapon from firing. Forced to fight a war on two fronts, the Yorozuya and their allies must prevail on both sides to save Edo and the rest of the world.\n\n[Written by MAL Rewrite]",
            "background": "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen was released on Blu-ray and DVD from October 24, 2018, to February 27, 2019.",
            "season": "summer",
            "year": 2018,
            "broadcast": {
                "day": "Mondays",
                "time": "01:35",
                "timezone": "Asia/Tokyo",
                "string": "Mondays at 01:35 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 7472,
            "url": "https://myanimelist.net/anime/7472/Gintama_Movie_1__Shinyaku_Benizakura-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/28803.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/28803t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/28803l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/28803.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/28803t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/28803l.webp"
                }
            },
            "trailer": {
                "youtube_id": "ZHAZCsDXecE",
                "url": "https://www.youtube.com/watch?v=ZHAZCsDXecE",
                "embed_url": "https://www.youtube.com/embed/ZHAZCsDXecE?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/ZHAZCsDXecE/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/ZHAZCsDXecE/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/ZHAZCsDXecE/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/ZHAZCsDXecE/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/ZHAZCsDXecE/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama Movie 1: Shinyaku Benizakura-hen"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Benizakura Arc - A New Retelling"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama Movie: Crimson Sakura Chapter New Edition"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Shin-yaku Benizakura-hen"
                },
                {
                    "type": "Japanese",
                    "title": "劇場版 銀魂 新訳紅桜篇"
                },
                {
                    "type": "English",
                    "title": "Gintama: The Movie"
                },
                {
                    "type": "German",
                    "title": "Gintama: Der Film"
                }
            ],
            "title": "Gintama Movie 1: Shinyaku Benizakura-hen",
            "title_english": "Gintama: The Movie",
            "title_japanese": "劇場版 銀魂 新訳紅桜篇",
            "title_synonyms": [
                "Gintama: Benizakura Arc - A New Retelling",
                "Gintama Movie: Crimson Sakura Chapter New Edition",
                "Gintama: Shin-yaku Benizakura-hen"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2010-04-24T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 24,
                        "month": 4,
                        "year": 2010
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 24, 2010"
            },
            "duration": "1 hr 35 min",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.52,
            "scored_by": 96798,
            "rank": 127,
            "popularity": 1458,
            "members": 167170,
            "favorites": 617,
            "synopsis": "Gintoki and his Yorozuya friends (or rather, employees suffering under labor violations), Shinpachi and Kagura, continue to scrape by in the futuristic, alien-infested city of Edo. They take on whatever work they can find while trying not to get involved in anything too dangerous. But when Katsura, the leader of the Joui rebels and Gintoki's long-time acquaintance, disappears after being brutally attacked by an unknown assassin, Shinpachi and Kagura begin an investigation into his whereabouts and the identity of the assailant. Meanwhile, Gintoki takes on a seemingly unrelated job: the blacksmith Tetsuya requests that Gin recover a strange and powerful sword called the Benizakura which was recently stolen.\n\nAs the two investigations gradually intersect, the Yorozuya crew find themselves in the midst of a major conspiracy that hinges on the sinister nature of the Benizakura sword. Gintoki resolves to take the fight directly to the enemy headquarters, and together with a few unexpected allies, sets out on one of his most perilous jobs yet.\n\n[Written by MAL Rewrite]",
            "background": "Gintama Movie 1: Shinyaku Benizakura-hen is a remake of episodes 58-61 of Gintama.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 230,
                    "type": "anime",
                    "name": "Bandai",
                    "url": "https://myanimelist.net/anime/producer/230/Bandai"
                },
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https://myanimelist.net/anime/producer/415/Warner_Bros_Japan"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https://myanimelist.net/anime/producer/376/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 6945,
            "url": "https://myanimelist.net/anime/6945/Gintama__Shiroyasha_Koutan",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/16161.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/6/16161t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/6/16161l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/16161.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/6/16161t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/6/16161l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama: Shiroyasha Koutan"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Jump Anime Tour 2008 Special"
                },
                {
                    "type": "Japanese",
                    "title": "ジャンプアニメツアー 2008 白夜叉降誕"
                },
                {
                    "type": "English",
                    "title": "Gintama: Jump Festa 2008 Special"
                }
            ],
            "title": "Gintama: Shiroyasha Koutan",
            "title_english": "Gintama: Jump Festa 2008 Special",
            "title_japanese": "ジャンプアニメツアー 2008 白夜叉降誕",
            "title_synonyms": [
                "Gintama: Jump Anime Tour 2008 Special"
            ],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2008-09-21T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 21,
                        "month": 9,
                        "year": 2008
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Sep 21, 2008"
            },
            "duration": "10 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.35,
            "scored_by": 35037,
            "rank": 221,
            "popularity": 2658,
            "members": 71368,
            "favorites": 93,
            "synopsis": "According to Aniplex, a 10min short anime of Gintama \"Shiroyasha Koutan\" will be released on September 30th. It was shown at Jump Super Anime Tour 2008 and had never been released as a DVD.\n\nIt's a trailer of an imaginary Gintama movie. Gintama OVA shown at Jump Anime Tour '05 is also included in the DVD.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 36838,
            "url": "https://myanimelist.net/anime/36838/Gintama__Shirogane_no_Tamashii-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/89603.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/89603t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/89603l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/89603.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/89603t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/89603l.webp"
                }
            },
            "trailer": {
                "youtube_id": "vcb-D3FlaCg",
                "url": "https://www.youtube.com/watch?v=vcb-D3FlaCg",
                "embed_url": "https://www.youtube.com/embed/vcb-D3FlaCg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/vcb-D3FlaCg/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/vcb-D3FlaCg/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/vcb-D3FlaCg/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/vcb-D3FlaCg/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/vcb-D3FlaCg/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama.: Shirogane no Tamashii-hen"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂. 銀ノ魂篇"
                },
                {
                    "type": "English",
                    "title": "Gintama.: Silver Soul Arc"
                }
            ],
            "title": "Gintama.: Shirogane no Tamashii-hen",
            "title_english": "Gintama.: Silver Soul Arc",
            "title_japanese": "銀魂. 銀ノ魂篇",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-01-08T00:00:00+00:00",
                "to": "2018-03-26T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 8,
                        "month": 1,
                        "year": 2018
                    },
                    "to": {
                        "day": 26,
                        "month": 3,
                        "year": 2018
                    }
                },
                "string": "Jan 8, 2018 to Mar 26, 2018"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.81,
            "scored_by": 106839,
            "rank": 32,
            "popularity": 1158,
            "members": 217680,
            "favorites": 1181,
            "synopsis": "After the fierce battle on Rakuyou, the untold past and true goal of the immortal Naraku leader, Utsuro, are finally revealed. By corrupting the Altana reserves of several planets, Utsuro has successfully triggered the intervention of the Tendoshuu’s greatest enemy: the Altana Liberation Army. With Earth as the main battleground in this interplanetary war, Utsuro's master plan to destroy the planet—and himself—is nearly complete. \n\nAn attack on the O-Edo Central Terminal marks the beginning of the final battle to take back the land of the samurai. With the Yorozuya nowhere in sight, the bakufu all but collapsed, and the Shogun missing, the people are left completely helpless as the Liberation Army begins pillaging Edo in the name of freeing them from the Tendoshuu's rule. \n\nCaught in the crossfire between two equally imposing forces, can Gintoki, Kagura, Shinpachi, and the former students of Shouyou Yoshida put aside their differences and unite their allies to protect what they hold dear?\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2018,
            "broadcast": {
                "day": "Mondays",
                "time": "01:35",
                "timezone": "Asia/Tokyo",
                "string": "Mondays at 01:35 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 39486,
            "url": "https://myanimelist.net/anime/39486/Gintama__The_Final",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1245/116760.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1245/116760t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1245/116760l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1245/116760.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1245/116760t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1245/116760l.webp"
                }
            },
            "trailer": {
                "youtube_id": "Zn1filVUyf8",
                "url": "https://www.youtube.com/watch?v=Zn1filVUyf8",
                "embed_url": "https://www.youtube.com/embed/Zn1filVUyf8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/Zn1filVUyf8/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/Zn1filVUyf8/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/Zn1filVUyf8/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/Zn1filVUyf8/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/Zn1filVUyf8/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama: The Final"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂 THE FINAL"
                },
                {
                    "type": "English",
                    "title": "Gintama: The Very Final"
                },
                {
                    "type": "German",
                    "title": "N/A"
                }
            ],
            "title": "Gintama: The Final",
            "title_english": "Gintama: The Very Final",
            "title_japanese": "銀魂 THE FINAL",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-01-08T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 8,
                        "month": 1,
                        "year": 2021
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jan 8, 2021"
            },
            "duration": "1 hr 44 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 9.04,
            "scored_by": 75009,
            "rank": 6,
            "popularity": 1536,
            "members": 156732,
            "favorites": 4348,
            "synopsis": "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo.\n\nLater, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo—and the rest of the world—hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures.\n\n[Written by MAL Rewrite]",
            "background": "As of March 2021, Gintama: The Final has earned a franchise record of 1.85 billion yen (16.94 million USD) and debuted at No. 1 at the Japanese box office. The film concludes the Gintama anime series, adapting chapters 699-704 of the original manga with new story elements.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                },
                {
                    "mal_id": 230,
                    "type": "anime",
                    "name": "Bandai",
                    "url": "https://myanimelist.net/anime/producer/230/Bandai"
                },
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https://myanimelist.net/anime/producer/415/Warner_Bros_Japan"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 531,
                    "type": "anime",
                    "name": "Eleven Arts",
                    "url": "https://myanimelist.net/anime/producer/531/Eleven_Arts"
                }
            ],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 2951,
            "url": "https://myanimelist.net/anime/2951/Gintama__Nanigoto_mo_Saisho_ga_Kanjin_nanode_Tashou_Senobisuru_Kurai_ga_Choudoyoi",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1897/139500.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1897/139500t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1897/139500l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1897/139500.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1897/139500t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1897/139500l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama: Nanigoto mo Saisho ga Kanjin nanode Tashou Senobisuru Kurai ga Choudoyoi"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂〜何事も最初が肝心なので多少背伸びするくらいが丁度良い〜"
                },
                {
                    "type": "English",
                    "title": "Gintama: Jump Festa 2005 Special"
                }
            ],
            "title": "Gintama: Nanigoto mo Saisho ga Kanjin nanode Tashou Senobisuru Kurai ga Choudoyoi",
            "title_english": "Gintama: Jump Festa 2005 Special",
            "title_japanese": "銀魂〜何事も最初が肝心なので多少背伸びするくらいが丁度良い〜",
            "title_synonyms": [],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2005-09-24T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 24,
                        "month": 9,
                        "year": 2005
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Sep 24, 2005"
            },
            "duration": "32 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.08,
            "scored_by": 30471,
            "rank": 524,
            "popularity": 2993,
            "members": 57367,
            "favorites": 73,
            "synopsis": "Due to the arrival of aliens called the \"Amanto,\" the samurai of feudal Japan have fallen into misery and despair. Denied their swords and stature, they are now treated as an object of pity and utter disregard while the Amanto mercilessly terrorizes the country.\n\nTo restore the reputation of the samurai, the Anti-Foreigner Faction leader Kotarou Katsura resolves to eradicate the Amanto—even if he must resort to violent methods. With a giant mecha at his disposal, he plans to initiate an attack against the Shinsengumi, an army of skillful samurai dedicated to protecting the peace of Edo.\n\nMeanwhile, Yorozuya owner Gintoki Sakata and his friends are out to see the cherry blossoms. However, they are interrupted when the Shinsengumi show up, claiming Gintoki has stolen their spot for flower-viewing. Quickly spiraling into a frenzied quarrel, the two groups settle the fight through a game of rock-paper-scissors—albeit with rather brutal methods.\n\n[Written by MAL Rewrite]",
            "background": "Gintama: Nanigoto mo Saiyo ga Kanjin nano de Tasho Senobisuru Kurai ga Choudoyoi was featured at the 2005 Jump Festa Anime Tour.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 645,
                    "type": "anime",
                    "name": "Audio Highs",
                    "url": "https://myanimelist.net/anime/producer/645/Audio_Highs"
                },
                {
                    "mal_id": 763,
                    "type": "anime",
                    "name": "Miracle Robo",
                    "url": "https://myanimelist.net/anime/producer/763/Miracle_Robo"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Mecha",
                    "url": "https://myanimelist.net/anime/genre/18/Mecha"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 32366,
            "url": "https://myanimelist.net/anime/32366/Gintama°__Aizome_Kaori-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1962/133573.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1962/133573t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1962/133573l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1962/133573.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1962/133573t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1962/133573l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama°: Aizome Kaori-hen"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama° OVA"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂　愛染香篇"
                },
                {
                    "type": "English",
                    "title": "Gintama: Love Incense Arc"
                }
            ],
            "title": "Gintama°: Aizome Kaori-hen",
            "title_english": "Gintama: Love Incense Arc",
            "title_japanese": "銀魂　愛染香篇",
            "title_synonyms": [
                "Gintama° OVA"
            ],
            "type": "OVA",
            "source": "Manga",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2016-08-04T00:00:00+00:00",
                "to": "2016-11-04T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 8,
                        "year": 2016
                    },
                    "to": {
                        "day": 4,
                        "month": 11,
                        "year": 2016
                    }
                },
                "string": "Aug 4, 2016 to Nov 4, 2016"
            },
            "duration": "25 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.38,
            "scored_by": 46192,
            "rank": 206,
            "popularity": 2340,
            "members": 87353,
            "favorites": 139,
            "synopsis": "The red-light district, Yoshiwara, is suddenly taken over by \"Aizen Kou,\" an incense that has the ability to make anyone fall in love with the first person they see. Having been outlawed for its strong potency, the love drug was thought to have disappeared from the red-light district for good; however, it seems to have found its way back inside Yoshiwara's walls and now has the entire district under its influence.\n\nOf those affected is the cold-hearted Hyakka captain, Tsukuyo, and the first person she sees after inhaling the smoke is none other than the brazen Yorozuya leader, Gintoki Sakata. Unbeknownst to everyone else though, she was already attracted to Gintoki. With those hidden feelings now intensified, Tsukuyo must overcome her afflictions and work with the Yorozuya to return everyone back to normal. \n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 21899,
            "url": "https://myanimelist.net/anime/21899/Gintama__Yorinuki_Gintama-san_on_Theater_2D",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1172/90571.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1172/90571t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1172/90571l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1172/90571.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1172/90571t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1172/90571l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama: Yorinuki Gintama-san on Theater 2D"
                },
                {
                    "type": "Synonym",
                    "title": "Shinsengumi Douran Hen"
                },
                {
                    "type": "Synonym",
                    "title": "Kabuki Chou Shitennou Hen"
                },
                {
                    "type": "Synonym",
                    "title": "Kabuki-chou Devas Hen"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: The Best of Gintama on Theater 2D"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂 よりぬき銀魂さんオンシアター2D"
                }
            ],
            "title": "Gintama: Yorinuki Gintama-san on Theater 2D",
            "title_english": null,
            "title_japanese": "銀魂 よりぬき銀魂さんオンシアター2D",
            "title_synonyms": [
                "Shinsengumi Douran Hen",
                "Kabuki Chou Shitennou Hen",
                "Kabuki-chou Devas Hen",
                "Gintama: The Best of Gintama on Theater 2D"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2012-08-26T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 26,
                        "month": 8,
                        "year": 2012
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Aug 26, 2012"
            },
            "duration": "1 hr 36 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.42,
            "scored_by": 17240,
            "rank": 172,
            "popularity": 3403,
            "members": 45230,
            "favorites": 44,
            "synopsis": "Demonic Vice-Commander of the Shinsengumi, Toushirou Hijikata, acquires a cursed sword—one which completely rewrites his personality, morphing him from a hard-boiled, no-nonsense cop into a hopeless otaku. As he struggles to break the curse, an ambitious new member of the police force, Itou Kamotarou, seizes the opportunity to depose Hijikata in his bid for power within the organization. However, Itou's scheme is revealed to be more devious than anyone imagined, and the very existence of the Shinsengumi is thrown into peril.\n\nIn another time and place, the Yorozuya squad is suddenly greeted by a potential new recruit. Before them is a mysterious young woman named Pirako Doromizu who hides a penchant for extreme violence behind her smiling, enthusiastic exterior. However, unbeknownst to Gintoki and the others, Pirako has strong ties to one of the ruling figures of the Kabuki district of Edo, and her arrival sets off a chain reaction that throws the inhabitants of the district into a civil war.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 9735,
            "url": "https://myanimelist.net/anime/9735/Gintama__Shinyaku_Benizakura-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/26966.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/26966t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/26966l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/26966.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/26966t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/26966l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama: Shinyaku Benizakura-hen"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Shinyaku Benizakura-hen OVA"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Benizakura Arc - A New Retelling Special"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama Movie: Crimson Sakura Chapter New Edition"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Shin-yaku Benizakura-hen"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂 新訳紅桜篇"
                }
            ],
            "title": "Gintama: Shinyaku Benizakura-hen",
            "title_english": null,
            "title_japanese": "銀魂 新訳紅桜篇",
            "title_synonyms": [
                "Gintama: Shinyaku Benizakura-hen OVA",
                "Gintama: Benizakura Arc - A New Retelling Special",
                "Gintama Movie: Crimson Sakura Chapter New Edition",
                "Gintama: Shin-yaku Benizakura-hen"
            ],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2010-12-15T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 12,
                        "year": 2010
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 15, 2010"
            },
            "duration": "11 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.28,
            "scored_by": 19802,
            "rank": 289,
            "popularity": 3425,
            "members": 44744,
            "favorites": 51,
            "synopsis": "It's the running gag of Ben Johnson episode where animation staff reuse the New Years footage; Yorozuya would sit around the kotatsu eating a bowl of tangerines. They discuss elaborate subjects, Shinpachi complains about reusing animation footage, and then Gin-chan always ending the gag with a pointless announcement.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 25313,
            "url": "https://myanimelist.net/anime/25313/Gintama__Futon_ni_Haitte_kara_Buki_Nokoshi_ni_Kizuite_Neru_ni_Nerenai_Toki_mo_Aru",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1327/110925.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1327/110925t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1327/110925l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1327/110925.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1327/110925t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1327/110925l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama': Futon ni Haitte kara Buki Nokoshi ni Kizuite Neru ni Nerenai Toki mo Aru"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Jump Festa 2014 Special"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama OAD"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama OVA"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂 〜布団に入ってから拭き残しに気付いて寝るに寝れない時もある〜"
                }
            ],
            "title": "Gintama': Futon ni Haitte kara Buki Nokoshi ni Kizuite Neru ni Nerenai Toki mo Aru",
            "title_english": null,
            "title_japanese": "銀魂 〜布団に入ってから拭き残しに気付いて寝るに寝れない時もある〜",
            "title_synonyms": [
                "Gintama: Jump Festa 2014 Special",
                "Gintama OAD",
                "Gintama OVA"
            ],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2015-04-03T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 4,
                        "year": 2015
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 3, 2015"
            },
            "duration": "24 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.12,
            "scored_by": 18817,
            "rank": 478,
            "popularity": 3534,
            "members": 42134,
            "favorites": 74,
            "synopsis": "Bundled with limited edition of the 58th Gintama manga volume.\n\nThe tagline for the bundled anime reads, \"It's time for all the Yorozuya members ...to wake up just one more time.\"\n\n(Source: MAL News, edited)",
            "background": "This special Gintama episode was previewed at a screening at Jump Special Anime Festa 2014. On April 3, 2015, it was later bundled with a limited edition of the manga's 58th volume.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 10643,
            "url": "https://myanimelist.net/anime/10643/Gintama__Dai_Hanseikai",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1725/110927.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1725/110927t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1725/110927l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1725/110927.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1725/110927t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1725/110927l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama: Dai Hanseikai"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama Harumatsuri 2010"
                },
                {
                    "type": "Japanese",
                    "title": "アニメ銀魂　大反省会"
                }
            ],
            "title": "Gintama: Dai Hanseikai",
            "title_english": null,
            "title_japanese": "アニメ銀魂　大反省会",
            "title_synonyms": [
                "Gintama Harumatsuri 2010"
            ],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2010-03-25T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 25,
                        "month": 3,
                        "year": 2010
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Mar 25, 2010"
            },
            "duration": "14 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.07,
            "scored_by": 16590,
            "rank": 538,
            "popularity": 3685,
            "members": 38957,
            "favorites": 52,
            "synopsis": "Some of the characters get together and talk about \"regrets\" they have after 4 years of anime Gintama. Soon they fight over who gets more screen time. Special animation shown at the Gintama Haru Matsuri 2010 live event.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 40323,
            "url": "https://myanimelist.net/anime/40323/Gintama__Monster_Strike-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1806/124660.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1806/124660t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1806/124660l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1806/124660.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1806/124660t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1806/124660l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama: Monster Strike-hen"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama x Monster Strike"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂 ～モンスターストライク編～"
                }
            ],
            "title": "Gintama: Monster Strike-hen",
            "title_english": null,
            "title_japanese": "銀魂 ～モンスターストライク編～",
            "title_synonyms": [
                "Gintama x Monster Strike"
            ],
            "type": "ONA",
            "source": "Manga",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2019-08-29T00:00:00+00:00",
                "to": "2019-09-04T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 29,
                        "month": 8,
                        "year": 2019
                    },
                    "to": {
                        "day": 4,
                        "month": 9,
                        "year": 2019
                    }
                },
                "string": "Aug 29, 2019 to Sep 4, 2019"
            },
            "duration": "11 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.49,
            "scored_by": 5362,
            "rank": 1933,
            "popularity": 5388,
            "members": 16351,
            "favorites": 23,
            "synopsis": "Collaboration anime between Gintama and Monster Strike.",
            "background": "To celebrate collaboration with XFLAG, the staff behind the Gintama anime have reunited at Bandai Namco Pictures for a 10 minute special.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                },
                {
                    "mal_id": 1572,
                    "type": "anime",
                    "name": "XFLAG",
                    "url": "https://myanimelist.net/anime/producer/1572/XFLAG"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 19261,
            "url": "https://myanimelist.net/anime/19261/Gintama_x_Mameshiba",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1370/110954.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1370/110954t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1370/110954l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1370/110954.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1370/110954t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1370/110954l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama x Mameshiba"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Kanketsu-hen - Yorozuya yo Eien Nare TV Special"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂×豆しば"
                }
            ],
            "title": "Gintama x Mameshiba",
            "title_english": null,
            "title_japanese": "銀魂×豆しば",
            "title_synonyms": [
                "Gintama: Kanketsu-hen - Yorozuya yo Eien Nare TV Special"
            ],
            "type": "CM",
            "source": "Manga",
            "episodes": 6,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2013-12-03T00:00:00+00:00",
                "to": "2013-12-18T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 12,
                        "year": 2013
                    },
                    "to": {
                        "day": 18,
                        "month": 12,
                        "year": 2013
                    }
                },
                "string": "Dec 3, 2013 to Dec 18, 2013"
            },
            "duration": "31 sec per ep",
            "rating": "G - All Ages",
            "score": 6.71,
            "scored_by": 5669,
            "rank": null,
            "popularity": 5622,
            "members": 14642,
            "favorites": 60,
            "synopsis": "Gintama x Mameshiba aired as a commercial to promote the Gintama: Kanketsu-hen - Yorozuya yo Eien Nare movie.\n\nGintoki, Kagura, and Shipachi have turned into \"weird living creatures,\" parodying the short kids' anime Mameshiba that features sword bean-dog hybrid creatures.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 59688,
            "url": "https://myanimelist.net/anime/59688/Gintama_on_Theater_2D__Kintama-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1185/145136.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1185/145136t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1185/145136l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1185/145136.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1185/145136t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1185/145136l.webp"
                }
            },
            "trailer": {
                "youtube_id": "m3k2OXXfQP8",
                "url": "https://www.youtube.com/watch?v=m3k2OXXfQP8",
                "embed_url": "https://www.youtube.com/embed/m3k2OXXfQP8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/m3k2OXXfQP8/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/m3k2OXXfQP8/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/m3k2OXXfQP8/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/m3k2OXXfQP8/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/m3k2OXXfQP8/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama on Theater 2D: Kintama-hen"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂オンシアター2D 金魂篇"
                }
            ],
            "title": "Gintama on Theater 2D: Kintama-hen",
            "title_english": null,
            "title_japanese": "銀魂オンシアター2D 金魂篇",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Not yet aired",
            "airing": false,
            "aired": {
                "from": "2024-11-22T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 22,
                        "month": 11,
                        "year": 2024
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Nov 22, 2024"
            },
            "duration": "Unknown",
            "rating": "PG-13 - Teens 13 or older",
            "score": null,
            "scored_by": null,
            "rank": null,
            "popularity": 11242,
            "members": 2222,
            "favorites": 3,
            "synopsis": "A compilation film of the Kintama Arc, episodes 1–4 in the third season, featuring additional footage. The movie is a part of the \"Gintama 20th Anniversary Project.\"",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 58091,
            "url": "https://myanimelist.net/anime/58091/Gintama_on_Theater_2D__Ikkoku_Keisei-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1473/141795.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1473/141795t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1473/141795l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1473/141795.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1473/141795t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1473/141795l.webp"
                }
            },
            "trailer": {
                "youtube_id": "vwgLPKI6sz0",
                "url": "https://www.youtube.com/watch?v=vwgLPKI6sz0",
                "embed_url": "https://www.youtube.com/embed/vwgLPKI6sz0?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/vwgLPKI6sz0/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/vwgLPKI6sz0/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/vwgLPKI6sz0/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/vwgLPKI6sz0/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/vwgLPKI6sz0/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama on Theater 2D: Ikkoku Keisei-hen"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂オンシアター2D 一国傾城篇"
                }
            ],
            "title": "Gintama on Theater 2D: Ikkoku Keisei-hen",
            "title_english": null,
            "title_japanese": "銀魂オンシアター2D 一国傾城篇",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-06-21T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 21,
                        "month": 6,
                        "year": 2024
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jun 21, 2024"
            },
            "duration": "1 hr 49 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": null,
            "scored_by": null,
            "rank": 20138,
            "popularity": 8949,
            "members": 4599,
            "favorites": 13,
            "synopsis": "A compilation film of the Courtesan of the Nation Arc, episodes 5–9 in the third season, featuring additional footage. The movie is a part of the \"Gintama 20th Anniversary Project.\"",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 56544,
            "url": "https://myanimelist.net/anime/56544/Gintama_on_Theater_2D__Baragaki-hen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1071/138255.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1071/138255t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1071/138255l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1071/138255.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1071/138255t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1071/138255l.webp"
                }
            },
            "trailer": {
                "youtube_id": "Jb-Xj-rNNTA",
                "url": "https://www.youtube.com/watch?v=Jb-Xj-rNNTA",
                "embed_url": "https://www.youtube.com/embed/Jb-Xj-rNNTA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/Jb-Xj-rNNTA/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/Jb-Xj-rNNTA/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/Jb-Xj-rNNTA/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/Jb-Xj-rNNTA/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/Jb-Xj-rNNTA/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama on Theater 2D: Baragaki-hen"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂オンシアター2D バラガキ篇"
                }
            ],
            "title": "Gintama on Theater 2D: Baragaki-hen",
            "title_english": null,
            "title_japanese": "銀魂オンシアター2D バラガキ篇",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-11-10T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 10,
                        "month": 11,
                        "year": 2023
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Nov 10, 2023"
            },
            "duration": "1 hr 17 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 6.95,
            "scored_by": 248,
            "rank": 4462,
            "popularity": 10755,
            "members": 2586,
            "favorites": 5,
            "synopsis": "A compilation film of the Thorny Arc, episodes 43–46 in the second season, featuring additional footage. The movie is a part of the \"Gintama 20th Anniversary Project.\"",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 44087,
            "url": "https://myanimelist.net/anime/44087/Gintama__The_Semi-Final",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1694/110521.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1694/110521t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1694/110521l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1694/110521.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1694/110521t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1694/110521l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama: The Semi-Final"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂 THE SEMI-FINAL"
                }
            ],
            "title": "Gintama: The Semi-Final",
            "title_english": null,
            "title_japanese": "銀魂 THE SEMI-FINAL",
            "title_synonyms": [],
            "type": "Special",
            "source": "Manga",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-01-15T00:00:00+00:00",
                "to": "2021-01-20T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 1,
                        "year": 2021
                    },
                    "to": {
                        "day": 20,
                        "month": 1,
                        "year": 2021
                    }
                },
                "string": "Jan 15, 2021 to Jan 20, 2021"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.46,
            "scored_by": 40862,
            "rank": 158,
            "popularity": 2462,
            "members": 80636,
            "favorites": 254,
            "synopsis": "As the war temporarily calms down and Edo rebuilds, Gintoki finds Shinpachi—who is still unaware of his return—on a bridge. However, as a fight quickly breaks out between the Yorozuya and the Tenshouin Naraku, suspicion grows, forcing Gintoki to use what is nearest—a loincloth—to mask his identity. Saved for the time being, Gintoki enters the Yorozuya office, but unbeknownst to him, someone else is already waiting there...\n\nMeanwhile, Kondou departs Earth to marry Princess Bubbles in an attempt to improve diplomatic relations. After boarding the Gorilla Amanto mother ship, he realizes that he doesn't speak their language. Confused, Kondou tries conversing with them, only to inadvertently gain their support. However, someone associated with the princess crashes the ongoing ceremony. Will the wedding continue, or has Kondou just been saved from becoming the next Gorilla Prince?\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 32122,
            "url": "https://myanimelist.net/anime/32122/Gintama°__Umai-mono_wa_Atomawashi_ni_Suru_to_Yokodorisareru_kara_Yappari_Saki_ni_Kue",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1720/110926.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1720/110926t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1720/110926l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1720/110926.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1720/110926t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1720/110926l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama°: Umai-mono wa Atomawashi ni Suru to Yokodorisareru kara Yappari Saki ni Kue"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Jump Festa 2015 Special"
                },
                {
                    "type": "Japanese",
                    "title": "銀魂 〜美味いモノは後回しにすると横取りされるからやっぱり先に食え〜"
                }
            ],
            "title": "Gintama°: Umai-mono wa Atomawashi ni Suru to Yokodorisareru kara Yappari Saki ni Kue",
            "title_english": null,
            "title_japanese": "銀魂 〜美味いモノは後回しにすると横取りされるからやっぱり先に食え〜",
            "title_synonyms": [
                "Gintama: Jump Festa 2015 Special"
            ],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2015-11-03T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 11,
                        "year": 2015
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Nov 3, 2015"
            },
            "duration": "12 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.1,
            "scored_by": 16613,
            "rank": 504,
            "popularity": 3858,
            "members": 35145,
            "favorites": 37,
            "synopsis": "After overcoming monumental obstacles in their previous adventures, Gintoki Sakata, Shinpachi Shimura, and Kagura gather at the Yorozuya office to discuss important matters. The trio, accompanied by their hilarious and eccentric friends, reveals a long-awaited notice: the biggest Gintama arc is coming to the big screens!\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https://myanimelist.net/anime/genre/21/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        }
    ],
    airing: function(){
   return this.data. filter(function(element, index) {
       return element.airing === true
    })

   },
    notAiring: function () {
        return this.data.filter(function(element, index){
            return element.airing === false
        })
    }
}

console.log(gintamaAnime.airing())





const football = {   
    "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https://media.api-sports.io/football/leagues/39.png",
        "flag": "https://media.api-sports.io/flags/gb.svg",
        "season": 2022,
        "standings": 
        
            [
                {
                    "rank": 1,
                    "team": {
                        "id": 50,
                        "name": "Manchester City",
                        "logo": "https://media.api-sports.io/football/teams/50.png"
                    },
                    "points": 89,
                    "goalsDiff": 61,
                    "group": "Premier League",
                    "form": "LDWWW",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 28,
                        "draw": 5,
                        "lose": 5,
                        "goals": {
                            "for": 94,
                            "against": 33
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 17,
                        "draw": 1,
                        "lose": 1,
                        "goals": {
                            "for": 60,
                            "against": 17
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 11,
                        "draw": 4,
                        "lose": 4,
                        "goals": {
                            "for": 34,
                            "against": 16
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 2,
                    "team": {
                        "id": 42,
                        "name": "Arsenal",
                        "logo": "https://media.api-sports.io/football/teams/42.png"
                    },
                    "points": 84,
                    "goalsDiff": 45,
                    "group": "Premier League",
                    "form": "WLLWW",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 26,
                        "draw": 6,
                        "lose": 6,
                        "goals": {
                            "for": 88,
                            "against": 43
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 14,
                        "draw": 3,
                        "lose": 2,
                        "goals": {
                            "for": 53,
                            "against": 25
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 12,
                        "draw": 3,
                        "lose": 4,
                        "goals": {
                            "for": 35,
                            "against": 18
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 3,
                    "team": {
                        "id": 33,
                        "name": "Manchester United",
                        "logo": "https://media.api-sports.io/football/teams/33.png"
                    },
                    "points": 75,
                    "goalsDiff": 15,
                    "group": "Premier League",
                    "form": "WWWWL",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 23,
                        "draw": 6,
                        "lose": 9,
                        "goals": {
                            "for": 58,
                            "against": 43
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 15,
                        "draw": 3,
                        "lose": 1,
                        "goals": {
                            "for": 36,
                            "against": 10
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 3,
                        "lose": 8,
                        "goals": {
                            "for": 22,
                            "against": 33
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 4,
                    "team": {
                        "id": 34,
                        "name": "Newcastle",
                        "logo": "https://media.api-sports.io/football/teams/34.png"
                    },
                    "points": 71,
                    "goalsDiff": 35,
                    "group": "Premier League",
                    "form": "DDWDL",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 19,
                        "draw": 14,
                        "lose": 5,
                        "goals": {
                            "for": 68,
                            "against": 33
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 11,
                        "draw": 6,
                        "lose": 2,
                        "goals": {
                            "for": 36,
                            "against": 14
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 8,
                        "lose": 3,
                        "goals": {
                            "for": 32,
                            "against": 19
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 5,
                    "team": {
                        "id": 40,
                        "name": "Liverpool",
                        "logo": "https://media.api-sports.io/football/teams/40.png"
                    },
                    "points": 67,
                    "goalsDiff": 28,
                    "group": "Premier League",
                    "form": "DDWWW",
                    "status": "same",
                    "description": "Promotion - Europa League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 19,
                        "draw": 10,
                        "lose": 9,
                        "goals": {
                            "for": 75,
                            "against": 47
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 13,
                        "draw": 5,
                        "lose": 1,
                        "goals": {
                            "for": 46,
                            "against": 17
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 29,
                            "against": 30
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 6,
                    "team": {
                        "id": 51,
                        "name": "Brighton",
                        "logo": "https://media.api-sports.io/football/teams/51.png"
                    },
                    "points": 62,
                    "goalsDiff": 19,
                    "group": "Premier League",
                    "form": "LDWLW",
                    "status": "same",
                    "description": "Promotion - Europa League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 8,
                        "lose": 12,
                        "goals": {
                            "for": 72,
                            "against": 53
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 10,
                        "draw": 4,
                        "lose": 5,
                        "goals": {
                            "for": 37,
                            "against": 21
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 4,
                        "lose": 7,
                        "goals": {
                            "for": 35,
                            "against": 32
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 7,
                    "team": {
                        "id": 66,
                        "name": "Aston Villa",
                        "logo": "https://media.api-sports.io/football/teams/66.png"
                    },
                    "points": 61,
                    "goalsDiff": 5,
                    "group": "Premier League",
                    "form": "WDWLL",
                    "status": "same",
                    "description": "Promotion - Europa Conference League (Qualification: )",
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 7,
                        "lose": 13,
                        "goals": {
                            "for": 51,
                            "against": 46
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 12,
                        "draw": 2,
                        "lose": 5,
                        "goals": {
                            "for": 33,
                            "against": 21
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 18,
                            "against": 25
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 8,
                    "team": {
                        "id": 47,
                        "name": "Tottenham",
                        "logo": "https://media.api-sports.io/football/teams/47.png"
                    },
                    "points": 60,
                    "goalsDiff": 7,
                    "group": "Premier League",
                    "form": "WLLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 6,
                        "lose": 14,
                        "goals": {
                            "for": 70,
                            "against": 63
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 12,
                        "draw": 1,
                        "lose": 6,
                        "goals": {
                            "for": 37,
                            "against": 25
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 33,
                            "against": 38
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 9,
                    "team": {
                        "id": 55,
                        "name": "Brentford",
                        "logo": "https://media.api-sports.io/football/teams/55.png"
                    },
                    "points": 59,
                    "goalsDiff": 12,
                    "group": "Premier League",
                    "form": "WWWLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 15,
                        "draw": 14,
                        "lose": 9,
                        "goals": {
                            "for": 58,
                            "against": 46
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 10,
                        "draw": 7,
                        "lose": 2,
                        "goals": {
                            "for": 35,
                            "against": 18
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 7,
                        "lose": 7,
                        "goals": {
                            "for": 23,
                            "against": 28
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 10,
                    "team": {
                        "id": 36,
                        "name": "Fulham",
                        "logo": "https://media.api-sports.io/football/teams/36.png"
                    },
                    "points": 52,
                    "goalsDiff": 2,
                    "group": "Premier League",
                    "form": "LDWWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 15,
                        "draw": 7,
                        "lose": 16,
                        "goals": {
                            "for": 55,
                            "against": 53
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 5,
                        "lose": 6,
                        "goals": {
                            "for": 31,
                            "against": 29
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 7,
                        "draw": 2,
                        "lose": 10,
                        "goals": {
                            "for": 24,
                            "against": 24
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 11,
                    "team": {
                        "id": 52,
                        "name": "Crystal Palace",
                        "logo": "https://media.api-sports.io/football/teams/52.png"
                    },
                    "points": 45,
                    "goalsDiff": -9,
                    "group": "Premier League",
                    "form": "DDWLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 12,
                        "lose": 15,
                        "goals": {
                            "for": 40,
                            "against": 49
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 7,
                        "draw": 7,
                        "lose": 5,
                        "goals": {
                            "for": 21,
                            "against": 23
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 5,
                        "lose": 10,
                        "goals": {
                            "for": 19,
                            "against": 26
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 12,
                    "team": {
                        "id": 49,
                        "name": "Chelsea",
                        "logo": "https://media.api-sports.io/football/teams/49.png"
                    },
                    "points": 44,
                    "goalsDiff": -9,
                    "group": "Premier League",
                    "form": "DLLDW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 11,
                        "lose": 16,
                        "goals": {
                            "for": 38,
                            "against": 47
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 7,
                        "lose": 6,
                        "goals": {
                            "for": 20,
                            "against": 19
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 4,
                        "lose": 10,
                        "goals": {
                            "for": 18,
                            "against": 28
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 13,
                    "team": {
                        "id": 39,
                        "name": "Wolves",
                        "logo": "https://media.api-sports.io/football/teams/39.png"
                    },
                    "points": 41,
                    "goalsDiff": -27,
                    "group": "Premier League",
                    "form": "LDLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 8,
                        "lose": 19,
                        "goals": {
                            "for": 31,
                            "against": 58
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 9,
                        "draw": 3,
                        "lose": 7,
                        "goals": {
                            "for": 19,
                            "against": 20
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 5,
                        "lose": 12,
                        "goals": {
                            "for": 12,
                            "against": 38
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 14,
                    "team": {
                        "id": 48,
                        "name": "West Ham",
                        "logo": "https://media.api-sports.io/football/teams/48.png"
                    },
                    "points": 40,
                    "goalsDiff": -13,
                    "group": "Premier League",
                    "form": "LWLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 7,
                        "lose": 20,
                        "goals": {
                            "for": 42,
                            "against": 55
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 4,
                        "lose": 7,
                        "goals": {
                            "for": 26,
                            "against": 24
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 3,
                        "draw": 3,
                        "lose": 13,
                        "goals": {
                            "for": 16,
                            "against": 31
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 15,
                    "team": {
                        "id": 35,
                        "name": "Bournemouth",
                        "logo": "https://media.api-sports.io/football/teams/35.png"
                    },
                    "points": 39,
                    "goalsDiff": -34,
                    "group": "Premier League",
                    "form": "LLLLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 6,
                        "lose": 21,
                        "goals": {
                            "for": 37,
                            "against": 71
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 4,
                        "lose": 9,
                        "goals": {
                            "for": 20,
                            "against": 28
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 2,
                        "lose": 12,
                        "goals": {
                            "for": 17,
                            "against": 43
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 16,
                    "team": {
                        "id": 65,
                        "name": "Nottingham Forest",
                        "logo": "https://media.api-sports.io/football/teams/65.png"
                    },
                    "points": 38,
                    "goalsDiff": -30,
                    "group": "Premier League",
                    "form": "DWDWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 9,
                        "draw": 11,
                        "lose": 18,
                        "goals": {
                            "for": 38,
                            "against": 68
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 6,
                        "lose": 5,
                        "goals": {
                            "for": 27,
                            "against": 24
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 1,
                        "draw": 5,
                        "lose": 13,
                        "goals": {
                            "for": 11,
                            "against": 44
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 17,
                    "team": {
                        "id": 45,
                        "name": "Everton",
                        "logo": "https://media.api-sports.io/football/teams/45.png"
                    },
                    "points": 36,
                    "goalsDiff": -23,
                    "group": "Premier League",
                    "form": "WDLWD",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 8,
                        "draw": 12,
                        "lose": 18,
                        "goals": {
                            "for": 34,
                            "against": 57
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 3,
                        "lose": 10,
                        "goals": {
                            "for": 16,
                            "against": 27
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 9,
                        "lose": 8,
                        "goals": {
                            "for": 18,
                            "against": 30
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 18,
                    "team": {
                        "id": 46,
                        "name": "Leicester",
                        "logo": "https://media.api-sports.io/football/teams/46.png"
                    },
                    "points": 34,
                    "goalsDiff": -17,
                    "group": "Premier League",
                    "form": "WDLLD",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 9,
                        "draw": 7,
                        "lose": 22,
                        "goals": {
                            "for": 51,
                            "against": 68
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 5,
                        "draw": 4,
                        "lose": 10,
                        "goals": {
                            "for": 23,
                            "against": 27
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 3,
                        "lose": 12,
                        "goals": {
                            "for": 28,
                            "against": 41
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 19,
                    "team": {
                        "id": 63,
                        "name": "Leeds",
                        "logo": "https://media.api-sports.io/football/teams/63.png"
                    },
                    "points": 31,
                    "goalsDiff": -30,
                    "group": "Premier League",
                    "form": "LLDLL",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 7,
                        "draw": 10,
                        "lose": 21,
                        "goals": {
                            "for": 48,
                            "against": 78
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 5,
                        "draw": 7,
                        "lose": 7,
                        "goals": {
                            "for": 26,
                            "against": 37
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 3,
                        "lose": 14,
                        "goals": {
                            "for": 22,
                            "against": 41
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 20,
                    "team": {
                        "id": 41,
                        "name": "Southampton",
                        "logo": "https://media.api-sports.io/football/teams/41.png"
                    },
                    "points": 25,
                    "goalsDiff": -37,
                    "group": "Premier League",
                    "form": "DLLLL",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 6,
                        "draw": 7,
                        "lose": 25,
                        "goals": {
                            "for": 36,
                            "against": 73
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 2,
                        "draw": 5,
                        "lose": 12,
                        "goals": {
                            "for": 19,
                            "against": 37
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 2,
                        "lose": 13,
                        "goals": {
                            "for": 17,
                            "against": 36
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                }
            ]
        
    },
    champion: function () {
        return this.league.standings.filter(function(element, index){
            return element.rank === 1
        })
    },
    top4: function (){
        return this.league.standings.filter(function(element, index){
            return element.rank >= 1 && element.rank <= 4
        })
    },
    favoriteTeme: function (){
        return this.league.standings.filter(function(element, index){
            return element.rank === 12
        })
    },
    goalsDiff: function (){
        return this.league.standings.filter(function(element, index){
            return element.goalsDiff === 12
        })
    }
}

console.log(football.goalsDiff())