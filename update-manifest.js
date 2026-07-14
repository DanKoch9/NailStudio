const fs = require('fs');
const path = require('path');

const katerinaDir = path.join(__dirname, 'Prace_katerina');
const pavlaDir = path.join(__dirname, 'Prace_pavla');

function getImagesFromDir(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });
}

const manifest = {
    katerina: getImagesFromDir(katerinaDir),
    pavla: getImagesFromDir(pavlaDir)
};

fs.writeFileSync(path.join(__dirname, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('manifest.json updated successfully!');
