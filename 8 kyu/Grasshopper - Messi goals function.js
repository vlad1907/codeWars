function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [...arguments].reduce((a, b) => a + b, 0);
}