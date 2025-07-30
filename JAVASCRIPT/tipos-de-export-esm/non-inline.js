function group() {
    console.log('Expot nomeado não-inline (agrupado)');
}

function exportDefault() {
    console.log('Export default não-inline');
}

export { group };

export default exportDefault;