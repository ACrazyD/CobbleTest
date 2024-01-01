//allow cutting 3 sticks from any plank on the stonecutter

ServerEvents.recipes(e => {
    
    //Some Random Create Building Blocks
    e.stonecutting('create_easy_structures:destroyedtrack_1', 'create:track')
    e.stonecutting('create_easy_structures:destroyedtrack_2', 'create:track')
    e.stonecutting('create_easy_structures:destroyedtrack_3', 'create:track')

})//End Of File