import { CompleteFormData } from './validation';

// Google Forms URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfKa2IwuQn4xCCK4yTAja_8UxPKuBZ45k9xfzrXxSJ7nDXocw/formResponse';

// Updated mapping of form fields to Google Forms entry IDs
const ENTRY_IDS = {
    nome: 'entry.658055895',
    email: 'entry.249087095',
    telefone: 'entry.57798074',
    idade: 'entry.298884198',
    sebrae: 'entry.1290764352',
    turma: 'entry.1333145369',
    instituicao: 'entry.2120857853',
    como_descobriu: 'entry.1241513166',
    como_descobriu_outro: 'entry.1241513166.other_option_response',
};

export interface SubmissionResult {
    success: boolean;
    error?: string;
}

export const submitToGoogleForms = async (
    formData: CompleteFormData
): Promise<SubmissionResult> => {
    try {
        // Create URLSearchParams for proper encoding
        const payload = new URLSearchParams();

        // Basic fields (always sent)
        payload.append(ENTRY_IDS.nome, formData.nome);
        payload.append(ENTRY_IDS.email, formData.email);
        payload.append(ENTRY_IDS.telefone, formData.telefone);
        payload.append(ENTRY_IDS.idade, formData.idade.toString());

        // Sebrae field - capitalize first letter to match Google Forms options
        const sebraeValue = formData.sebrae.charAt(0).toUpperCase() + formData.sebrae.slice(1);
        payload.append(ENTRY_IDS.sebrae, sebraeValue);

        // Conditional fields based on Sebrae answer
        const sebraeLower = formData.sebrae.toLowerCase();

        if (sebraeLower === 'sim' && formData.turma) {
            payload.append(ENTRY_IDS.turma, formData.turma);
        }
        if (sebraeLower === 'não' && formData.instituicao) {
            payload.append(ENTRY_IDS.instituicao, formData.instituicao);
        }

        // "Como descobriu" with special handling for "Outro"
        if (formData.como_descobriu === 'Outro') {
            // For "Outro" option, send the special marker
            payload.append(ENTRY_IDS.como_descobriu, '__other_option__');
            // And send the custom text in the other_option_response field
            if (formData.como_descobriu_outro) {
                payload.append(ENTRY_IDS.como_descobriu_outro, formData.como_descobriu_outro);
            }
        } else {
            // Normal option selected
            payload.append(ENTRY_IDS.como_descobriu, formData.como_descobriu);
        }

        // Submit to Google Forms
        // Note: Using 'no-cors' mode because Google Forms doesn't support CORS
        await fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: payload.toString(),
        });

        // Since we can't read the response with no-cors, we assume success
        return { success: true };
    } catch (error) {
        console.error('Form submission error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Erro ao enviar formulário',
        };
    }
};

// Helper function to get the configured Google Form URL
export const getGoogleFormUrl = () => GOOGLE_FORM_URL;

// Helper function to check if Google Forms is configured
export const isGoogleFormsConfigured = () => !GOOGLE_FORM_URL.includes('PLACEHOLDER');
