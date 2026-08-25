var item = {
    "Ostateczny Item Testowy": {
        type: "gear",
        name: "Ostateczny Item Testowy",
        description: "Zmienia statystyki tak: siła: {stats.strength}, reflex: {stats.reflex}, modyfikator intuicji: {stats.intuitionMod}, modyfikator zwinności: {stats.agilityMod}, zdrowie: {stats.maxHp}, obrażenia: {stats.damage}, pancerz fizyczny: {stats.physArmor}, pancerz fizyczny procentowy: {stats.physArmorPerc}, pancerz magiczny: {stats.magArmor}, pancerz magiczny procentowy: {stats.magArmorPerc}.",
        stats: {
            strength: 2,
            reflex: -2,
            intuitionMod: -3,
            agilityMod: 1,
            maxHp: "[10 + 1 * reflex - 1 * strength]",
            damage: "[2 * strength]",
            physArmor: "[0.5 * vitality]",
            magArmor: "[-3 - 0.5 * intuition]",
        },
    },
    "Ostateczny Item Testowy 2": {
        type: "gear",
        name: "Ostateczny Item Testowy 2",
        description: "Opis.",
        properties: ["prop_extra_turn"],
        value: 100,
        stats: {
            maxHp: "[-1 * attunement + 2 * vitality]",
            damage: "[1 * resilience]",
            physArmor: "[-10 + 2 * vitality]",
            magArmor: 5,
        },
    },
    "Ostateczny Item Testowy 3": {
        type: "gear",
        name: "Ostateczny Item Testowy 3",
        description: "",
        properties: ["prop_frenzy"],
        value: 100,
        stats: {
            maxHp: "[-1 * attunement + 2 * vitality]",
            damage: "[1 * resilience]",
            physArmor: "[-10 + 2 * vitality]",
            magArmor: "[2 * damage]",
        },
    }
}