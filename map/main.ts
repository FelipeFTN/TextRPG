import mapZones from './map'
import { PlayerClass } from '../classes/player'

export function ShowMap(player: PlayerClass): void {
    console.log('\n' + ("#".repeat(1.9 * player.GetPlayerLocation().length)))
    console.log(`# ${player.GetPlayerPosition()} #`)
    mapZones.forEach(function (zone) {
        if (zone.ZONECODE == player.GetPlayerLocation()) {
            console.log(`# ${zone.ZONENAME} #`)
        }
    })
    console.log('\n' + ("#".repeat(4 * player.GetPlayerLocation().length)))
}