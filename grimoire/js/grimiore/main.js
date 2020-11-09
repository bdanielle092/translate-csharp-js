function main() {
    // make a array of spells
    const allSpells = [{
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyRequired: 5.1
    },
    {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyRequired: 2.99
    },
    {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyRequired: 12.2
    },
    {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyRequired: 100.0
    },
    {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyRequired: 2921.5
    }
    ]
    // function for good books 
    const makeGoodSpellBook = () => {
        return allSpells
    }
    // function for evil books
    const makeEvilSpellBook = () => {
        return allSpells
    }
    // goodbook = goodSpells
    const goodBook = makeGoodSpellBook(allSpells)
    // evilbook = evilSpell
    const evilBook = makeEvilSpellBook(allSpells)
    // spell = goodbook 
    const spells = goodBook.push('Conjure some gold for a local charity')
    //console log goodbook 
    console.log(goodBook)


}

main();