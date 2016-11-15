'use strict';
import { UTILS } from './utils';

/**
 * List of GET Endpoints available on the Destiny API
 */
let GET = [
        { name: 'Search', url: 'Destiny/SearchDestinyPlayer/${ membershipType }/${ name }/', required: ['membershipType', 'name'] },
        { name: 'Account', url: 'Destiny/${ membershipType }/Account/${ membershipId }/', required: ['membershipType', 'membershipId'] },
        { name: 'Character', url: 'Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/', required: ['membershipType', 'membershipId', 'characterId'] },
        { name: 'Activities', url: 'Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Activities/', required: ['membershipType', 'membershipId', 'characterId'] },
        { name: 'ActivityHistory', url: 'Destiny/Stats/ActivityHistory/${ membershipType }/${ membershipId }/${ characterId }/?definitions=true&mode=${ mode }', required: ['membershipType', 'membershipId', 'characterId', 'mode'] },
        { name: 'CarnageReport', url: 'Destiny/Stats/PostGameCarnageReport/${ activityId }/', required: ['activityId'] },
        { name: 'Inventory', url: 'Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Inventory/', required: ['membershipType', 'membershipId', 'characterId'] },
        { name: 'Progression', url: 'Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Progression/', required: ['membershipType', 'membershipId', 'characterId'] },
        { name: 'BungieUser', url: 'User/GetBungieNetUserById/${ membershipId }', required: ['membershipId'] },
        { name: 'BungieGroup', url: 'group/name/${ name }', required:['name']}
    ].map(UTILS.assignMap({ options: { method: UTILS.METHODS.GET, headers: UTILS.HEADERS } }));

/**
 * List of POST Endpoints available on the Destiny API
 */
let POST = [
        { name: 'Equip', url: 'EquipItem', required: ['characterId', 'itemId', 'membershipType'] },
        { name: 'TransferItem', url: 'TransferItem', required: ['characterId', 'itemId', 'itemReferenceHash', 'membershipType'] }
    ].map(UTILS.assignMap({ options: { method: UTILS.METHODS.POST, headers: UTILS.HEADERS } }));

let ENDPOINTS = [].concat(GET, POST);

export default ENDPOINTS;
