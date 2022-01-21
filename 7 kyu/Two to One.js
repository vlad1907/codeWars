function longest(s1, s2) {
    return longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
}