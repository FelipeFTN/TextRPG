import mapZones from './map'
import { PlayerClass } from '../classes/player'

export function showMap(player: PlayerClass): void {
    console.log('\n' + ("#".repeat(1.9 * player.getPlayerLocation().length)))
    console.log(`# ${player.getPlayerPosition()} #`)
    mapZones.forEach(function (zone) {
        if (zone.ZONECODE == player.getPlayerLocation()) {
            console.log(`# ${zone.ZONENAME} #`)
        }
    })
    console.log('\n' + ("#".repeat(4 * player.getPlayerLocation().length)))
}