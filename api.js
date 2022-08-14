const MedoAPI = require('medoapi');

let games = [{
    'Joue à': 'RPZ',
    'Regarde': 'WATCHING',
    'Ecoute': 'LISTENING',
}];

MedoAPI.onlineBot("MTAwNjkxNTY2MTk1NzY5MzUyMA.GGCO07.K8HPYp5mVbrMvaVQSRDWj3EGhr_MqwFyDG08t0", /* Si vous voulez ajoutez un jeu */ [games['Joue à '], "L'empire des RPZ"]);