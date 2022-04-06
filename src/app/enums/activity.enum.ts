/**
 * Liste des types d'activités possible
 */
import {MyActivity} from '../models/activities.model';

export enum ActivitiesType {
  VTT = 'VTT',
  VELO_INSIDE = 'VELO_INSIDE',
  RAMEUR = 'RAMEUR'
}

/**
 * Nom des activités
 */
export enum ActivitiesNameLabel {
  VTT = 'VTT',
  VELO_INSIDE = 'HOME TRAINER',
  RAMEUR = 'RAMEUR'
}

/**
 * Nom des activités dans el tableau
 */
export enum ActivityFieldsLabel {
  userEmail = 'Utilisateur',
  activityDate = 'Date de l\'activité',
  activityName = 'Activité',
  duration = 'Durée',
  distance = 'Distance',
  maxSpeed = 'Vitesse max',
  averageSpeed = 'Vitesse moy',
  averageFc = 'FC moy',
  maxFc = 'FC max',
  aerobie = 'Aérobie',
  anaerobique = 'Anaérobique',
  exerciceLoad = 'Exercice load',
  averagePower = 'Puissance moy',
  maxPower = 'Puissance max',
  averageCadence = 'Cadence moy',
  maxCadence = 'Cadence max',
  maxAveragePower = 'Puissance moy max(20mn)'
}

export enum FirebaseCollections {
  ACTIVITY = 'activities',
}

export enum ActivityFieldsMax {
  DISTANCE = 30,
  AVERAGE_SPEED = 40,
  MAX_SPEED = 50,
  AVERAGE_FC = 140,
  MAX_FC = 210,
  AEROBIE = 5,
  ANAEROBIQUE = 5,
  EXERCICE_LOAD = 50
}

export enum ActivityUnits {
  DISTANCE = 'km',
  SPEED = 'km/h',
  FC = 'bpm',
  CADENCE = 'rpm',
  POWER = 'w',
  ALLURE = 'mn/500m',
  FREQUENCE_COUPS = 'cps/mn'
}

export enum ActivityFormScope {
  COMMON = 'COMMON',
  SPECIFIC = 'SPECIFIC'
}




