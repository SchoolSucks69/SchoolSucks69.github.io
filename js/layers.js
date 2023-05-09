addLayer("p", {
    name: "PlankLength", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "PL", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Plank", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
	    if (hasUpgrade('p', 16)) mult = mult.times(2)
	    if (hasUpgrade('n', 11)) gain = gain.times(4)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	    upgrades: {
        11: {
    title: "Basic Boost",
    description: "Double your point gain.",
    cost: new Decimal(1),
        },
	 12: {
    title: "Another Basic Boost",
    description: "Double your point gain.",
    cost: new Decimal(4),
        },
	13: {
    title: "Ok Boost",
    description: "add a 2.5x multiplier",
    cost: new Decimal(10),
        },
	14: {
    title: "better Boost",
    description: "add a 3x multiplier",
    cost: new Decimal(15),
        },
	15: {
    title: "Good Boost",
    description: "ok were getting there (3.7x)",
    cost: new Decimal(40),
        },
	16: {
    title: "OMG Boost",
    description: "wow plank boost!",
    cost: new Decimal(200),
        },
    },
})
addLayer("n", {
    name: "Nanometers", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "NM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		Plank: new Decimal(0),
    }},
    color: "#2f36b8",
    requires: new Decimal(200000), // Can be a function that takes requirement increases into account
    resource: "Nano", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	    upgrades: {
        11: {
    title: "Plank Funnies",
    description: "quad  your Plank gain.",
    cost: new Decimal(1),
        },
    },
})
