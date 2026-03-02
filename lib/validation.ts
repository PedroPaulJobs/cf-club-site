export interface CompleteFormData {
    // Step 1: Basic info
    nome: string;
    email: string;
    telefone: string;
    idade: number;
    sebrae: 'sim' | 'não';
    turma?: string; // Only if sebrae = 'sim'
    instituicao?: string; // Only if sebrae = 'não'

    // Step 2: Discovery
    como_descobriu: string;
    como_descobriu_outro?: string; // Only if como_descobriu = 'Outro'
}
