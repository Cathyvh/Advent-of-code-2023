"use strict";
const dayRunner = (day) => {
    const individualday = `day${day}`;
    const runDay = require(`./${individualday}/solution.ts`);
    runDay();
};
dayRunner(0);
