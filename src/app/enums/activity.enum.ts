/**
 * Liste des types d'activités possible
 */
export enum ActivitiesType {
  VTT = 'VTT',
  VELO_INSIDE = 'VELO_INSIDE',
  RAMEUR = 'RAMEUR'
}

/**
 * Nom des activités
 */
export enum ActivitiesNameLabel {
  VTT = 'Vtt',
  VELO_INSIDE = 'Vélo home trainer',
  RAMEUR = 'Rameur'
}

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
  averageCadence = 'Cqdence moy',
  maxCadence = 'Cadence max',
  maxAveragePower = 'Puissance moy max(20mn)'
}
export enum FirebaseCollections {
  BASE_ACTIVITY = 'activities',
  HOMETRAINER_ACTIVITY = 'hometrainer-activities',
  VTT_ACTIVITY = ' vtt-activities',
  ROWER_ACTIVITY = 'rower-activities'
}


