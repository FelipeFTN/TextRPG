import mapZones from './map'
import { playerClass } from '../classes/player'

export function showMap(player: playerClass): void {
    console.log('\n' + ("#".repeat(1.9 * player.location.length)))
    console.log(`# ${player.position.toUpperCase()} #`)
    mapZones.forEach(function (zone) {
        if (zone.ZONECODE == player.position) {
            console.log(`# ${zone.ZONENAME} #`)
        }
    })
    console.log('\n' + ("#".repeat(4 * player.location.length)))
}