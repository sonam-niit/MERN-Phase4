var FIXTURES = window.FIXTURES || {};
FIXTURES.server = {
    'recipes': {
        'ok': [
            '200',
            { 'Content-Type': 'application/json' },
            JSON.stringify([FIXTURES.recipes.noRestrictions])
        ]
    }
};
