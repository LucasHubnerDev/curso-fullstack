// Trabalhando com o sistema de arquivos usando promises (forma moderna)
import { readdir, stat } from 'node:fs/promises';

// Utilitário para lidar com caminhos de forma cross-platform
import path from 'node:path';

// Necessário para obter __filename e __dirname no ESM
import { fileURLToPath } from 'node:url';

/**
 * __filename e __dirname no ESM
 */

// No ESM, não existem __filename e __dirname nativamente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Função principal
 */
async function readDirRecursive(rootDir = __dirname) {
    try {
        // Lê o diretório e retorna os arquivos/pastas
        const files = await readdir(rootDir);

        await walk(files, rootDir);
    } catch (error) {
        console.error('Erro ao ler o diretório:', error);
    }
}

/**
 * Função que percorre os arquivos
 */
async function walk(files, rootDir) {
    for (const file of files) {
        if (shouldIgnoreFile(file)) {
            continue; // pula para o próximo arquivo
        }

        // Gera o caminho absoluto do arquivo/pasta
        const fullPath = path.resolve(rootDir, file);

        // Obtém informações do arquivo
        const stats = await stat(fullPath);

        console.log({
            name: file
            //   isDirectory: stats.isDirectory(),
            //   isFile: stats.isFile(),
            //   path: fullPath
        });

        // Se for uma pasta, entra nela (recursão)
        if (stats.isDirectory()) {
            const subFiles = await readdir(fullPath);
            await walk(subFiles, fullPath);
        }
    }
}

const IGNORE_EXTENSIONS = ['.css', '.html', '.js']
function shouldIgnoreFile(file) {
    // extname
    // método usado para retornar e extensão de uma pasta 
    return IGNORE_EXTENSIONS.includes(path.extname(file))
}

// Executa a leitura
readDirRecursive('/home/lucas/Documentos/estudos/curso-fullstack');
