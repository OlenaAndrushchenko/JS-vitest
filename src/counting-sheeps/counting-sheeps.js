export function countSheep(list) { 
    const sheeps = list.filter(value => value === true).length;

    return (sheeps > 0) ? `There are ${sheeps} sheeps in total` : `Oops!!! Wolves have eaten the sheep`
}
