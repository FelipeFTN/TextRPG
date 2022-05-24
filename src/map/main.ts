import mapZones from './map'
import { playerClass } from '../classes/player'

export function showMap(player: playerClass): void {
    console.log('\n' + ("#".repeat(1.9 * player.getPlayersLocation().length)))
    console.log(`# ${player.getPlayersPosition()} #`)
    mapZones.forEach(function (zone) {
        if (zone.ZONECODE == player.getPlayersLocation()) {
            console.log(`# ${zone.ZONENAME} #`)
        }
    })
    console.log('\n' + ("#".repeat(4 * player.getPlayersLocation().length)))
}