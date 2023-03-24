import { INpcFeatureData, NpcFeatureType, NpcFeature } from '../NpcFeature';

export interface INpcSystemData extends INpcFeatureData {
  type: NpcFeatureType.System;
}

export class NpcSystem extends NpcFeature {
  public constructor(data: INpcSystemData, packName?: string) {
    super(data, packName);
    this.type = NpcFeatureType.System;
  }

  public get IsLimited(): boolean {
    return this.Tags.some((x) => x.IsLimited);
  }

  public get IsRecharging(): boolean {
    return this.Tags.some((x) => x.IsRecharging);
  }

  public get ChargeRoll(): string {
    return this.Tags.find((x) => x.IsRecharging).Value.toString();
  }

  public get Color(): string {
    return 'npc--system';
  }

  public get Icon(): string {
    return 'cc:system';
  }
}
