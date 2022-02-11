/**
 * Liste des activités possible
 */
export enum ActivityList {
  VTT = 'VTT',
  VELO_INSIDE = 'Vélo intérieur',
  RAMEUR = 'Rameur'
}

export const VELO_INSIDE = 'VELO_INSIDE';
export const VTT = ActivityList.VTT;

export interface Activity {
  activityName: string;
  activityDate: string;
  aerobie: number;
  anaerobique: number;
  averageCadence?: number;
  averageFc: number;
  averagePower?: number;
  averageSpeed: number;
  distance: number;
  duration: number;
  energy: number;
  exerciceLoad: number;
  ftp?: number;
  maxCadence?: number;
  maxFc: number;
  maxPower?: number;
  maxSpeed: number;
}
