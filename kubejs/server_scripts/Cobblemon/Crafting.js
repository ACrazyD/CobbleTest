console.info('Cobblemon Remastered (Sorta)')

ServerEvents.recipes(e => {
    
    //PokeBall Removes
    e.remove({output: 'cobblemon:dream_ball'})
    e.remove({output: 'cobblemon:dusk_ball'})
    e.remove({output: 'cobblemon:love_ball'})
    e.remove({output: 'cobblemon:quick_ball'})
    e.remove({output: 'cobblemon:repeat_ball'})
    e.remove({output: 'cobblemon:timer_ball'})
    e.remove({output: 'cobblemon:ultra_ball'})
    e.remove({output: 'cobblemon:master_ball'})

    //Other Removes
    e.remove({output: 'cobblemon:healing_machine'})
    e.remove({output: 'cobblemon:pc'})
    e.remove({output: 'cobblemon:exp_share'})

    //PokeBall Rebuilds
    e.shaped('2x cobblemon:dream_ball', [
        ' t ',
        'lcl',
        ' b '
    ], {
        t: 'cobblemon:red_apricorn',
        l: 'cobblemon:pink_apricorn',
        c: 'create:polished_rose_quartz',
        b: 'cobblemon:blue_apricron'
    })
    e.shaped('2x cobblemon:dusk_ball', [
        ' t ',
        'lcl',
        ' t '
    ], {
        t: 'cobblemon:green_apricorn',
        l: 'cobblemon:black_apricorn',
        c: 'create:brass_ingot'
    })
    e.shaped('2x cobblemon:love_ball', [
        ' t ',
        'lcl',
        ' l '
    ], {
        t: 'cobblemon:white_apricorn',
        l: 'cobblemon:pink_apricorn',
        c: 'create:brass_ingot'
    })
    e.shaped('2x cobblemon:quick_ball', [
        ' t ',
        'lcl',
        ' t '
    ], {
        t: 'cobblemon:blue_apricorn',
        l: 'cobblemon:yellow_apricorn',
        c: 'create:brass_ingot'
    })
    e.shaped('2x cobblemon:repeat_ball', [
        ' t ',
        'lcl',
        ' b '
    ], {
        t: 'cobblemon:black_apricorn',
        l: 'cobblemon:red_apricorn',
        c: 'create:brass_ingot',
        b: 'cobblemon:yellow_apricorn'
    })
    e.shaped('2x cobblemon:timer_ball', [
        ' t ',
        'lcl',
        ' b '
    ], {
        t: 'cobblemon:red_apricorn',
        l: 'cobblemon:white_apricorn',
        c: 'create:brass_ingot',
        b: 'cobblemon:black_apricorn'
    })
    e.shaped('2x cobblemon:ultra_ball', [
        ' t ',
        'lcl',
        ' t '
    ], {
        t: 'cobblemon:black_apricorn',
        l: 'cobblemon:yellow_apricorn',
        c: 'create:brass_ingot'
    })

    //Other Rebuilds
    e.shaped('cobblemon:exp_share', [
        'GCG',
        'LHL',
		'I I'
    ], {
        I: 'create:iron_sheet',
        G: 'create:electron_tube',
        C: 'minecraft:prismarine_crystals',
        L: 'create:experience_nugget',
        H: 'minecraft:netherite_helmet'
    })
    e.shaped('cobblemon:healing_machine', [
        'cQc',
        'iRi',
        'iDi'
    ], {
        c: 'create:copper_sheet',
        Q: 'minecraft:ghast_tear',
        i: 'minecraft:iron_ingot',
        R: 'cobblemon:max_revive',
        D: 'minecraft:diamond'
    })


})//End Of File